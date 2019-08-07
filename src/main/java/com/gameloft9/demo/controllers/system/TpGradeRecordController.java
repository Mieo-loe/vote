package com.gameloft9.demo.controllers.system;

import com.gameloft9.demo.dataaccess.dao.system.*;
import com.gameloft9.demo.dataaccess.model.system.TpGraderecord;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.TpGradeAnswerService;
import com.gameloft9.demo.service.api.system.TpGradeRecordService;
import com.gameloft9.demo.service.api.system.TpGradeRubricService;
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
@RequestMapping("/jilu")
public class TpGradeRecordController {
    @Autowired
    TpGradeRecordService tpGradeRecordService;

    @Autowired
    TpGradeAdmMapper tp_grade_admMapper;

    @Autowired
    TpGradeRubricService tpGradeRubricService;

    @Autowired
    TpGradeAnswerService tpGradeAnswerService;

    @Autowired
    TpGradeRecordMapper tpGradeRecordMapper;

    @Autowired
    TpGradeRubricMapper tpGradeRubricMapper;

    @Autowired
    TpGradeAnswerMapper tpGradeAnswerMapper;

    @RequestMapping(value = "/jiluPage.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getMenuList(String page, String limit, Integer record_Id){

        List<TpGraderecord> list = null;
        try {
            list = tpGradeRecordService.findAll(page, limit, record_Id);
            System.out.println(list);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new PageResultBean<Collection<TpGraderecord>>(list, tpGradeRecordService.countGetAll(record_Id));
    }


    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "删除记录", memos = "13")
    public IResult delete(Integer record_Id){

        return new ResultBean<Boolean>(tpGradeRecordService.del(record_Id));

    }


    @RequestMapping(value = "/updatestatus.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.UPDATE,memo = "改变发布状态", memos = "11")
    public IResult updateStatus(Integer record_Id){//传递了数组，前台放在payload里面了，后台通过@RequestBody获取
        TpGraderecord tpGraderecord = tpGradeRecordService.findByRecord_Id(record_Id);
        if (tpGraderecord.getResId().equals("35")) {
            tpGraderecord = new TpGraderecord(tpGraderecord.getRecord_Id(),tpGraderecord.getTemplet_Id(),tpGraderecord.getR_time(),"36");
        }
        return new ResultBean<Boolean>(tpGradeRecordService.updateStatus(tpGraderecord));
    }


    @RequestMapping(value = "/getstatus.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getStatus(){

        List<TpResourcesList> status = tpGradeRecordService.getStatus();

        return new ResultBean<Collection<TpResourcesList>>(status);
    }

    @RequestMapping(value = "/getAdm.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getadm(Integer record_Id){

        Integer templet_Id = tpGradeRecordMapper.findtemid(record_Id);
        List<Integer> rubId = tpGradeRubricMapper.findRubId(templet_Id);
        List<Integer> ans_Id = new ArrayList<Integer>();
        for (int i = 0; i < rubId.size(); i++) {
            ans_Id.addAll(tpGradeAnswerMapper.findAnsId(rubId.get(i)));
        }


        return new ResultBean<Collection<Integer>>(ans_Id);
    }


}
