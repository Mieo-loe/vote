package com.gameloft9.demo.dataaccess.model.photo;

import lombok.Data;

/**
 * 年: 2019
 * 月: 07
 * 日: 11
 * 小时: 18
 * 分钟: 50
 *
 * @author 严脱兔
 */
@Data
public class ResourcesListTest {
    private int id;
    private String resKind;
    private int resNum;
    private String resName;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getResKind() {
        return resKind;
    }

    public void setResKind(String resKind) {
        this.resKind = resKind;
    }

    public int getResNum() {
        return resNum;
    }

    public void setResNum(int resNum) {
        this.resNum = resNum;
    }

    public String getResName() {
        return resName;
    }

    public void setResName(String resName) {
        this.resName = resName;
    }
}
