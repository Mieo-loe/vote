package com.gameloft9.demo.controllers.system;

import com.gameloft9.demo.dataaccess.dao.system.TpGradeRecordMapper;
import com.gameloft9.demo.dataaccess.model.system.TpGradeTemplet;
import com.gameloft9.demo.dataaccess.model.system.TpGradeAdm;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.*;
import com.gameloft9.demo.service.beans.system.TpGradePingCeList;
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
@RequestMapping("/dfmuban")
public class Tp_Grade_AdmController {
    @Autowired
    Tp_Grade_AdmService tp_grade_admService;

    @Autowired
    TpGradeTempletService tpGradeTempletService;

    @Autowired
    TpGradeRubricService tpGradeRubricService;

    @Autowired
    TpGradeAnswerService tpGradeAnswerService;

    @Autowired
    TpGradeEvaluatService tpGradeEvaluatService;

    @Autowired
    TpGradeRecordMapper tpGradeRecordMapper;

    @RequestMapping(value = "/dfmubanPage.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getMenuList(String page, String limit, Integer adm_Id){

        List<TpGradeAdm> list = tp_grade_admService.getAll(page, limit, adm_Id);

        return new PageResultBean<Collection<TpGradeAdm>>(list, tp_grade_admService.countGetAll(adm_Id));
    }

    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "删除模板")
    public IResult delete(Integer adm_Id){
        return new ResultBean<Boolean>(tp_grade_admService.delete(adm_Id));
    }

    @RequestMapping(value = "/zhiding.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.UPDATE,memo = "置顶")
    public IResult zhiding(Integer adm_Id){

        TpGradeAdm tp_grade_adm = tp_grade_admService.findByAId(adm_Id);
        tp_grade_adm.setRes_Id("52");
        return new ResultBean<Boolean>(tp_grade_admService.zhiding(tp_grade_adm));
    }

    @RequestMapping(value = "/qxzhiding.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.UPDATE,memo = "取消置顶")
    public IResult qxzhiding(Integer adm_Id){

        TpGradeAdm tp_grade_adm = tp_grade_admService.findByAId(adm_Id);
        tp_grade_adm.setRes_Id("53");
        return new ResultBean<Boolean>(tp_grade_admService.zhiding(tp_grade_adm));
    }

    @RequestMapping(value = "/get.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getall(Integer adm_Id){

        TpGradeAdm tpadm = tp_grade_admService.findByAId(adm_Id);
        String templet_title = tpadm.getTemplet_title();
        int templet_Id = tp_grade_admService.getTemId(adm_Id);

        TpGradeTemplet tpGradeTemplet = tpGradeTempletService.findByTid(templet_Id);
        String title = tpGradeTemplet.getTitle();
        String explains = tpGradeTemplet.getExplains();
        int peonum = tpGradeTemplet.getPeonum();

        List<String> resId = tpGradeRubricService.findResId(templet_Id);
        List<String> fraction = tpGradeRubricService.findFraction(templet_Id);
        List<Integer> rubId = tpGradeRubricService.findRubId(templet_Id);

        List<String> price = new ArrayList<String>();
        for (int i = 0; i < rubId.size(); i++) {
            price.addAll(tpGradeAnswerService.findPrice(rubId.get(i)));
        }

        List<String> uid = tpGradeEvaluatService.findUid(templet_Id);

        TpGradePingCeList tpGradePingCe = new TpGradePingCeList(templet_Id,templet_title,title,explains,peonum,fraction,price,resId,uid);

        return new ResultBean<TpGradePingCeList>(tpGradePingCe);
    }

    @RequestMapping(value = "/getansId.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getansId(Integer adm_Id){
        Integer templet_Id = tp_grade_admService.getTemId(adm_Id);
        List<Integer> rubId = tpGradeRubricService.findRubId(templet_Id);
        List<Integer> ans_Id = new ArrayList<Integer>();
        for (int i = 0; i < rubId.size(); i++) {
            ans_Id.addAll(tpGradeAnswerService.findAnsId(rubId.get(i)));
        }
        return new ResultBean<List<Integer>>(ans_Id);
    }

    @RequestMapping(value = "/getjilu.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getalljilu(Integer record_Id){

        Integer templet_Id = tpGradeRecordMapper.findtemid(record_Id);

        TpGradeTemplet tpGradeTemplet = tpGradeTempletService.findByTid(templet_Id);
        String title = tpGradeTemplet.getTitle();
        String explains = tpGradeTemplet.getExplains();
        int peonum = tpGradeTemplet.getPeonum();

        List<String> resId = tpGradeRubricService.findResId(templet_Id);
        List<String> fraction = tpGradeRubricService.findFraction(templet_Id);
        List<Integer> rubId = tpGradeRubricService.findRubId(templet_Id);

        List<String> price = new ArrayList<String>();
        for (int i = 0; i < rubId.size(); i++) {
            price.addAll(tpGradeAnswerService.findPrice(rubId.get(i)));
        }

        List<String> uid = tpGradeEvaluatService.findUid(templet_Id);

        TpGradePingCeList tpGradePingCe = new TpGradePingCeList(templet_Id,title,explains,peonum,fraction,price,resId,uid);

        return new ResultBean<TpGradePingCeList>(tpGradePingCe);
    }

}
