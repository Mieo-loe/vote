package com.gameloft9.demo.dataaccess.model.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TpQueFramework implements Serializable{

    private String fid;

    private String organization;

    private String superior;

}
