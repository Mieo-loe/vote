package com.gameloft9.demo.dataaccess.model.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
public class TpBigtitle implements Serializable {

   private int bigTitleId;
   private String bigTitle;
   private String explain;
   private int number;
   private String templateTitleId;
   private List<TpSubtitleContent> list;
   private List<String> coll;

   public List<String> getColl() {
      return coll;
   }

   public void setColl(List<String> coll) {
      this.coll = coll;
   }

   public TpBigtitle() {
   }
}