package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.*;


import java.util.List;

public interface TpDemocraticTemplateService {
    List<TpDemocraticTemplate> alltemp(String page, String limit);

    /**
     * 获取所有角色个数
     *
     * */
    //删除
    int delete(int templateId);
    //查看
    int selectById(int templateId);
    int counttemp();
    int addbig(TpBigtitle big);
    int addsubtitle(TpSubtitleContent subtitle);
    int addstandard(TpStandard standard);
    int addsubstandard(TpSubstandard substandard);
    int inserttem(TpDemocraticTemplate tpDemocraticTemplate);
    int insertpralation(Tprelationship tprelationship);

    int qxzd(String templateTitleId);
    int zd(String templateTitleId);
   }
