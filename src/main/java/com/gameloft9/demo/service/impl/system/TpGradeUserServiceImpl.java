package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpGradeUserMapper;
import com.gameloft9.demo.dataaccess.model.system.TpGradeUser;
import com.gameloft9.demo.dataaccess.model.system.TpGradePhotoUser;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import com.gameloft9.demo.service.api.system.TpGradeUserService;
import com.gameloft9.demo.service.beans.system.PageRange;
import com.gameloft9.demo.service.beans.system.TpGradeUserTest;
import com.gameloft9.demo.service.beans.system.TpGradeUserTest2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/14 10:56
 * @Description:
 */
@Slf4j
@Service
public class TpGradeUserServiceImpl implements TpGradeUserService{

    @Autowired
    TpGradeUserMapper tpGradeUserMapper;

    public List<TpGradeUser> findAll(String page, String limit, String username) {

        PageRange pageRange = new PageRange(page, limit);

        return tpGradeUserMapper.findAll(pageRange.getStart(), pageRange.getEnd(), username);
    }

    public int countGetAll(String username) {
        return tpGradeUserMapper.countGetAll(username);
    }

    public String add(TpGradeUser tpGradeUser) {
        tpGradeUserMapper.add(tpGradeUser);
        return "成功";
    }

    public boolean del(String username) {
        return tpGradeUserMapper.del(username);
    }

    public TpGradeUserTest findByUsername(String username) {

        return tpGradeUserMapper.findByUsername(username);
    }

    public boolean update(TpGradeUser tpGradeUser) {
        return tpGradeUserMapper.update(tpGradeUser);
    }

    public boolean updpos(TpGradeUserTest2 userTest2) {
        return tpGradeUserMapper.updpos(userTest2);
    }

    public List<TpGradePhotoUser> getUid() {
        List<TpGradePhotoUser> uidlist = new ArrayList<TpGradePhotoUser>();
        uidlist = tpGradeUserMapper.getUid();
        return uidlist;
    }

    public List<TpResourcesList> getPosition() {
        List<TpResourcesList> positionlist = new ArrayList<TpResourcesList>();
        positionlist = tpGradeUserMapper.getPosition();
        return positionlist;
    }

    public List<Double> clsj(List<String> uid,List<String> resId,List<String> price) {

        List<Double> list = new ArrayList<Double>();

        int x = price.size()/(uid.size()*resId.size());
        int x1 = uid.size()*resId.size();
        int x2 = (price.size()/(uid.size()*resId.size()))-1;
        int y = 0;
        int y1 = 0;

        for (int a1 = 0; a1 < x1; a1++) {
            double sum = 0;
            for (int a = 0; a < x; a++) {
                sum += Integer.parseInt(price.get(y));
                y = y + x1;
                if (a==x2) {
                    sum = sum / x;
                    BigDecimal bd = new BigDecimal(sum);
                    list.add(bd.setScale(2,BigDecimal.ROUND_HALF_UP).doubleValue());
                }
            }
            y1++;
            y=y1;
        }
        System.out.println(list);
        return list;
    }
}
