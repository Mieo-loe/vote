package com.gameloft9.demo.dataaccess.model.photovote;

import lombok.Data;

import java.util.List;
@Data
public class ReadingTest {
    private int sid;
    private int aid;
    private List<String> aids;
    private String content;
    private int hid;
}
