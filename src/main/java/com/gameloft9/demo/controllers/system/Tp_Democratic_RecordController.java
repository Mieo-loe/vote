package com.gameloft9.demo.controllers.system;

import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;


@Slf4j
@Controller
@RequestMapping("/list")
public class Tp_Democratic_RecordController {
    @Autowired
    Tp_Democratic_RecordService tp_Democratic_RecordServiceimpl;
    @Autowired
    TpDemocraticstaandrdtService tpDemocraticstaandrdtServiceimpl;
    @Autowired
    TpDemocraticsubstaandrdtService substaandrdServiceimpl;
    @Autowired
    TpBigtitleService tpBigtitleServiceimpl;
    @Autowired
    TpDemocraticSubtitleContentService tpDemocraticSubtitleContentServiceimpl;
    @Autowired
    TprelationshipService tprelationshipServiceimpl;
    @Autowired
    TpphotoUserService tpphotoUserServiceimpl;
    @Autowired
    TpDemocraticVerfiCationService tpDemocraticVerfiCationServiceimpl;
    @Autowired
    TpDemocraticsubstaandrdtService tpDemocraticsubstaandrdtServiceimpl;
//    @RequestMapping(value = "/list.do",method = RequestMethod.POST)
//    @ResponseBody
//    public IResult findAll(){
//        //返回json至前端的均返回ResultBean或者PageResultBean
//
//        return new ResultBean<Collection<Tp_Democratic_Record>>(tp_Democratic_RecordServiceimpl.findAll());
//    }
    /**
     * 获取所有角色列表
     * @param page 页序
     * @param limit 分页大小
     * */
    @RequestMapping(value = "/list.do",method = RequestMethod.POST)
    @ResponseBody
    //@BizOperLog(operType = OperType.Query,memo = "获取所有角色列表")
    public IResult getdemorList(String page,String limit){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new PageResultBean<Collection<Tp_Democratic_Record>>(tp_Democratic_RecordServiceimpl.selectAll(page,limit),tp_Democratic_RecordServiceimpl.countGetAll());
    }


