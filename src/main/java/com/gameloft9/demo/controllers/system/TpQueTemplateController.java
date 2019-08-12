package com.gameloft9.demo.controllers.system;
import com.gameloft9.demo.dataaccess.model.system.TpQueCreating;
import com.gameloft9.demo.dataaccess.model.system.TpQueOption;
import com.gameloft9.demo.dataaccess.model.system.TpQueSubject;
import com.gameloft9.demo.dataaccess.model.system.TpQueTemplate;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.TpQueTemplateService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.List;

@Controller
@RequestMapping("/wjdc")
public class TpQueTemplateController {
    @Resource
    private TpQueTemplateService templateQueService;

    //查询全部
    @RequestMapping(value = "/findAll5.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult findAll5(String page,String limit, String tid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new PageResultBean<Collection<TpQueTemplate>>(templateQueService.findAll5(page,limit),templateQueService.getCount5(tid));
    }

    //创建模板
    @RequestMapping(value = "/add6_1.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD,memo = "创建模板")
    public IResult add6_1(TpQueTemplate templateQue){
        return new ResultBean<Boolean>(templateQueService.add6_1(templateQue));
    }

    //置顶
    @RequestMapping(value = "/update5.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult update5(String tid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>(templateQueService.update5(tid));
    }
    //取消置顶
    @RequestMapping(value = "/update5_1.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult update5_1(String tid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>(templateQueService.update5_1(tid));
    }

    /**
     * 根据Template的tid获取表单数据
     * */
    @RequestMapping(value = "/getForm.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getForm(String tid){
        List<TpQueOption> optionQue = null;
        //返回json至前端的均返回ResultBean或者PageResultBean
        String cid = templateQueService.getForm(tid);
        TpQueCreating creatingQue = templateQueService.getForm1(cid);
        List<TpQueSubject> subjectQue1 = templateQueService.getForm2(cid);
        creatingQue.setTimus(subjectQue1);
        for (TpQueSubject subjectQue : subjectQue1) {
            String sid = subjectQue.getSid();
            optionQue = templateQueService.getForm3(sid);
            subjectQue.setXuanxiang(optionQue);
        }
        return new ResultBean <TpQueCreating>(creatingQue);
    }
    /**
     * 根据Investigation的qid获取表单数据
     * */
    @RequestMapping(value = "/getForm2.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getForm4(String qid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        String cid = templateQueService.getForm4(qid);
        TpQueCreating creatingQue = templateQueService.getForm1(cid);
        List<TpQueSubject> subjectQue1 = templateQueService.getForm2(cid);
        creatingQue.setTimus(subjectQue1);
        for (TpQueSubject subjectQue : subjectQue1) {
            String sid = subjectQue.getSid();
            List<TpQueOption> optionQue = templateQueService.getForm3(sid);
            for (TpQueOption que : optionQue) {
                String oid = que.getOid();
                String totalNum = templateQueService.totalOption(oid);
                que.setTotalNum(totalNum);
            }
            subjectQue.setXuanxiang(optionQue);
        }
        return new ResultBean <TpQueCreating>(creatingQue);
    }
}
