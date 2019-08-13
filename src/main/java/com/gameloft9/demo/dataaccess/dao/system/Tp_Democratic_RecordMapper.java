package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface Tp_Democratic_RecordMapper {
//   public List<Tp_Democratic_Record> findAll();
   List<Tp_Democratic_Record> selectAll(
           @Param("start") int start,
           @Param("end") int end);


   /**
    * 获取所有角色个数
    * */
   int countGetAll();
   int insert(Tp_Democratic_Record record);
   int delete(Integer recordId);

   int selectByrecId(Integer recordId);

   int getdemo(Integer recordId);
   Tp_Democratic_Record selectById(String recordId);
   int update(Tp_Democratic_Record rec);
   int guanbi(Integer recordId);

   int insertbig(TpBigtitle big);

   int intsersubtitle(TpSubtitleContent subtitle);

   int intserstandard(TpStandard stanard);

   int intsersubstandard(TpSubstandard substanard);

   int insertpralation(Tprelationship tprelationship);
   //查看人员
   int insertpralationsub(TpSubtitleid tpSubtitleid);
   //生成账号
   int addVerification(Tp_Democratic_Verification tp_democratic_verification);
   //统计
   int findbysid(int substandardId);

   //删除统计表
   int deletetj(int substandardId);
   //页面删除账号
   int deletesub(int recordId);
}