    @RequestMapping(value = "/add.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD,memo = "发布模板")
    public IResult addbig(@RequestBody TpBigtitle big){
        //返回json至前端的均返回ResultBean或者PageResultBean
        int bigTitleId = tp_Democratic_RecordServiceimpl.addbig(big);//添加单表
        for (TpSubtitleContent tpSubtitleContent : big.getList()) {//取list里面值
            tpSubtitleContent.setBigTitleId(big.getBigTitleId());//取id
            tp_Democratic_RecordServiceimpl.addsubtitle(tpSubtitleContent);
            //获取uid
            for (Tprelationship tprelationship:tpSubtitleContent.getBeice()){
                tprelationship.setSubtitleId(tpSubtitleContent.getSubtitleId());
                tp_Democratic_RecordServiceimpl.insertpralation(tprelationship);
            }

            for (TpStandard tpStandard : tpSubtitleContent.getBz_coll()) {
                tpStandard.setSubtitleId(tpSubtitleContent.getSubtitleId());
                tp_Democratic_RecordServiceimpl.addstandard(tpStandard);
                for (TpSubstandard tpSubstandard : tpStandard.getZbz_coll()) {
                    tpSubstandard.setStandardId(tpStandard.getStandardId());
                    tp_Democratic_RecordServiceimpl.addsubstandard(tpSubstandard);
                }
            }
        }
        Date date = new Date();//获取时间
        Tp_Democratic_Record record = new Tp_Democratic_Record(String.valueOf(big.getBigTitleId()),date,"35");//添加并将数据库中INT类型转成String
        tp_Democratic_RecordServiceimpl.insert(record);
        //添加页面传过来的数组
        List<String> coll = big.getColl();
        for (String coll1 : coll) {
            Tp_Democratic_Verification tp_democratic_verification = new Tp_Democratic_Verification(coll1,record.getRecordId(),"未投票",74);
            tpDemocraticVerfiCationServiceimpl.addVerification(tp_democratic_verification);
        }

        return new ResultBean<String>("success");
    }



    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "删除记录")
    public IResult delete(Integer recordId){
        //返回json至前端的均返回ResultBean或者PageResultBean
        int bigTitleId = tp_Democratic_RecordServiceimpl.selectByrecId(recordId);
        List<TpSubtitleContent> tpSubtitleContent = tpDemocraticSubtitleContentServiceimpl.findBybigTitleId(bigTitleId);
        for (TpSubtitleContent subtitleContent : tpSubtitleContent) {
            List<TpStandard> tpStandard = tpDemocraticstaandrdtServiceimpl.findBysubtitleId(subtitleContent.getSubtitleId());
            for (TpStandard standard : tpStandard) {
                //删除统计表
                List<TpSubstandard> tpSubstandards = tpDemocraticsubstaandrdtServiceimpl.findBystandardId(standard.getStandardId());
                for (TpSubstandard tpSubstandard : tpSubstandards) {
                    tp_Democratic_RecordServiceimpl.deletetj(tpSubstandard.getSubstandardId());
                }
                substaandrdServiceimpl.delete(standard.getStandardId());
            }

            tprelationshipServiceimpl.delete(subtitleContent.getSubtitleId());
            tpDemocraticstaandrdtServiceimpl.delete(subtitleContent.getSubtitleId());
        }
        tp_Democratic_RecordServiceimpl.deletesub(recordId);
        tpDemocraticSubtitleContentServiceimpl.delete(bigTitleId);
        tp_Democratic_RecordServiceimpl.delete(recordId);
        tpBigtitleServiceimpl.delete(bigTitleId);

        return new ResultBean<String>("success");
    }


//    /**
//     * 更新角色
//     * */
//    @RequestMapping(value = "/update.do",method = RequestMethod.POST)
//    @ResponseBody
//    @BizOperLog(operType = OperType.UPDATE,memo = "更新角色")
//    public IResult editRe(Integer recordId, String bigTitleId, String releaseDate, String id){
//        //返回json至前端的均返回ResultBean或者PageResultBean
//        return new ResultBean<Boolean>(tp_Democratic_RecordServiceimpl.update(recordId,bigTitleId,releaseDate,id));
//    }
    /**
     * 更新角色
     * */
    @RequestMapping(value = "/guanbi.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.UPDATE,memo = "切换投票模式")
    public IResult guanRe(Integer recordId){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Integer>(tp_Democratic_RecordServiceimpl.guanbi(recordId));
    }


    @RequestMapping(value = "/chakan.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "查看")
    public IResult chakan(Integer recordId){
        int bigTitleId = tp_Democratic_RecordServiceimpl.selectByrecId(recordId);
        List<TpSubtitleContent> tpSubtitleContent = tpDemocraticSubtitleContentServiceimpl.findBybigTitleId(bigTitleId);
        for (TpSubtitleContent subtitleContent : tpSubtitleContent) {//根据标准的外键遍历子标题中的list
            List<TpStandard> tpStandard = tpDemocraticstaandrdtServiceimpl.findBysubtitleId(subtitleContent.getSubtitleId());
            List<Tprelationship> tprelationship = tprelationshipServiceimpl.findBysId(subtitleContent.getSubtitleId());
            //查看人员id
            for (Tprelationship tprelationship1 : tprelationship) {
                TpPhotoUser tpphotoUser =  tpphotoUserServiceimpl.findbyuid(Integer.parseInt(tprelationship1.getUid()));
                tprelationship1.setTpphotoUser(tpphotoUser);
            }
            //根据子标准的外键查询标准中的list
            for (TpStandard standard : tpStandard) {
                List<TpSubstandard> tpSubstandards = substaandrdServiceimpl.findBystandardId(standard.getStandardId());
              //统计
                for (TpSubstandard tpSubstandard : tpSubstandards) {
                    int substandardId = tpSubstandard.getSubstandardId();
                    int sum = tp_Democratic_RecordServiceimpl.findbysid(substandardId);
                    tpSubstandard.setSum(sum);
                }
            standard.setZbz_coll(tpSubstandards);
            }
            subtitleContent.setBeice(tprelationship);
            subtitleContent.setBz_coll(tpStandard);
        }
        TpBigtitle tpBigtitle = tpBigtitleServiceimpl.findbybigid(bigTitleId);
        tpBigtitle.setList(tpSubtitleContent);
        return new ResultBean<TpBigtitle>(tpBigtitle);
    }


    @RequestMapping(value = "/tijiao.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.UPDATE,memo = "提交")
    public IResult tijiaoRe(@RequestBody List<TpSubtitleid> tpSubtitleid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        for (TpSubtitleid subtitleid : tpSubtitleid) {
            tp_Democratic_RecordServiceimpl.insertpralationsub(subtitleid);
            String content =  subtitleid.getContent();
            tpDemocraticVerfiCationServiceimpl.delete(content);
        }


        return new ResultBean<String>("success");
    }



    @RequestMapping(value = "/jiaoyan.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "校验")
    public IResult jiaoyan(@RequestBody Tp_Democratic_Verification tp_democratic_verification){
        String content = tp_democratic_verification.getContent();
        Tp_Democratic_Verification ver = tpDemocraticVerfiCationServiceimpl.findbycontent(content);
        if(ver==null){//判断数据库是否有这个账号
            return new ResultBean<Boolean >(false);
        }
        else {//判断是否是同一次投票，根据发布的id进行判断
            int recordId = tp_democratic_verification.getRecordId();
            int recordId1 = ver.getRecordId();
            if(recordId==recordId1){
                return new ResultBean<Boolean >(true);
            }
            else {
                return new ResultBean<Boolean >(false);
            }
        }
    }
}
