package com.gameloft9.demo.controllers.system;

import com.gameloft9.demo.dataaccess.model.system.TpGradeTemplet;
import com.gameloft9.demo.dataaccess.model.system.TpGraderecord;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.TpGradeRecordService;
import com.gameloft9.demo.service.impl.system.TpGradeTempletServiceImpl;
import com.gameloft9.demo.utils.ExcelUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/27 15:45
 * @Description:
 */
@Controller
@Slf4j
@RequestMapping("/poi")
public class TpGradePOIController {

    @Autowired
    TpGradeRecordService tpGradeRecordService;
    @Autowired
    TpGradeTempletServiceImpl tpGradeTempletService;

    @RequestMapping(value = "/daochu.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult poidaochu(Integer record_Id, String []zhanghao) throws Exception {

//        List<HashMap<String, Object>> listMap = new ArrayList<>();
//        HashMap<String,Object> dataMap = new HashMap<>();
//
//        for (int i = 0; i < zhanghao.length; i++) {
//            dataMap.put("zhanghao", zhanghao[i]);
//            listMap.add(dataMap);
//        }

        TpGraderecord tpGraderecord = tpGradeRecordService.findByRecord_Id(record_Id);
        Date r_time = tpGraderecord.getR_time();
        String time = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss").format(r_time).toString();

        Integer temid = tpGradeRecordService.findtemid(record_Id);
        TpGradeTemplet templet = tpGradeTempletService.findByTid(temid);
        String title = templet.getTitle()+"("+time+")";

        String[] rowsName = new String[]{"序号","投票账号"};
        List<Object[]>  dataList = new ArrayList<Object[]>();
        Object[] objs = null;

        for (int i = 0; i < zhanghao.length; i++) {
            objs = new Object[rowsName.length];
            objs[0] = i;
            objs[1] = zhanghao[i];
            dataList.add(objs);
        }
        ExcelUtil ex = new ExcelUtil(title, rowsName, dataList);
        ex.export();
        
        return new ResultBean<String>("success");
    }

}
