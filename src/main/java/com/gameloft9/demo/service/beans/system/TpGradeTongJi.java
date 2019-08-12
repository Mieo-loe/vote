package com.gameloft9.demo.service.beans.system;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/26 10:56
 * @Description:
 */
@Data
public class TpGradeTongJi implements Serializable {

    List<String> uid;

    List<String> resId;

    List<Double> fenshu;

    public TpGradeTongJi(List<String> uid, List<String> resId, List<Double> fenshu) {
        this.uid = uid;
        this.resId = resId;
        this.fenshu = fenshu;
    }

    public TpGradeTongJi() {
    }
}
