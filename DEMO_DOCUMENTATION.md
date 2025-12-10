# أبشر سفر - وثائق العرض التوضيحي
# Absher Safar - Demo Documentation

---

## البيانات المستخدمة (Data Used)

### يشرح البيانات التي تم جمعها أو توليدها خلال المشروع

#### ما هي مصادر البيانات التي استخدمتها؟

1. **بيانات المستخدم (User Data)**
   - اسم المستخدم: أحمد محمد / Ahmed Mohammed
   - معرّف المستخدم والهوية الوطنية
   - معلومات الاتصال

2. **بيانات المديونية (Debt Data)**
   - إجمالي المديونية: ٢٥٠,٠٠٠ ر.س
   - نسبة الخصم اليومي: 1%
   - معامل الاحتياطي: 1.5x

3. **بيانات السفر (Travel Data)**
   - الوجهة: دبي، الإمارات
   - مدة السفر: 5 أيام
   - تاريخ العودة الإلزامي

4. **بيانات الضامن (Guarantor Data)**
   - اسم الضامن: خالد عبدالله العتيبي
   - حالة الموافقة
   - الضمان المالي

5. **بيانات رمز QR (QR Code Data)**
   - رابط التحقق من التصريح
   - رقم التصريح: TR-2025-88992

#### ما الذي قمت به لتنظيفها أو معالجتها؟

1. **التحقق من صحة البيانات (Data Validation)**
   - التحقق من صحة مبالغ المديونية
   - التحقق من تواريخ السفر والعودة
   - التحقق من هوية الضامن

2. **حساب المبالغ (Amount Calculations)**
   ```javascript
   const TOTAL_DEBT = 250000
   const DAILY_RATE = 0.01
   const RESERVE_MULTIPLIER = 1.5
   
   const dailyDeduction = TOTAL_DEBT * DAILY_RATE  // 2,500 ر.س
   const requiredReserve = dailyDeduction * days * RESERVE_MULTIPLIER
   ```

3. **تنسيق البيانات للعرض (Data Formatting)**
   - تنسيق الأرقام بالعربية والإنجليزية
   - تنسيق التواريخ حسب اللغة
   - تحويل العملة

---

## التقنيات المستخدمة (Technologies Used)

### ☑️ تكامل API مع منصة أبشر
**API Integration with Absher Platform**

```javascript
// محاكاة التكامل مع أبشر
// Simulated Absher API Integration

// التحقق من حالة حظر السفر
const checkTravelBanStatus = async (userId) => {
  // GET /api/absher/travel-ban-status/{userId}
  return {
    hasBan: true,
    reason: 'مديونية مسجلة في ناجز',
    totalDebt: 250000
  }
}

// إصدار تصريح سفر مؤقت
const issueTravelPermit = async (permitData) => {
  // POST /api/absher/travel-permit
  return {
    permitNumber: 'TR-2025-88992',
    status: 'issued',
    validUntil: '2026/02/20'
  }
}
```

### ☑️ محرك سداد يومي تلقائي
**Automatic Daily Payment Engine**

```javascript
// نظام الخصم اليومي التلقائي
const dailyPaymentEngine = {
  // حساب الخصم اليومي
  calculateDailyDeduction: (totalDebt, rate) => {
    return totalDebt * rate // 250,000 × 1% = 2,500 ر.س
  },
  
  // جدولة الخصم
  scheduleDeduction: (walletId, amount, startDate, endDate) => {
    // تنفيذ الخصم التلقائي يومياً
  },
  
  // التحقق من رصيد المحفظة
  verifyWalletBalance: (walletId, requiredAmount) => {
    return walletBalance >= requiredAmount
  }
}
```

### ☑️ لوحة تحكم للدائن والمدين
**Dashboard for Creditor and Debtor**

**لوحة المدين (Debtor Dashboard):**
- عرض إجمالي المديونية
- تقديم طلبات السفر
- متابعة حالة الطلبات
- إدارة المحفظة الإلكترونية

**لوحة الدائن/الضامن (Creditor/Guarantor Dashboard):**
- استلام طلبات الضمان
- الموافقة/الرفض على الطلبات
- متابعة جدول السداد
- تلقي الإشعارات

### ☑️ تنبيهات وإشعارات ذكية
**Smart Alerts and Notifications**

