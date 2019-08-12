package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TpDemocraticTemplateMapper {
    List<TpDemocraticTemplate> alltemp(
            @Param("start") int start,
            @Param("end") int end);


    /**
     * 获取所有个数
     * */
    int counttemp();
    //删除
    int delete(int templateId);
    //查看
    int selectById(int templateId);

    int insertbig(TpBigtitle big);
    int intsersubtitle(TpSubtitleContent subtitle);
    int intserstandard(TpStandard stanard);
    int intsersubstandard(TpSubstandard substanard);
    int inserttem(TpDemocraticTemplate tpDemocraticTemplate);
    //查看人员
    int insertpralation(Tprelationship tprelationship);
    //是否置顶
    int qxzd(String templateTitleId);
    int zd(String templateTitleId);


}
