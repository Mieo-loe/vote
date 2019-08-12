package com.gameloft9.demo.controllers.system;

import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/temp")
public class TemplateController {
    @Autowired
    TpDemocraticTemplateService tpDemocraticTemplateServiceimpl;
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


    @RequestMapping(value = "/temp.do", method = RequestMethod.POST)
    @ResponseBody
    public IResult alltemp(String page, String limit) {
        //返回json至前端的均返回ResultBean或者PageResultBean
        List<TpDemocraticTemplate> data = tpDemocraticTemplateServiceimpl.alltemp(page, limit);
        return new ResultBean<Collection<TpDemocraticTemplate>>(data);
    }

    @RequestMapping(value = "/add.do", method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD, memo = "添加模板")
    public IResult addbig(@RequestBody TpBigtitle big) {
        //返回json至前端的均返回ResultBean或者PageResultBean
        int bigTitleId = tpDemocraticTemplateServiceimpl.addbig(big);//添加单表大标题
        for (TpSubtitleContent tpSubtitleContent : big.getList()) {//取list里面值 子标题
            tpSubtitleContent.setBigTitleId(big.getBigTitleId());//取id
            tpDemocraticTemplateServiceimpl.addsubtitle(tpSubtitleContent);
            //获取uid
            for (Tprelationship tprelationship:tpSubtitleContent.getBeice()){
                tprelationship.setSubtitleId( tpSubtitleContent.getSubtitleId());
                tpDemocraticTemplateServiceimpl.insertpralation(tprelationship);
            }
            for (TpStandard tpStandard : tpSubtitleContent.getBz_coll()) {//标准
                tpStandard.setSubtitleId(tpSubtitleContent.getSubtitleId());
                tpDemocraticTemplateServiceimpl.addstandard(tpStandard);
                for (TpSubstandard tpSubstandard : tpStandard.getZbz_coll()) {//子标准
                    tpSubstandard.setStandardId(tpStandard.getStandardId());
                    tpDemocraticTemplateServiceimpl.addsubstandard(tpSubstandard);
                }
            }
        }
        Date date = new Date();//获取时间
        TpDemocraticTemplate tpDemocraticTemplate = new TpDemocraticTemplate(big.getBigTitleId(),date,"52");//添加并将数据库中INT类型转成String
        tpDemocraticTemplate.setTemplateTitleId(big.getTemplateTitleId());
        tpDemocraticTemplateServiceimpl.inserttem(tpDemocraticTemplate);
        return new ResultBean<String>("success");
    }
    @RequestMapping(value = "/qxzd.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.UPDATE,memo = "取消置顶")
    public IResult qxzdRe(String templateTitleId){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Integer>(tpDemocraticTemplateServiceimpl.qxzd(templateTitleId));
    }
    @RequestMapping(value = "/zd.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.UPDATE,memo = "置顶")
    public IResult zdRe(String templateTitleId){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Integer>(tpDemocraticTemplateServiceimpl.zd(templateTitleId));
    }
    @RequestMapping(value = "/delete.do", method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD, memo = "s删除模块")
    public IResult deletebig(int templateId) {
        //返回json至前端的均返回ResultBean或者PageResultBean
        int bigTitleId = tpDemocraticTemplateServiceimpl.selectById(templateId);
        List<TpSubtitleContent> tpSubtitleContent = tpDemocraticSubtitleContentServiceimpl.findBybigTitleId(bigTitleId);
        for (TpSubtitleContent subtitleContent : tpSubtitleContent) {
            List<TpStandard> tpStandard = tpDemocraticstaandrdtServiceimpl.findBysubtitleId(subtitleContent.getSubtitleId());
            for (TpStandard standard : tpStandard) {
                substaandrdServiceimpl.delete(standard.getStandardId());
            }
            tprelationshipServiceimpl.delete(subtitleContent.getSubtitleId());
            tpDemocraticstaandrdtServiceimpl.delete(subtitleContent.getSubtitleId());
        }
        tpDemocraticSubtitleContentServiceimpl.delete(bigTitleId);
        tpDemocraticTemplateServiceimpl.delete(templateId);
        tpBigtitleServiceimpl.delete(bigTitleId);

        return new ResultBean<String>("success");
    }
    /**
     * 预览
     //     * */
    @RequestMapping(value = "/get.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getRe(Integer templateId){
        //返回json至前端的均返回ResultBean或者PageResultBean
        int bigTitleId = tpDemocraticTemplateServiceimpl.selectById(templateId);//根据主键获取大标题表的外键

        List<TpSubtitleContent> tpSubtitleContent = tpDemocraticSubtitleContentServiceimpl.findBybigTitleId1(bigTitleId);//根据子标题外键查询子标题内容
        for (TpSubtitleContent subtitleContent : tpSubtitleContent) {//根据标准的外键遍历子标题中的list
            List<TpStandard> tpStandard = tpDemocraticstaandrdtServiceimpl.findBysubtitleId1(subtitleContent.getSubtitleId());
            List<Tprelationship> tprelationship = tprelationshipServiceimpl.findBysId(subtitleContent.getSubtitleId());
            //查看人员id
            for (Tprelationship tprelationship1 : tprelationship) {
               TpphotoUser tpphotoUser =  tpphotoUserServiceimpl.findbyuid(Integer.parseInt(tprelationship1.getUid()));
              tprelationship1.setTpphotoUser(tpphotoUser);

            }
                for (TpStandard standard : tpStandard) {//根据子标准的外键查询标准中的list
                     List<TpSubstandard> tpSubstandards = substaandrdServiceimpl.findBystandardId(standard.getStandardId());
                            standard.setZbz_coll(tpSubstandards);
            }

                subtitleContent.setBeice(tprelationship);
                subtitleContent.setBz_coll(tpStandard);
        }
        TpBigtitle tpBigtitle = tpBigtitleServiceimpl.findbybigid(bigTitleId);
        tpBigtitle.setList(tpSubtitleContent);
        return new ResultBean<TpBigtitle>(tpBigtitle);
    }

}