```javascript
// نظام الإشعارات
const notificationSystem = {
  // إشعار الضامن بطلب جديد
  notifyGuarantor: (guarantorId, requestDetails) => {
    return {
      type: 'TRAVEL_GUARANTEE_REQUEST',
      title: 'طلب كفالة سفر جديد',
      message: `وردك طلب كفالة سفر من ${requestDetails.debtorName}`,
      actions: ['approve', 'reject']
    }
  },
  
  // إشعار المدين بالموافقة
  notifyDebtor: (debtorId, status) => {
    return {
      type: 'REQUEST_STATUS_UPDATE',
      title: 'تحديث حالة الطلب',
      message: status === 'approved' 
        ? 'تمت الموافقة على طلب السفر' 
        : 'تم رفض طلب السفر'
    }
  },
  
  // تذكير بموعد العودة
  sendReturnReminder: (userId, returnDate) => {
    return {
      type: 'RETURN_REMINDER',
      title: 'تذكير بموعد العودة',
      message: `يجب العودة قبل ${returnDate}`
    }
  }
}
```

### ☑️ خوارزمية تقييم مخاطر الالتزام
**Commitment Risk Assessment Algorithm**

```javascript
// خوارزمية تقييم المخاطر
const riskAssessmentAlgorithm = {
  // تقييم المدين
  assessDebtorRisk: (debtor) => {
    const factors = {
      totalDebt: debtor.totalDebt,
      paymentHistory: debtor.paymentHistory,
      previousTravels: debtor.previousTravels,
      returnCompliance: debtor.returnCompliance
    }
    
    let riskScore = 0
    
    // عامل المديونية
    if (factors.totalDebt > 500000) riskScore += 30
    else if (factors.totalDebt > 100000) riskScore += 20
    else riskScore += 10
    
    // عامل سجل السداد
    riskScore += (100 - factors.paymentHistory) * 0.3
    
    // عامل الالتزام بالعودة السابقة
    riskScore += (100 - factors.returnCompliance) * 0.4
    
    return {
      score: riskScore,
      level: riskScore > 70 ? 'HIGH' : riskScore > 40 ? 'MEDIUM' : 'LOW',
      recommendation: riskScore > 70 
        ? 'يُنصح بزيادة مبلغ الضمان' 
        : 'مستوى المخاطر مقبول'
    }
  },
  
  // حساب الضمان المطلوب
  calculateRequiredGuarantee: (riskLevel, travelDays, dailyDeduction) => {
    const multipliers = {
      LOW: 1.2,
      MEDIUM: 1.5,
      HIGH: 2.0
    }
    return dailyDeduction * travelDays * multipliers[riskLevel]
  }
}
```

---

## مسار العرض التوضيحي (Demo Flow)

### الخطوة 1: بيانات الرحلة
1. عرض جدول طلبات السفر السابقة
2. إضافة طلب سفر جديد
3. اختيار الوجهة والمدة
4. حساب المبالغ المطلوبة تلقائياً

### الخطوة 2: موافقة الضامن
1. إرسال إشعار للضامن
2. عرض تفاصيل الطلب للضامن
3. الموافقة أو الرفض
4. التحقق من الضمان المالي

### الخطوة 3: موافقة الدائن
1. إشعار الدائن بالطلب
2. عرض خطة السداد المقترحة
3. الموافقة على جدول السداد

### الخطوة 4: شحن المحفظة
1. حساب المبلغ المطلوب
2. شحن المحفظة الإلكترونية
3. التحقق من الرصيد

### الخطوة 5: إصدار التصريح
1. إصدار تصريح السفر المؤقت
2. توليد رمز QR للتحقق
3. عرض تفاصيل التصريح
4. إمكانية الطباعة

---

## المكتبات والأدوات المستخدمة (Libraries & Tools)

| المكتبة | الاستخدام |
|---------|----------|
| React 18 | إطار عمل الواجهة الأمامية |
| React Router DOM | التنقل بين الصفحات |
| Lucide React | الأيقونات |
| Vite | أداة البناء والتطوير |
| QR Server API | توليد رموز QR |

---

## رابط العرض التوضيحي
**Demo URL:** https://sfr.cco.sa (if deployed)

## رابط المستودع
**Repository:** https://github.com/ai-tmkin/sfr

---

## ملاحظات إضافية

1. **البيانات المعروضة هي بيانات تجريبية** لأغراض العرض التوضيحي فقط
2. **التكامل مع أبشر** يحتاج إلى اعتماد رسمي من وزارة الداخلية
3. **نظام الدفع** يحتاج إلى تكامل مع بوابات الدفع المعتمدة (مدى، سداد)
4. **التحقق من الهوية** يتم عبر النفاذ الوطني الموحد





