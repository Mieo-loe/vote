package com.gameloft9.demo.controllers.photo;

import com.gameloft9.demo.dataaccess.model.photo.*;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.photo.PhotoModelService;
import com.gameloft9.demo.service.api.photo.PhotoVoteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Date;
import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 10
 * 小时: 18
 * 分钟: 10
 *
 * @author 严脱兔
 */
@Slf4j
@Controller
@RequestMapping("/photoModel")
public class PhotoModelController {
        @Resource
        private PhotoModelService photoModelServiceImpl;
        @Resource
        private PhotoVoteService photoVoteServiceImpl;
    @RequestMapping(value = "/modelList.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult findAll2(String page, String limit){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new PageResultBean<Collection<PhotoModelTest>>(photoModelServiceImpl.findAll2(page,limit),photoModelServiceImpl.countGetAll());
    }
    /**
     *创建模板
     */
    @RequestMapping(value = "/modelPhoto.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD,memo = "创建模板")
    public IResult addModel(@RequestBody PhotoVoteTest photoVoteTest) {
        int vid = photoModelServiceImpl.addVote(photoVoteTest);
        Date date = new Date();
        PhotoModelTest photoModelTest = new PhotoModelTest(String.valueOf(photoVoteTest.getVid()),date, "53");
        photoModelTest.setModelTitle(photoVoteTest.getModelTitle());
        photoModelServiceImpl.addModel(photoModelTest);
        for (PhotoTitleTest photoTitleTest : photoVoteTest.getList()) {
            photoTitleTest.setVid(photoVoteTest.getVid());
            photoModelServiceImpl.addTitle(photoTitleTest);
            for (PhotoContentTest photoContentTest : photoTitleTest.getOptionTitle()) {
                photoContentTest.setTid(photoTitleTest.getTid());
                photoModelServiceImpl.addContent(photoContentTest);
            }
            for (PhotoAnswerTest photoAnswerTest : photoTitleTest.getAnswerList()) {
                photoAnswerTest.setTid(photoTitleTest.getTid());
                photoModelServiceImpl.addAnswer(photoAnswerTest);
            }
        }
        return new ResultBean<String>("success");
    }


    /**
     * 获取数据
     * */
    @RequestMapping(value = "/get.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getVote(Integer mid){
        //返回json至前端的均返回ResultBean或者PageResultBean
//        return new ResultBean<PhotoVoteTest>(photoHistoryServiceImpl.findById(vid));
        int vid = photoModelServiceImpl.findByVid(mid);
        PhotoVoteTest photoVoteTest = photoVoteServiceImpl.findById(vid);
        List<PhotoTitleTest> photoTitleTests =photoModelServiceImpl.findByTid(vid);
        for (PhotoTitleTest photoTitleTest : photoTitleTests) {
            List<PhotoContentTest> optionTitle = photoModelServiceImpl.findByCid(photoTitleTest.getTid());
            List<PhotoAnswerTest> answerList =photoModelServiceImpl.findByAid(photoTitleTest.getTid());
            photoTitleTest.setOptionTitle(optionTitle);
            photoTitleTest.setAnswerList(answerList);

        }
         photoVoteTest.setList(photoTitleTests);
        return new ResultBean<PhotoVoteTest>(photoVoteTest);

    }


    /**
     * 删除模板
     * */
    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "删除模板")
    public IResult deleteUser(int mid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        int vid = photoModelServiceImpl.findByVid(mid);
        List<PhotoTitleTest> photoTitleTests = photoModelServiceImpl.findByTid(vid);
        for (PhotoTitleTest photoTitleTest : photoTitleTests) {
            List<PhotoAnswerTest> photoAnswerTests = photoModelServiceImpl.findByAid(photoTitleTest.getTid());
           // photoModelServiceImpl.deleteAnswer(photoTitleTest.getTid());
            for (PhotoAnswerTest photoAnswerTest : photoAnswerTests) {
                photoModelServiceImpl.deleteAnswer(photoAnswerTest.getTid());
            }
            photoModelServiceImpl.deleteContent(photoTitleTest.getTid());
        }
        photoModelServiceImpl.deleteTitle(vid);
        photoModelServiceImpl.delete(mid);
        photoModelServiceImpl.deleteVote(vid);
        return new ResultBean<Boolean>();
    }



    /**
     *取消置顶
     */
    @RequestMapping(value = "/cancel.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "取消置顶")
    public IResult cancel(int mid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Integer>(photoModelServiceImpl.cancel(mid));
    }

    /**
     *置顶
     */
    @RequestMapping(value = "/top.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "置顶")
    public IResult top(int mid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Integer>(photoModelServiceImpl.top(mid));
    }


}
