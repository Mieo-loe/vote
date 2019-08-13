package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.*;


import java.util.List;

public interface TpBigtitleService {
    int delete(int bigTitleId);
    TpBigtitle findbybigid(int bigTitleId);
}
