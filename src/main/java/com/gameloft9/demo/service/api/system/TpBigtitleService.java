package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.*;


import java.util.List;

public interface TpBigtitleService {
//    int addbig(TpBigtitle big);
//    int addsubtitle(TpSubtitleContent subtitle);
//    int addstandard(TpStandard standard);
//    int addsubstandard(TpSubstandard substandard);
    int delete(int bigTitleId);
    TpBigtitle findbybigid(int bigTitleId);
}
