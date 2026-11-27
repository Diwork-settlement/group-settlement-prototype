# 合作集团线上结算 · 佣金账单（一期原型）

本期只做**分佣账单**（客房分佣、营销分成）。周期性费用、一次性费用不在本期范围。

线上预览：<https://diwork-settlement.github.io/group-settlement-prototype/>

## 页面

### 合作集团端
- `settlement-home.html` — 分佣账单
- `commission-settle-bill.html` — 账单详情（对账、异议、上传发票、收付款只读）

### 丽呈财务端
- `lcc-workbench.html` — 费用管理 / 分佣账单
- `lcc-bill-list.html` — 账单管理
- `lcc-group-account.html` — 财务配置 / 账户信息（酒店、合作集团）

## 产品原则（本期）

- 仅佣金账单；应收、应付不做轧差
- 页面展示分类汇总，订单明细通过 Excel 下载
- 异议由丽呈财务确认后即为最终结果

## 本地预览

```bash
python3 -m http.server 8765
```
