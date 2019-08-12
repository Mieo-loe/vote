package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Tp_resourcelist {

   private int id;
   private String resKind;
   private int standardName;
   private String resName;
   List<Tp_Democratic_Record> list = new ArrayList<Tp_Democratic_Record>();

}
