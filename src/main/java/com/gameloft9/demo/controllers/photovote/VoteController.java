package com.gameloft9.demo.controllers.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.*;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.photovote.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

@Slf4j
@Controller
@RequestMapping("/Vote")
public class VoteController {
    @Autowired
    HistoryService historyServiceImpl;
    @Autowired
    VoteService voteServiceImpl;
    @Autowired
    AnswerService answerServiceImpl;
    @Autowired
    TitleService titleServiceImpl;
    @Autowired
    ModelHistoryService modelHistoryServiceImpl;
    @Autowired
    ContentService contentServiceImpl;
    @Autowired
    VerificationService verificationServiceImpl;
    @RequestMapping(value = "/voteadd.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult addVote(@RequestBody VoteTest voteTest){//参数类型处理
        voteServiceImpl.addVote( voteTest );
        Date date = new Date();
        HistoryTest historyTest = new HistoryTest(String.valueOf( voteTest.getVid() ) ,date,"35");
        historyServiceImpl.add( historyTest );
        System.out.println(voteTest.getVid());
        for (TitleTest title : voteTest.getList()){
            int vid = voteTest.getVid();
            title.setVid(vid);
            titleServiceImpl.addTitle( title );
            for (AnswerTest answer : title.getAnswerList()){
                answer.setTid( title.getTid() );
                answerServiceImpl.addAnswer( answer );
            }
            for (ContentTest contentTest : title.getContentTest()) {
                contentTest.setTid( title.getTid() );
                contentServiceImpl.addContent( contentTest );
            }
        }
        for (Verification account : voteTest.getAccounts()) {
            account.setId( 48 );
            account.setIsVote("未投票");
            account.setRecordId(historyTest.getHid());
            verificationServiceImpl.add( account );
        }
        return new ResultBean<String >("success");
    }
    @RequestMapping(value = "/addmodel.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult addModel(@RequestBody VoteTest voteTest){//参数类型处理
        voteServiceImpl.addVote( voteTest );
        Date date = new Date();
        ModelManagerTest modelManagerTest = new ModelManagerTest(voteTest.getVid(),voteTest.getModelTitle(),date,53);
        modelHistoryServiceImpl.addModel( modelManagerTest );
        for (TitleTest title : voteTest.getList()){
            int vid = voteTest.getVid();
            title.setVid(vid);
//            title.setIsChar( 2 );
            titleServiceImpl.addTitle( title );
            for (AnswerTest answer : title.getAnswerList()){
                answer.setTid( title.getTid() );
                answerServiceImpl.addAnswer( answer );
            }
            for (ContentTest contentTest : title.getContentTest()) {
                contentTest.setTid( title.getTid() );
                contentServiceImpl.addContent( contentTest );
            }
        }
        return new ResultBean<String >("success");
    }
    private String uploadPath = "D:\\temp"; // 上传文件的目录
    File tempPathFile;
    @RequestMapping(value = "upload.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult uploadImg(@RequestBody MultipartFile file,String type ,String fileName,HttpServletRequest request) throws Exception{
        //文件存储位置
        String path="D:/UploadImg/";
        //这是一个访问路径(如果不配置是访问不到图片的)
        String basePath="/UploadImg/";

        String returnPath = "";
        //获取文件名称
        try {


              fileName = file.getOriginalFilename();  //prefix  suffix
                String suffix=fileName.substring(fileName.lastIndexOf("."));
                //生成新的文件名
                String newFileName= UUID.randomUUID().toString()+suffix;
                //创建文件
                File targetFile = new File(path, newFileName);
                //是否存在
                if(!targetFile.exists()) {
                    targetFile.mkdirs();
                }
                file.transferTo(targetFile);
                System.out.println("上传成功:"+basePath+newFileName);
//                return basePath+newFileName;

                returnPath = basePath+newFileName;

        } catch (Exception e) {
            e.printStackTrace();

        }
        return new ResultBean<String>(returnPath);
    }

}
