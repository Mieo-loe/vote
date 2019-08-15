package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.Tp_Democratic_RecordMapper;
import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.mgrframework.utils.CheckUtil;
import com.gameloft9.demo.service.api.system.Tp_Democratic_RecordService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;
@Service
@Slf4j
@Transactional
public class Tp_Democratic_RecordServiceimpl implements Tp_Democratic_RecordService {
    @Autowired
    Tp_Democratic_RecordMapper dao;


//    public List<Tp_Democratic_Record> findAll() {
//        return dao.findAll();
//    }

    public List<Tp_Democratic_Record> selectAll(String page, String limit) {
        PageRange pageRange = new PageRange(page, limit);
        return dao.selectAll(pageRange.getStart(), pageRange.getEnd());
    }

    public int countGetAll() {
        return dao.countGetAll();
    }

    public int insert(Tp_Democratic_Record record) {
       int recordId = dao.insert(record);
       return recordId;
    }

    public int delete(Integer recordId) {


        return  dao.delete(recordId);
    }
//查看
    public int selectByrecId(Integer recordId) {
        return dao.selectByrecId(recordId);
    }

//    public Boolean update(Integer recordId, String bigTitleId, String releaseDate, String id) {
//        Tp_Democratic_Record re = new Tp_Democratic_Record();
//        re.setRecordId(recordId);
//        re.setBigTitleId(bigTitleId);
//        re.setReleaseDate(releaseDate);
//        re.setId(id);
//        dao.update(re);
//        return true;
//    }

    public int guanbi(Integer recordId) {
        dao.guanbi(recordId);
        return  0;
    }
    public int addbig(TpBigtitle big) {
        int bigTitleId = dao.insertbig(big);
        return bigTitleId;
    }

    public int addsubtitle(TpSubtitleContent subtitle) {
        int subtitleId =dao.intsersubtitle(subtitle);
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

    public int insertpralation(Tprelationship tprelationship) {

        String uid = tprelationship.getUid();
        String[] uids = uid.split(",");
        for (String uid_s : uids) {
            tprelationship.setUid(uid_s);
            int subtitleId = dao.insertpralation(tprelationship);
        }
        return 0;
    }

    public int insertpralationsub(TpSubtitleid tpSubtitleid) {
//        String subtitleId = tpSubtitleid.getSubtitleId();
//        String [] subtitleIds = subtitleId.split(",");
//        for (String subtitleId_s : subtitleIds) {
//            tpSubtitleid.setSubtitleId(subtitleId_s);
//            //拆分uid
//                String uid = tpSubtitleid.getUid();
//                String[] uids = uid.split(",");
//                for (String uid_s : uids) {
//                    tpSubtitleid.setUid(uid_s);
//                    //拆分子标准id
//                    String substandardId = tpSubtitleid.getSubstandardId();
//                        String [] substandardIds = substandardId.split(",");
//                        for (String substandardId_s : substandardIds) {
//                            tpSubtitleid.setSubstandardId(substandardId_s);
//                            dao.insertpralationsub(tpSubtitleid);
//                        }
//                    dao.insertpralationsub(tpSubtitleid);
//            }
//            dao.insertpralationsub(tpSubtitleid);
//        }

        return dao.insertpralationsub(tpSubtitleid);
    }

    public int findbysid(int substandardId) {
        return dao.findbysid(substandardId);
    }

    public int deletetj(int substandardId) {
        return dao.deletetj(substandardId);
    }

    public int deletesub(int recordId) {
        return dao.deletesub(recordId);
    }
}
