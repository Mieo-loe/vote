package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
@Data
public class ResourcelistQue implements Serializable {
    private int id;
    private String resKind;
    private int resNum;
    private String resName;
}
