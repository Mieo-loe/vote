package com.gameloft9.demo.controllers.system;

import com.alibaba.druid.support.json.JSONUtils;
import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.TpQueAccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/wjdc")
public class TpQueAccountController {
    @Resource
    TpQueAccountService accountService;

    //查询输入的账号
    @RequestMapping(value = "/findAccount.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult findAccount(@RequestBody TpQueVerification verificationQue){
        Boolean flag = false;
        String content = verificationQue.getContent();
        List<TpQueVerification> verificationList = accountService.findAccount(content);
        if (verificationList==null){//判断输入的账号名在数据库是否能查到数据，查出数据为null则返回false
            return new ResultBean<Boolean>(false);
        }else{
            //不为空，则判断查出的recordId是否属于本次投票的qid
            //即判断这个账号是否是本次投票生成的这一批账号，而不是其他投票记录生成的账号
            for (TpQueVerification verificationQue1 : verificationList) {
                String recordId1 = verificationQue1.getRecordId();//查出来的recordId
                String recordId = verificationQue.getRecordId();//本次投票的qid(外键叫recordId)
                if ((recordId1.equals(recordId))==true){//字符串比较只会返回true和false,如果用==来比较字符串，无论是否相等，都会返回false
                    flag = true;
                }
            }
            return new ResultBean<Boolean>(flag);
        }
    }

    //根据qid获取账号
    @RequestMapping(value = "/getAccount.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getAccount(String recordId){
        List<TpQueVerification> account = accountService.getAccount(recordId);
        return new ResultBean<List<TpQueVerification>>(account);
    }
}
