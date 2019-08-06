package com.gameloft9.demo.controllers.system;

import com.gameloft9.demo.dataaccess.model.system.TpGradeUser;
import com.gameloft9.demo.dataaccess.model.system.TpPhotoUser;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.*;
import com.gameloft9.demo.service.beans.system.TpGradeTongJi;
import com.gameloft9.demo.service.beans.system.TpGradeUserTest;
import com.gameloft9.demo.service.beans.system.TpGradeUserTest2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/10 18:33
 * @Description:
 */
@Controller
@Slf4j
@RequestMapping("/yonghu")
public class TpGradeUserController {
    @Autowired
    TpGradeUserService tpGradeUserService;
    @Autowired
    TpGradeStatisticsService tpGradeStatisticsService;
    @Autowired
    TpGradeRecordService tpGradeRecordService;
    @Autowired
    TpGradeEvaluatService tpGradeEvaluatService;
    @Autowired
    TpGradeRubricService tpGradeRubricService;
    @Autowired
    TpGradeAnswerService tpGradeAnswerService;

    @RequestMapping(value = "/yonghuPage.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getMenuList(String page, String limit, String username){

        List<TpGradeUser> list = tpGradeUserService.findAll(page, limit, username);

        return new PageResultBean<Collection<TpGradeUser>>(list, tpGradeUserService.countGetAll(username));
    }

    @RequestMapping(value = "/add.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD,memo = "注册用户")
    public IResult add(String username, String uid, String tel, String password){

        TpGradeUser tpGradeUser = new TpGradeUser(username, uid, tel, password);

        return new ResultBean<String>(tpGradeUserService.add(tpGradeUser));
    }

    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "删除用户")
    public IResult delete(String username){

        return new ResultBean<Boolean>(tpGradeUserService.del(username));

    }

    @RequestMapping(value = "/getuid.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getUid(){

        List<TpPhotoUser> uid = tpGradeUserService.getUid();

        return new ResultBean<Collection<TpPhotoUser>>(uid);
    }

    @RequestMapping(value = "/getposition.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getposition(){

        List<TpResourcesList> position = tpGradeUserService.getPosition();

        return new ResultBean<Collection<TpResourcesList>>(position);
    }

    @RequestMapping(value = "/getshuju.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getshuju(Integer record_Id){

        Integer temId = tpGradeRecordService.findtemid(record_Id);
        List<String> uid = tpGradeEvaluatService.findUid(temId);
        List<String> resId = tpGradeRubricService.findResId(temId);
        List<Integer> ansId = tpGradeStatisticsService.getAnsId(record_Id);
        List<String> price = new ArrayList<String>();
        for (int i = 0; i < ansId.size(); i++) {
            price.addAll(tpGradeAnswerService.getPrice(ansId.get(i)));
        }
        List<Double> fenshu = tpGradeUserService.clsj(uid, resId, price);
        TpGradeTongJi tpGradeTongJi = new TpGradeTongJi(uid,resId,fenshu);

        return new ResultBean<TpGradeTongJi>(tpGradeTongJi);
    }

    @RequestMapping(value = "/getyonghu.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getyonghu(String username){

        return new ResultBean<TpGradeUserTest>(tpGradeUserService.findByUsername(username));
    }

    @RequestMapping(value = "/edit.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.UPDATE,memo = "编辑用户")
    public IResult edit(TpGradeUserTest tpGradeUserTest){

        TpGradeUser tpGradeUser = new TpGradeUser(tpGradeUserTest.getUsername(),tpGradeUserTest.getUid(),tpGradeUserTest.getTel(),tpGradeUserTest.getPassword());
        tpGradeUserService.update(tpGradeUser);

        TpGradeUserTest2 tpGradeUserTest2 = new TpGradeUserTest2(tpGradeUserTest.getUid(),tpGradeUserTest.getPosition());
        tpGradeUserService.updpos(tpGradeUserTest2);

        return new ResultBean<String>("success");
    }
    
}
