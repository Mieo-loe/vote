package com.gameloft9.demo.service.beans.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/13 14:24
 * @Description:
 */
@Data
public class GradeResponse implements Serializable {

    private String title;

    private String explain;

    private int peonum;

//    private int res_Id;
//
//    private int rubric_Id;
    
    private List<String> arr;

    private List<String> arr1;

}
