package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class TpStandard  implements Serializable {

   private int standardId;
   private int subtitleId;
   private String standardName;
   private int id;
   private List<TpSubstandard> zbz_coll;

//   public int getStndarId() {
//      return stndarId;
//   }
//
//   public void setStndarId(int stndarId) {
//      this.stndarId = stndarId;
//   }
//
//   public int getSubtitleId() {
//      return subtitleId;
//   }
//
//   public void setSubtitleId(int subtitleId) {
//      this.subtitleId = subtitleId;
//   }
//
//   public String getStandardName() {
//      return standardName;
//   }
//
//   public void setStandardName(String standardName) {
//      this.standardName = standardName;
//   }
//
//   public int getId() {
//      return id;
//   }
//
//   public void setId(int id) {
//      this.id = id;
//   }
//
//   public List<TpSubstandard> getList() {
//      return list;
//   }
//
//   public void setList(List<TpSubstandard> list) {
//      this.list = list;
//   }
}
