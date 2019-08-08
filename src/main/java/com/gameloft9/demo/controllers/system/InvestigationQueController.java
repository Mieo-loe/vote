package com.gameloft9.demo.controllers.system;
import com.gameloft9.demo.dataaccess.model.system.InvestigationQue;
import com.gameloft9.demo.dataaccess.model.system.OptionQue;
import com.gameloft9.demo.dataaccess.model.system.TotalQue;
import com.gameloft9.demo.dataaccess.model.system.VerificationQue;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.InvestigationQueService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.annotation.Resource;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("/wjdc")
public class InvestigationQueController {
    @Resource
    private InvestigationQueService investigationQueService;

    private Boolean flag6 = null;
    private Boolean flag2 = null;
    //查询全部
    @RequestMapping(value = "/findAll2List.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult findAll2(String page,String limit, String qid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new PageResultBean<Collection<InvestigationQue>>(investigationQueService.findAll2(page,limit),investigationQueService.getCount2(qid));
    }
    //添加
    @RequestMapping(value = "/add2.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD,memo = "添加")
    public IResult add2(InvestigationQue investigationQue){
        return new ResultBean<Boolean>(investigationQueService.add2(investigationQue));
    }
    //历史表删除
    @RequestMapping(value = "/delete2.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "删除")
    public IResult delete2(String qid){
        //返回json至前端的均返回ResultBean或者PageResultBean.
        investigationQueService.delete2_4(qid);//删除total
        investigationQueService.delete2_6(qid);//删除verification
        Set<String> sids = investigationQueService.findById4(qid);
        for (String sid : sids) {
            flag2 = investigationQueService.delete2_2(sid);//删除option
        }
        if (flag2 == true) {
            String history = investigationQueService.findById2(qid);
            Boolean flag3 = investigationQueService.delete2_3(history);//删除subject
            if (flag3 == true) {
                Boolean flag4 = investigationQueService.delete2(qid);//删除investigation
                if (flag4 == true) {
                    Boolean flag5 = investigationQueService.delete2_1(history);//删除creating
                    flag6 = flag5;
                }
            }
        }
        return new ResultBean<Boolean>(flag6);
    }
    //模板表删除
    @RequestMapping(value = "/delete3.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "删除")
    public IResult delete3(String tid){
        //返回json至前端的均返回ResultBean或者PageResultBean.
        String cid = investigationQueService.findById7(tid);
        List<String> sids = investigationQueService.findById8(cid);
        for (String sid : sids) {
            flag2 = investigationQueService.delete8_1(sid);
        }
        if (flag2==true) {
            Boolean flag3 = investigationQueService.delete8_2(cid);
            if (flag3==true){
                Boolean flag4 = investigationQueService.delete8_3(tid);
                if (flag4==true){
                    Boolean flag5 = investigationQueService.delete8_4(cid);
                    flag6 = flag5;
                }
            }
        }
        return new ResultBean<Boolean>(flag6);
    }
    /**
     * 修改状态
     * */
    @RequestMapping(value = "/update2.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult update2(String qid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>(investigationQueService.update2(qid));
    }

    //添加统计表的同时删除本次提交投票的账号信息
    @RequestMapping(value = "/addTotal.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD,memo = "添加")
    public IResult addTotal(@RequestBody TotalQue totalQue){
        List<OptionQue> oids = totalQue.getOids();
        String qid = totalQue.getQid();
        for (OptionQue optionQue : oids) {
            String oid = optionQue.getOid();
            TotalQue tot = new TotalQue(oid,qid);
            investigationQueService.addTotal(tot);
        }
        //获取提交过的账号，进行删除账号
        Boolean boolean3 = investigationQueService.delete9(totalQue.getContent());
        return new ResultBean<Boolean>(boolean3);
    }
    /**
     * 根据qid查询统计的oid
     * */
    @RequestMapping(value = "/getTotal.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getTotal(String qid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<List<String>>(investigationQueService.getTotal(qid));
    }

}
