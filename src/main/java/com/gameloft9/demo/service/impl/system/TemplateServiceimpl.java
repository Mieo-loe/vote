package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TemplateMapper;
import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.service.api.system.TemplateService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional
public class TemplateServiceimpl implements TemplateService {
    @Autowired
    TemplateMapper dao;

    public List<Template> alltemp(String page, String limit) {
        PageRange pageRange = new PageRange(page, limit);
        return dao.alltemp(pageRange.getStart(), pageRange.getEnd());
    }
        //删除
    public int delete(int templateId) {
        return dao.delete(templateId);
    }
    //预览
    public int selectById(int templateId) {
        return dao.selectById(templateId);
    }

    public int counttemp() {
        return dao.counttemp();
    }

    public int addbig(TpBigtitle big) {
        int bigTitleId = dao.insertbig(big);
        return bigTitleId;
    }

    public int addsubtitle(TpSubtitleContent subtitle) {
        int subtitleId = dao.intsersubtitle(subtitle);
        return subtitleId;
    }

    public int addstandard(TpStandard standard) {
        int standardId = dao.intserstandard(standard);
        return standardId;
    }

    public int addsubstandard(TpSubstandard substandard) {
        int substandardId = dao.intsersubstandard(substandard);
        return substandardId;
    }

    public int inserttem(Template template) {
        int templateId = dao.inserttem(template);
        return templateId;
    }

    public int qxzd(String templateTitleId) {
        dao.qxzd(templateTitleId);
        return 0;
    }

    public int zd(String templateTitleId) {
        dao.zd(templateTitleId);
        return 0;
    }
    public int insertpralation(Tprelationship tprelationship) {

        String uid = tprelationship.getUid();
        String[] uids = uid.split(",");
        for (String uid_s : uids) {
            tprelationship.setUid(uid_s);
            int subtitleId = dao.insertpralation(tprelationship);
        }
        return 0;
    }

}
