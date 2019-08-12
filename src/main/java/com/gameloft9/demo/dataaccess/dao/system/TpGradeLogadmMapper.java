package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.TpGradeLogadm;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TpGradeLogadmMapper {

    int deleteByPrimaryKey(Integer log_id);

    int insert(TpGradeLogadm logadm);

    int insertSelective(TpGradeLogadm logadm);

    TpGradeLogadm selectByPrimaryKey(String username);

    int updateByPrimaryKeySelective(TpGradeLogadm logadm);

    int updateByPrimaryKey(TpGradeLogadm logadm);

    /**
     * 获取所有日志
     * @param start 开始序号
     * @param start 开始序号countSelectAll
     * @param end 结束序号
     * @param username 登录名
     * */
    List<TpGradeLogadm> selectAll(@Param("start") int start,
                                   @Param("end") int end,
                                   @Param("username") String username);

    /**
     * 获取所有日志数量
     * @param username 登录名
     * */
    int countSelectAll(@Param("username") String username);

    /**
     * 批量删除
     * @param username 登录名
     * */
    boolean deleteByQuery(@Param("username") String username);

    /**
     * 批量删除
     * @param loginName 登录名
     * @param operType 操作类型
     * @param notDelIds 非删除id列表
     * */
    boolean deleteByMap(@Param("loginName") String loginName,
                        @Param("operType") String operType,
                        @Param("notDelIds") List<String> notDelIds);

    /**
     * 根据列表删除
     * @param delIds 删除列表
     * */
    boolean deleteByList(@Param("delIds") List<String> delIds);

    /**
     * 获取操作的id
     */
    String selectName(@Param("memos") String memos);

    /**
     * 添加操作类型
     */
    boolean insertoper(TpResourcesList resourcesList);

    /**
     * 获取当前所有操作
     * @param rizhi
     * @return
     */
    List<TpResourcesList> getLog(String rizhi);

    /**
     * 不再记录该操作
     */
    boolean delLog(Integer id);

    boolean updLog(TpResourcesList resourcesList);

    Integer selectid(TpResourcesList resourcesList);

    boolean delLogs(String operType);


}
