package com.gameloft9.demo.controllers.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.Verification;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.photovote.VerificationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@Controller
@RequestMapping("/Account")
public class VerificationController {
    @Autowired
    VerificationService verificationServiceImpl;
    @RequestMapping("/cheaked.do")
    @ResponseBody
    public IResult cheakedZhangHao(String content){
        Verification verification = verificationServiceImpl.cheakedAccount( content );
        if (verification==null){
            return new ResultBean<String >("error");
        }else {
            if (verification.getId()==81){
                return new ResultBean<String >("error");
            }else {
                return  new ResultBean<String >("success");
            }

        }
    }
}
