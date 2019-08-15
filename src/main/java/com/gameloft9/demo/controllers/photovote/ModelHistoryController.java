package com.gameloft9.demo.controllers.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.*;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.photovote.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/ModelHistory")
public class ModelHistoryController {
    @Autowired
    ModelHistoryService modelHistoryServiceImpl;
    @Autowired
    TitleService titleServiceImpl;
    @Autowired
    AnswerService answerServiceImpl;
    @Autowired
    VoteService voteServiceImpl;
    @Autowired
    ContentService contentServiceImpl;
    @RequestMapping(value = "/modelHistory.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult findAllhistory(String page,String limit){

    return new PageResultBean<Collection<ModelManagerTest>>(modelHistoryServiceImpl.findAll(page,limit),modelHistoryServiceImpl.countGetAll());

    }
    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult deleteHistory(int mid){
        int vid = modelHistoryServiceImpl.findVid( mid );
        List<TitleTest> titleTests =titleServiceImpl.findTid( vid );
        for (TitleTest titleTest : titleTests) {
            List<AnswerTest> answerTests = answerServiceImpl.findAid( titleTest.getTid() );
            for (AnswerTest answerTest : answerTests) {
                answerServiceImpl.delete( answerTest.getAid() );
            }
            contentServiceImpl.delete( titleTest.getTid() );
            titleServiceImpl.delete( titleTest.getTid() );

    }
        modelHistoryServiceImpl.delete( mid );
        voteServiceImpl.delete( vid );
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>();
    }
//    @RequestMapping(value = "/editStatus.do",method = RequestMethod.POST)
//    @ResponseBody
//    public IResult editStatus(int hid){
//        //返回json至前端的均返回ResultBean或者PageResultBean
//
//        return new ResultBean<Boolean>(historyServiceImpl.editStatus( hid ));
//    }
@RequestMapping(value = "/get.do",method = RequestMethod.POST)
@ResponseBody
public IResult getMenu(int mid){
    int vid = modelHistoryServiceImpl.findVid( mid );
    VoteTest voteTest  = voteServiceImpl.findById( vid );
    List<TitleTest> titleTests = titleServiceImpl.findTid( vid );
    for (TitleTest titleTest : titleTests) {
        List<AnswerTest> answerTests = answerServiceImpl.findAid( titleTest.getTid() );
        List<ContentTest> contentTest = contentServiceImpl.findByTid( titleTest.getTid() );
        titleTest.setAnswerList( answerTests );
        titleTest.setContentTest(contentTest);
    }
    voteTest.setList( titleTests );
    System.out.println(voteTest);
    //返回json至前端的均返回ResultBean或者PageResultBean
    return new ResultBean<VoteTest>(voteTest);
}
    @RequestMapping(value = "/editTop1.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult editTop1(int mid){
            modelHistoryServiceImpl.editTop1( mid );
        return new ResultBean<String >("success");
    }
    @RequestMapping(value = "/editTop2.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult editTop2(int mid){
        modelHistoryServiceImpl.editTop2( mid );
        return new ResultBean<String >("success");
    }

}
