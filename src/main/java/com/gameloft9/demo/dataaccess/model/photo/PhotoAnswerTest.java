package com.gameloft9.demo.dataaccess.model.photo;

import lombok.Data;

import java.io.Serializable;

/**
 * 年: 2019
 * 月: 07
 * 日: 17
 * 小时: 09
 * 分钟: 24
 *
 * @author 严脱兔
 */
@Data
public class PhotoAnswerTest implements Serializable {
    private int aid;
    private int tid;
    private String answer;
    private int count;
}
