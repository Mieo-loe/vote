package com.gameloft9.demo.controllers.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.AnswerTest;
import com.gameloft9.demo.dataaccess.model.photovote.ReadingTest;
import com.gameloft9.demo.dataaccess.model.photovote.SumTest;
import com.gameloft9.demo.dataaccess.model.photovote.Verification;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.photovote.SumService;
import com.gameloft9.demo.service.api.photovote.VerificationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@Controller
@RequestMapping("/Sum")
public class SumController {
    @Autowired
    VerificationService verificationServiceImpl;
    @Autowired
    SumService sumServiceImpl;
    @RequestMapping("/submit.do")
    @ResponseBody
    public IResult subimit(@RequestBody ReadingTest readingTest){
        SumTest sumTest = new SumTest() ;
        for (String readingTest1 : readingTest.getAids()) {
           sumTest.setAid(Integer.parseInt(readingTest1));
           sumTest.setHid(readingTest.getHid() );
            sumServiceImpl.add(sumTest );
    }
        verificationServiceImpl.deleteBycContent( readingTest.getContent() );

      return  new ResultBean<String >("success");

    }
    @RequestMapping("/Number.do")
    @ResponseBody
    public IResult sumNumber(int hid){

        return  new ResultBean<String >("success");

    }
}
