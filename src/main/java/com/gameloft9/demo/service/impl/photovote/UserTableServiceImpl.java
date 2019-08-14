package com.gameloft9.demo.service.impl.photovote;

import com.gameloft9.demo.dataaccess.dao.photovote.UserTableMapper;
import com.gameloft9.demo.dataaccess.model.photovote.Department;
import com.gameloft9.demo.dataaccess.model.photovote.UserTable;
import com.gameloft9.demo.mgrframework.utils.PhotoExcelUtil;
import com.gameloft9.demo.service.api.photovote.UserTableService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Slf4j
@Service
public class UserTableServiceImpl implements UserTableService {

    @Resource
    public UserTableMapper userTableDao;

    public Boolean add(UserTable userTable) {

        return null;
    }

    public Boolean delete(int uid) {

        userTableDao.delete( uid );
        return true;
    }

    public List<UserTable> getAll(String page, String limit,String uname,Integer departmentId,Integer classOfPosition,Integer position,Integer gradeOfJudge,
                                  Integer category) {
        PageRange pageRange = new PageRange( page,limit );
        return userTableDao.getAll(pageRange.getStart(),pageRange.getEnd(),uname,departmentId,classOfPosition, position, gradeOfJudge,
       category );
    }

    public int countGetAll() {
        return userTableDao.countGetAll();}

    public Boolean update(UserTable userTable) {
        return true;
    }

    public UserTable findById(int uid) {
        return userTableDao.findById( uid );
    }

    public List<Department> findDepart() {
        return userTableDao.findDepart();
    }

    public int addUser(UserTable userTable) {
        return userTableDao.addUser( userTable );
    }

    public int updateUser(UserTable userTable) {
        return userTableDao.updateUser( userTable );
    }

    public String ajaxUploadExcel(HttpServletRequest request,
                                  HttpServletResponse response) {
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;

        MultipartFile file = multipartRequest.getFile("upfile");
        if(file.isEmpty()){
            try {
                throw new Exception("文件不存在！");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        InputStream in =null;
        try {
            in = file.getInputStream();
        } catch (IOException e) {
            e.printStackTrace();
        }

        List<List<Object>> listob = null;
        try {
            listob = new PhotoExcelUtil().getBankListByExcel(in,file.getOriginalFilename());
        } catch (Exception e) {
            e.printStackTrace();
        }

        //该处可调用service相应方法进行数据保存到数据库中，现只对数据输出
        for (int i = 0; i < listob.size(); i++) {
            List<Object> lo = listob.get(i);
            UserTable vo = new UserTable();
            /*这里是主键验证，根据实际需要添加，可要可不要，加上之后，可以对现有数据进行批量修改和导入
            User j = null;
			try {
				j = userMapper.selectByPrimaryKey(Integer.valueOf(String.valueOf(lo.get(0))));
			} catch (NumberFormatException e) {
				// TODO Auto-generated catch block
				System.out.println("没有新增");
			}*/
            //vo.setUserId(Integer.valueOf(String.valueOf(lo.get(0))));  // 刚开始写了主键，由于主键是自增的，又去掉了，现在只有批量插入的功能，不能对现有数据进行修改了
            vo.setUname(String.valueOf(lo.get(0)));     // 表格的第一列   注意数据格式需要对应实体类属性
            //性别
            if(String.valueOf(lo.get(1)).equals("男")){
                vo.setSex(33+"");
            }else if(String.valueOf(lo.get(1)).equals("女")){
                vo.setSex(34+"");
            }
            // vo.setSex(String.valueOf(lo.get(1)));   // 表格的第二列
            //部门ID
            List<Department> selectdid = userTableDao.findDepart();
            for (int d = 0; d < selectdid.size(); d++) {
                if (String.valueOf(lo.get(2)).equals(selectdid.get(d).getOrganization())){
                    vo.setDepartmentId(selectdid.get(d).getFid()+"");
                }
            }

            //vo.setDepartmentId(String.valueOf(lo.get(2)));   // 表格的第三列
            //职务
            if(String.valueOf(lo.get(3)).equals("科员")){
                vo.setClassOfPosition(1+"");
            }else if(String.valueOf(lo.get(3)).equals("副科")){
                vo.setClassOfPosition(2+"");
            }            //vo.setClassOfPosition(String.valueOf(lo.get(3)));   // 表格的第四列
            if(String.valueOf(lo.get(4)).equals("书记员")){
                vo.setPosition(7+"");
            }else if(String.valueOf(lo.get(4)).equals("法官助理")){
                vo.setPosition(8+"");
            }            //vo.setPosition(String.valueOf(lo.get(4)));   // 表格的第五列
            if(String.valueOf(lo.get(5)).equals("一级高级法官")){
                vo.setGradeOfJudge(21+"");
            }else if(String.valueOf(lo.get(5)).equals("二级高级法官")){
                vo.setGradeOfJudge(22+"");
            }else if(String.valueOf(lo.get(5)).equals("三级高级法官")){
                vo.setGradeOfJudge(23+"");
            }           // vo.setGradeOfJudge(String.valueOf(lo.get(5)));   // 表格的第六列
            if(String.valueOf(lo.get(6)).equals("院领导")){
                vo.setCategory(29+"");
            }           // vo.setCategory(String.valueOf(lo.get(6)));   // 表格的第七列
            //vo.setRegTime(Date.valueOf(String.valueOf(lo.get(2))));
            userTableDao.addUser(vo);
			/*if(j == null)
			{
		            userMapper.insert(vo);
			}
			else
			{
		            userMapper.updateByPrimaryKey(vo);
			}*/
        }
        System.out.println("文件导入成功！");
        return "success";
    }


//    public List<ResourceTest> getResource() {
//        return userTableDao.getResource();
//    }
}
