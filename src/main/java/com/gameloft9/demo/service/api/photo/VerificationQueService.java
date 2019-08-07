package com.gameloft9.demo.service.api.photo;
import com.gameloft9.demo.dataaccess.model.photo.VerificationQueTest;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 年: 2019
 * 月: 08
 * 日: 03
 * 小时: 10
 * 分钟: 22
 *
 * @author 严脱兔
 */

public interface VerificationQueService {
    String addverificationQue(VerificationQueTest verificationQueTest);
}
