var Te=`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
      "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    background: #f7f7f5;
    color: #37352f;
    min-height: 100vh;
  }
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    transition: background 0.15s, opacity 0.15s;
  }
  input, textarea {
    font-family: inherit;
    font-size: 14px;
    border: 1px solid #e0e0dc;
    border-radius: 6px;
    padding: 9px 12px;
    outline: none;
    background: #fff;
    color: #37352f;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  input:focus, textarea:focus {
    border-color: #2383e2;
    box-shadow: 0 0 0 2px rgba(35,131,226,0.15);
  }
  /* 手机 / 平板基础自适应：
     ① -webkit-text-size-adjust 防止横竖屏切换时字号被系统自动放大；
     ② 长文本 / 长链接可换行，避免窄屏出现横向滚动条。 */
  html { -webkit-text-size-adjust: 100%; }
  body { overflow-wrap: break-word; }
  img, video { max-width: 100%; height: auto; }
`;function j(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ee(t){let e=String(t||"").trim();if(!e)return"";let a=j(e);return`<link rel="icon" href="${a}">
<link rel="shortcut icon" href="${a}">
`}var nt=`
  <div class="card" id="registerCard" style="display:none">
    <h1>新帐户注册<span class="badge-trial">无限期试用</span></h1>
    <div class="subtitle">申请为团队用户（团队管理员）</div>

    <form id="registerForm">
      <div class="field">
        <label>团队名称</label>
        <input type="text" id="regTeamName" maxlength="30" placeholder="例如：Qafield" required>
      </div>
      <div class="field">
        <label>登录用户名</label>
        <input type="text" id="regUsername" maxlength="20" autocomplete="off" placeholder="3~20 位字母 / 数字 / _ . -" required>
      </div>
      <div class="field">
        <label>邮箱（用于接收注册确认码）</label>
        <input type="email" id="regEmail" maxlength="60" autocomplete="email" placeholder="例如：zhangsan@example.com" required>
      </div>
      <div class="field">
        <label>密码</label>
        <input type="password" id="regPassword" autocomplete="new-password" placeholder="至少 6 位" required>
      </div>
      <div class="field">
        <label>确认密码</label>
        <input type="password" id="regConfirm" autocomplete="new-password" placeholder="请再次输入密码" required>
      </div>
      <div class="field">
        <label>联系人／联系方式（选填）</label>
        <input type="text" id="regContact" maxlength="50" placeholder="例如：张三 13800000000">
      </div>
      <div class="field">
        <label>申请说明（选填）</label>
        <textarea id="regRemark" rows="2" maxlength="200" placeholder="可填写公司信息等，便于超级管理员与您联系"></textarea>
      </div>
      <button type="submit" class="btn-primary" id="regBtn">提交注册并发送确认码</button>
      <div class="error" id="regError"></div>
    </form>
    <div class="hint">提交后系统会向上面填写的邮箱发送 <b>6 位邮箱确认码</b>（10 分钟内有效）。</div>
    <div class="hint">在登录页输入确认码完成邮箱确认后，即可正常登录（注册成功即成为该团队的「管理员」：试用期无限期）。</div>
    <div class="hint">试用版功能与专业版基本相同（可管理成员 / 生产方 / 客户、维护订单状态），仅数量受限：成员 2 个、生产方 1 个、客户 1 个，且页面顶部会显示广告位。</div>
    <div class="hint">与专业版一致：<b>团队账号本人不录入订单</b> —— 请先在「成员管理」中添加成员、在「可录入订单客户列表」中为其分配客户，再由成员登录录入订单。</div>
    <div class="hint">点击顶栏「订阅」升级为专业用户后：数量限制解除、广告位移除。</div>
    <div class="switch-row">
      <button type="button" class="link-btn" id="btnGoLogin">返回登录</button>
    </div>
  </div>`;function $e(t,e,a,d){let m=t||"订单管理系统",p=e!==!1,r=String(a??"").trim();return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>登录 - ${j(m)}</title>
${Ee(d)}

<style>
${Te}
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 36px;
    width: 100%;
    max-width: 380px;
  }
  h1 {
    font-size: 22px;
    text-align: center;
    margin-bottom: 6px;
    font-weight: 600;
  }
  .subtitle {
    text-align: center;
    color: #9b9a97;
    font-size: 13px;
    margin-bottom: 28px;
  }
  .field { margin-bottom: 16px; }
  .field label {
    display: block;
    font-size: 13px;
    color: #6b6b68;
    margin-bottom: 6px;
    font-weight: 500;
  }
  .field input { width: 100%; }
  /* 登录卡片：「标签 + 输入框」同一行显示（用户名 / 密码） */
  .field-inline {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }
  .field-inline > label {
    width: 64px;
    flex: 0 0 auto;
    margin-bottom: 0;
    text-align: right;
  }
  .field-inline > input {
    width: auto;
    flex: 1 1 auto;
    min-width: 0;
    /* 输入框宽度缩短为原来的 80%（右留白 20%）：
       100% 为整行宽度，减去标签列 64px + 间距 10px = 输入框原本占用的宽度，再 × 0.8 */
    max-width: calc((100% - 74px) * 0.8);
  }
  /* 「忘记密码请联系 + 邮箱」同一行 */
  .hint-inline { margin-top: 18px; }
  .hint-inline .support-mail { color: #6b6b68; word-break: break-all; }
  .btn-primary {
    width: 100%;
    background: #2383e2;
    color: #fff;
    padding: 11px;
    font-size: 15px;
    font-weight: 500;
    margin-top: 8px;
  }
  .btn-primary:hover { background: #1a6fc4; }
  .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
  /* 登录按钮：宽度缩短为原来的一半并居中（注册 / 邮箱确认按钮保持整行宽度） */
  #submitBtn {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .error {
    color: #eb5757;
    font-size: 13px;
    text-align: center;
    margin-top: 14px;
    min-height: 18px;
  }
  .hint {
    text-align: center;
    font-size: 12px;
    color: #b0b0ad;
    margin-top: 20px;
    line-height: 1.6;
  }
  .field textarea { width: 100%; resize: vertical; }
  .switch-row {
    text-align: center;
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid #ebebe8;
    font-size: 13px;
  }
  .link-btn {
    background: transparent;
    color: #2383e2;
    font-size: 13px;
    padding: 4px 6px;
  }
  .link-btn:hover { text-decoration: underline; background: transparent; }
  /* 邮箱确认卡片提示（含调试模式回显的确认码） */
  .verify-tip {
    text-align: center;
    font-size: 12px;
    color: #9b9a97;
    line-height: 1.7;
    margin-top: 14px;
    min-height: 16px;
  }
  .verify-tip .dev-code {
    color: #b26b00;
    font-weight: 600;
  }
  .badge-trial {
    display: inline-block;
    font-size: 12px;
    color: #0f7b6c;
    background: #e6f4ee;
    border-radius: 10px;
    padding: 2px 8px;
    margin-left: 6px;
    vertical-align: middle;
  }
  /* ================= 手机 / 平板自适应（登录 / 注册页） ================= */
  @media (max-width: 640px) {
    body { padding: 14px; align-items: flex-start; }
    .card { padding: 24px 18px; border-radius: 10px; max-width: 100%; }
    h1 { font-size: 19px; }
    .subtitle { margin-bottom: 20px; }
    /* 「标签 + 输入框」同行显示在窄屏换为上下两行，输入框占满宽度 */
    .field-inline { flex-wrap: wrap; }
    .field-inline > label { width: auto; text-align: left; }
    .field-inline > input { max-width: 100%; }
    #submitBtn { width: 100%; }
    /* 输入框字号 16px：iOS 聚焦时不会自动放大页面 */
    input, textarea, select { font-size: 16px; }
    .switch-row { margin-top: 12px; }
  }
  @media (max-width: 380px) {
    .card { padding: 20px 14px; }
    h1 { font-size: 17px; }
  }
</style>
</head>
<body>
  <div class="card" id="loginCard">
    <h1>${j(m)}</h1>
    <div class="subtitle">云端订单信息工作平台</div>

    <form id="loginForm">
      <div class="field field-inline">
        <label>帐号</label>
        <input type="text" id="username" autocomplete="username" placeholder="请输入帐号" required>
      </div>
      <div class="field field-inline">
        <label>密码</label>
        <input type="password" id="password" autocomplete="current-password" placeholder="请输入密码" required>
      </div>
      <button type="submit" class="btn-primary" id="submitBtn">登 录</button>
      <div class="error" id="error"></div>
    </form>
${r?`    <div class="hint hint-inline">忘记密码请联系 <span class="support-mail">${j(r)}</span></div>
`:""}${p?`    <div class="switch-row">
      <button type="button" class="link-btn" id="btnGoRegister">新帐户注册</button>
    </div>`:""}
  </div>

${p?nt:""}

  <div class="card" id="verifyCard" style="display:none">
    <h1>邮箱确认</h1>
    <div class="subtitle">确认码已发送至 <span id="verifyEmail">注册邮箱</span></div>

    <form id="verifyForm">
      <div class="field">
        <label>邮箱确认码（6 位数字）</label>
        <input type="text" id="verifyCode" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="请输入邮件中的 6 位确认码" required>
      </div>
      <button type="submit" class="btn-primary" id="verifyBtn">确认并登录</button>
      <div class="error" id="verifyError"></div>
    </form>
    <div class="verify-tip" id="verifyTip"></div>
    <div class="switch-row">
      <button type="button" class="link-btn" id="btnResend">重新发送确认码</button>
      <button type="button" class="link-btn" id="btnBackLogin">返回登录</button>
    </div>
  </div>

<script>
  const form = document.getElementById('loginForm');
  const errEl = document.getElementById('error');
  const btn = document.getElementById('submitBtn');
  const loginCard = document.getElementById('loginCard');
  const registerCard = document.getElementById('registerCard');
  const verifyCard = document.getElementById('verifyCard');
  const verifyErr = document.getElementById('verifyError');
  const verifyTip = document.getElementById('verifyTip');
  const verifyBtn = document.getElementById('verifyBtn');
  const resendBtn = document.getElementById('btnResend');
  let pendingUser = '';      // 待完成邮箱确认的登录用户名
  let pendingPassword = '';  // 该账号的登录密码（「重新发送确认码」时用于校验身份）
  let resendTimer = null;    // 重发倒计时
  let resendLeft = 0;

  // 显示 / 隐藏卡片（登录 / 注册 / 邮箱确认）；关闭注册时注册卡片不存在，这里过滤掉
  function showCard(card) {
    [loginCard, registerCard, verifyCard].filter(Boolean).forEach(function (c) {
      c.style.display = c === card ? '' : 'none';
    });
  }

  // 「邮箱确认」卡片提示（message + 调试模式回显的确认码）
  function setVerifyTip(message, devCode) {
    verifyTip.innerHTML = '';
    if (message) {
      const d = document.createElement('div');
      d.textContent = message;
      verifyTip.appendChild(d);
    }
    if (devCode) {
      const d = document.createElement('div');
      d.className = 'dev-code';
      d.textContent = '调试确认码：' + devCode + '（调试模式，未真实发送邮件）';
      verifyTip.appendChild(d);
    }
  }

  // 切换到「邮箱确认」卡片：注册成功后、或登录时账号尚未确认邮箱都会进入这里
  function showVerify(username, email, password, message, devCode) {
    pendingUser = username || '';
    pendingPassword = password || '';
    document.getElementById('verifyEmail').textContent = email || '注册邮箱';
    document.getElementById('verifyCode').value = '';
    verifyErr.textContent = '';
    setVerifyTip(message, devCode);
    showCard(verifyCard);
    document.getElementById('verifyCode').focus();
    // 刚发送过确认码：先倒计时，避免立即重复发送
    startResendCooldown(60);
  }

  // 「重新发送确认码」倒计时（服务端限制 60 秒内不重复发送）
  function startResendCooldown(sec) {
    resendLeft = Math.max(0, Number(sec) || 0);
    if (resendTimer) { clearInterval(resendTimer); resendTimer = null; }
    if (!resendLeft) {
      resendBtn.disabled = false;
      resendBtn.textContent = '重新发送确认码';
      return;
    }
    resendBtn.disabled = true;
    resendBtn.textContent = '重新发送（' + resendLeft + ' 秒）';
    resendTimer = setInterval(function () {
      resendLeft -= 1;
      if (resendLeft <= 0) {
        clearInterval(resendTimer);
        resendTimer = null;
        resendBtn.disabled = false;
        resendBtn.textContent = '重新发送确认码';
        return;
      }
      resendBtn.textContent = '重新发送（' + resendLeft + ' 秒）';
    }, 1000);
  }

  // 登录 / 注册 / 邮箱确认 卡片切换（系统关闭注册时没有「新帐户注册」按钮）
  const btnGoRegister = document.getElementById('btnGoRegister');
  if (btnGoRegister) {
    btnGoRegister.addEventListener('click', () => {
      showCard(registerCard);
      document.getElementById('regTeamName').focus();
    });
  }
  // 「返回登录」按钮在注册卡片内，关闭注册时不存在
  const btnGoLogin = document.getElementById('btnGoLogin');
  if (btnGoLogin) {
    btnGoLogin.addEventListener('click', () => {
      showCard(loginCard);
      document.getElementById('username').focus();
    });
  }
  document.getElementById('btnBackLogin').addEventListener('click', () => {
    showCard(loginCard);
    document.getElementById('password').focus();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errEl.textContent = '';
    btn.disabled = true;
    btn.textContent = '登录中...';
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }),
      });
      const data = await res.json();
      if (!res.ok) {
        errEl.textContent = data.error || '登录失败';
        btn.disabled = false;
        btn.textContent = '登 录';
        return;
      }
      // 账号尚未完成注册邮箱确认：转到「邮箱确认」卡片，输入邮件中的确认码后才能登录
      if (data.needVerify) {
        btn.disabled = false;
        btn.textContent = '登 录';
        showVerify(
          data.username || username,
          data.email,
          password,
          data.sendError
            ? '确认码发送失败：' + data.sendError
            : (data.message || '请到注册邮箱查收确认码'),
          data.devCode
        );
        return;
      }
      // 超级管理员进入「团队用户管理」控制台，其他角色进入业务页面
      location.href = data.role === 'superadmin' ? '/admin' : '/todos';
    } catch (err) {
      errEl.textContent = '无法连接服务器：请确认服务已启动（本地调试先运行 npm run dev），并检查访问地址';
      btn.disabled = false;
      btn.textContent = '登 录';
    }
  });

  // 邮箱确认：输入邮件中的 6 位确认码，确认通过后直接完成登录
  document.getElementById('verifyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    verifyErr.textContent = '';
    const code = document.getElementById('verifyCode').value.trim();
    if (!/^[0-9]{6}$/.test(code)) {
      verifyErr.textContent = '请输入邮件中的 6 位数字确认码';
      return;
    }
    verifyBtn.disabled = true;
    verifyBtn.textContent = '确认中...';
    try {
      const res = await fetch('/api/register/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: pendingUser, code: code }),
      });
      const data = await res.json();
      if (!res.ok) {
        verifyErr.textContent = data.error || '确认失败';
        verifyBtn.disabled = false;
        verifyBtn.textContent = '确认并登录';
        return;
      }
      // 确认通过：已建立会话，直接进入系统
      location.href = data.role === 'superadmin' ? '/admin' : '/todos';
    } catch (err) {
      verifyErr.textContent = '无法连接服务器：请确认服务已启动（本地调试先运行 npm run dev），并检查访问地址';
      verifyBtn.disabled = false;
      verifyBtn.textContent = '确认并登录';
    }
  });

  // 重新发送确认码（需带登录密码校验身份；服务端限制 1 分钟内不重复发送、1 小时最多 5 次）
  resendBtn.addEventListener('click', async () => {
    if (resendLeft > 0 || !pendingUser) return;
    verifyErr.textContent = '';
    resendBtn.disabled = true;
    try {
      const res = await fetch('/api/register/resend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: pendingUser, password: pendingPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        verifyErr.textContent = data.error || '发送失败';
        resendBtn.disabled = false;
        return;
      }
      setVerifyTip(data.message || '确认码已重新发送，请查收（10 分钟内有效）', data.devCode);
      startResendCooldown(data.resendAfterSec || 60);
    } catch (err) {
      verifyErr.textContent = '无法连接服务器：请确认服务已启动（本地调试先运行 npm run dev），并检查访问地址';
      resendBtn.disabled = false;
    }
  });

  // 注册：申请为团队用户（提交成功后系统向注册邮箱发送确认码，输入确认码完成确认后才能登录）
  const regForm = document.getElementById('registerForm');
  const regErr = document.getElementById('regError');
  const regBtn = document.getElementById('regBtn');
  // 系统关闭注册时页面不渲染注册卡片（regForm 为 null），这里整段跳过
  if (regForm) {
    regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    regErr.textContent = '';
    const teamName = document.getElementById('regTeamName').value.trim();
    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirm').value;
    // 邮箱：必填项，格式校验（与后端一致）
    if (!email) {
      regErr.textContent = '请输入邮箱';
      return;
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*\\.[A-Za-z]{2,}$/.test(email)) {
      regErr.textContent = '邮箱格式不正确，请检查后重试';
      return;
    }
    if (password !== confirmPassword) {
      regErr.textContent = '两次输入的密码不一致';
      return;
    }
    regBtn.disabled = true;
    regBtn.textContent = '提交中...';
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamName: teamName,
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          contact: document.getElementById('regContact').value.trim(),
          remark: document.getElementById('regRemark').value.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        regErr.textContent = data.error || '注册失败';
        regBtn.disabled = false;
        regBtn.textContent = '提交注册并发送确认码';
        return;
      }
      regBtn.disabled = false;
      regBtn.textContent = '提交注册并发送确认码';
      // 注册成功：确认码已发送到注册邮箱，转到「邮箱确认」卡片输入确认码（确认通过才可登录）
      if (data.needVerify) {
        showVerify(
          data.username || username,
          data.email,
          password,
          data.message || '确认码已发送至注册邮箱，请在 10 分钟内完成确认',
          data.devCode
        );
        return;
      }
      alert('注册成功！已为「' + (data.teamName || teamName) + '」开通无限期试用账号（与专业版一致：团队账号本人不录入订单，请在「成员管理」中添加成员并分配客户，由成员录入订单；成员 2 个 / 生产方 1 个 / 客户 1 个）。');
      location.href = '/todos';
    } catch (err) {
      regErr.textContent = '无法连接服务器：请确认服务已启动（本地调试先运行 npm run dev），并检查访问地址';
      regBtn.disabled = false;
      regBtn.textContent = '提交注册并发送确认码';
    }
    });
  }
<\/script>
</body>
</html>`}function Re(t,e,a,d){let m=e===!1,p=String(a??"").trim()||"订单管理系统",r=String(d??"").trim(),s=r?`
  <!-- 广告位（试用版）：广告代码由超级管理员在控制台「系统设置」中维护；订阅专业版后不再显示 -->
  <div class="ad-slot" id="adSlot">${r}</div>
`:"";return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>我的待办 - ${j(p)}</title>
${Ee(t)}
<style>
${Te}
  .topbar {
    background: #fff;
    border-bottom: 1px solid #ebebe8;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .topbar .brand {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .topbar .user-area {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: #6b6b68;
  }
  .btn-ghost {
    background: transparent;
    color: #6b6b68;
    padding: 6px 12px;
    font-size: 13px;
  }
  .btn-ghost:hover { background: #f1f1ef; }
  /* 顶栏团队 / 试用信息徽章 */
  .team-badge {
    font-size: 12px;
    font-weight: 400;
    color: #6b6b68;
    background: #f1f1ef;
    border-radius: 10px;
    padding: 3px 9px;
  }
  .team-badge.warn { color: #d9730d; background: #fdf0e3; }
  .team-badge.over { color: #eb5757; background: #fdecec; }
  /* 顶栏「订阅 / 续费」按钮（试用账号始终显示「订阅」；专业版剩余不足 30 天显示「续费」） */
  .btn-renew {
    background: #2383e2;
    color: #fff;
    font-size: 12px;
    padding: 3px 10px;
    border-radius: 10px;
    line-height: 1.6;
  }
  .btn-renew:hover { background: #1a6fc4; }
  /* 已提交续费申请后的按钮形态 */
  .btn-renew.submitted { background: #fdf0e3; color: #d9730d; }
  .btn-renew.submitted:hover { background: #fbe6d0; }
  /* 续费套餐选择（1 个月 / 1 年 / 3 年 / 5 年） */
  .plan-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .plan-card {
    border: 1px solid #e0e0dc;
    border-radius: 8px;
    padding: 10px 12px;
    background: #fff;
    text-align: left;
    line-height: 1.6;
  }
  .plan-card:hover { border-color: #2383e2; }
  .plan-card.active {
    border-color: #2383e2;
    background: #f4f9ff;
    box-shadow: 0 0 0 2px rgba(35,131,226,0.15);
  }
  .plan-card .plan-term { display: block; font-size: 14px; font-weight: 600; color: #37352f; }
  .plan-card .plan-price { font-size: 15px; font-weight: 600; color: #d9730d; }
  /* 订阅申请弹窗内的提示文字 */
  .renew-hint {
    font-size: 12px;
    color: #9b9a97;
    line-height: 1.7;
    background: #f7f7f5;
    border-radius: 6px;
    padding: 8px 10px;
  }
  .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 28px 20px 80px;
  }
  /* 试用版广告位（页面顶部；广告代码由超级管理员在「系统设置」中维护，订阅专业版后不再输出） */
  .ad-slot {
    max-width: 720px;
    margin: 14px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    color: #6b6b68;
    line-height: 1.6;
  }
  .ad-slot img { max-width: 100%; height: auto; }
  .ad-slot a { color: #2383e2; }
  .ad-slot iframe { max-width: 100%; border: 0; }
  .add-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;
  }
  .add-row input {
    flex: 1 1 140px;
    min-width: 0;
    padding: 12px 14px;
    font-size: 15px;
  }
  /* 订单号输入框：132px（= 原 88px 加长 50%）；试用版与专业版一致 */
  .add-row input.title-input { flex: 0 1 132px; }
  /* 订单文件链接输入框：占更宽一些 */
  .add-row input.url-input { flex: 2 1 240px; }
  /* 币种下拉（美元 / 人民币）：位于交期与金额之间 */
  .currency-select {
    padding: 12px 10px;
    font-size: 14px;
    border: 1px solid #e0e0dc;
    border-radius: 6px;
    background: #fff;
    color: #37352f;
    outline: none;
    cursor: pointer;
    flex: 0 0 108px;
    max-width: 108px;
  }
  .currency-select:focus { border-color: #2383e2; }
  .customer-select,
  .customer-input {
    padding: 12px 14px;
    font-size: 15px;
    border: 1px solid #e0e0dc;
    border-radius: 6px;
    background: #fff;
    color: #37352f;
    outline: none;
    max-width: 150px;
    cursor: pointer;
  }
  /* 专业版「客户」下拉：宽度固定 150px */
  .customer-select { flex: 0 0 150px; }
  .customer-select:focus,
  .customer-input:focus { border-color: #2383e2; }
  /* 试用账号（未订阅）：客户名称手工填写，输入后自动记入客户列表 */
  .customer-input { cursor: text; }
  .due-input {
    padding: 12px 10px;
    font-size: 14px;
    border: 1px solid #e0e0dc;
    border-radius: 6px;
    background: #fff;
    color: #37352f;
    outline: none;
    max-width: 150px;
  }
  .due-input:focus { border-color: #2383e2; }
  /* 日期框：浏览器原生的空值提示（跟随语言，如 yyyy/mm/日）无法直接改文字。
     空值且未聚焦时：① 把原生提示文字设为透明；② 再用一块与输入框同色的自绘提示「yyyy/mm/dd」盖住它。
     有值或聚焦时露出原生日期控件；Firefox 自己会显示 placeholder，不用自绘。 */
  .date-field { position: relative; display: flex; }
  .add-row .date-field { flex: 1 1 140px; min-width: 0; max-width: 150px; }
  .date-field input[type="date"] { width: 100%; }
  .date-ph {
    position: absolute;
    left: 1px;
    right: 30px;
    top: 1px;
    bottom: 1px;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    font-size: 14px;
    color: #9b9a97;
    pointer-events: none;
  }
  .add-row .date-ph { padding-left: 10px; }
  .modal .date-ph { padding-left: 12px; }
  .date-field input[type="date"]:not(.has-value):not(:focus),
  .date-field input[type="date"]:not(.has-value):not(:focus):hover,
  .date-field input[type="date"]:not(.has-value):not(:focus):active { color: transparent; }
  .date-field input[type="date"]:not(.has-value):not(:focus)::-webkit-datetime-edit,
  .date-field input[type="date"]:not(.has-value):not(:focus):hover::-webkit-datetime-edit { color: transparent; }
  .date-field input[type="date"].has-value + .date-ph,
  .date-field input[type="date"]:focus + .date-ph { display: none; }
  @-moz-document url-prefix() { .date-ph { display: none; } }
  .amount-input {
    padding: 12px 10px;
    font-size: 14px;
    border: 1px solid #e0e0dc;
    border-radius: 6px;
    background: #fff;
    color: #37352f;
    outline: none;
    max-width: 110px;
  }
  .amount-input:focus { border-color: #2383e2; }
  .todo-due {
    font-size: 11px;
    background: #fdf0e3;
    color: #d9730d;
    padding: 2px 8px;
    border-radius: 10px;
    white-space: nowrap;
    flex-shrink: 0;
    font-weight: 500;
  }
  /* 交期颜色（三种状态一致）：已到期/逾期=红，2 周内=黄，2 周以上=绿 */
  .todo-due.due-overdue { background: #fdeceb; color: #eb5757; }
  .todo-due.due-soon { background: #fdf0e3; color: #d9730d; }
  .todo-due.due-far { background: #e6f4ee; color: #0f7b6c; }
  /* 交期的完整日期（yyyy-mm-dd，宽屏显示）/ 短日期（月/日，手机等窄屏显示，保证一行不换行） */
  .todo-due .due-short { display: none; }
  /* 可点击修改的交期 / 金额（管理员 + 待确认） */
  .todo-due.editable, .todo-amount.editable {
    cursor: pointer;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.14);
  }
  .todo-due.editable:hover, .todo-amount.editable:hover {
    box-shadow: inset 0 0 0 1px rgba(35,131,226,0.65);
  }
  /* 金额：灰色（中性色，避免与交期的绿/黄/红混淆） */
  .todo-amount {
    font-size: 11px;
    background: #f1f1ef;
    color: #6b6b68;
    padding: 2px 8px;
    border-radius: 10px;
    white-space: nowrap;
    flex-shrink: 0;
    font-weight: 500;
  }
  /* 出货日期区块（订单行「交期」右侧，**长度与交期区块一致**）：
     · 未填写 → 灰色**空白区块**（用不可见的「0000-00-00」占位符把宽度撑到与交期一致）；
     · 已填写 → 灰色区块内显示出货日期（**不可再点击重复添加**） */
  .todo-ship {
    font-size: 11px;
    background: #f1f1ef;
    color: #6b6b68;
    padding: 2px 8px;
    border-radius: 10px;
    white-space: nowrap;
    flex-shrink: 0;
    font-weight: 500;
  }
  /* 空白区块的宽度占位符（仅占宽度、不可见） */
  .todo-ship-ph { visibility: hidden; }
  /* 未填写 + 当前用户有「是否可以添加出货日期」权限：可点击添加（浅色描边 + 悬浮变蓝，与交期可点击一致） */
  .todo-ship.ship-addable {
    cursor: pointer;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.14);
  }
  .todo-ship.ship-addable:hover {
    background: #e9e9e6;
    box-shadow: inset 0 0 0 1px rgba(35,131,226,0.65);
  }
  /* 已填写出货日期：灰色日期区块（不可点击） */
  .todo-ship.ship-filled { cursor: default; }
  .todo-customer {

    font-size: 11px;
    background: #e7f0fb;
    color: #2383e2;
    padding: 2px 8px;
    border-radius: 10px;
    white-space: nowrap;
    flex-shrink: 1;
    min-width: 40px;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  }

  /* 待办卡片：生产方标签（灰色中性标签，避免与交期的绿/黄/红混淆） */
  .todo-producer {
    font-size: 11px;
    background: #f1f1ef;
    color: #6b6b68;
    padding: 2px 8px;
    border-radius: 10px;
    white-space: nowrap;
    flex-shrink: 0;
    font-weight: 500;
  }
  /* 管理员 / 总经理：生产方标签带采购文件链接时可点击 */
  a.todo-producer-link { text-decoration: none; }
  a.todo-producer-link:hover { color: #2383e2; text-decoration: underline; }
  /* 未填写「采购文件链接」的订单：生产方标签用黄色色块提示（需补采购文件） */
  .todo-producer.todo-producer-warn {
    background: #fff3c4;
    color: #b25b00;
    box-shadow: inset 0 0 0 1px #f2d98d;
  }
  /* 缺采购文件链接 + 当前成员有「生产单下单权限」：黄色标签可点击，用来补填采购文件链接 */
  .todo-producer.todo-producer-addable {
    cursor: pointer;
    box-shadow: inset 0 0 0 1.5px #e0b64a;
  }
  .todo-producer.todo-producer-addable:hover {
    background: #ffe89a;
    color: #8a4300;
  }
  /* 一个待办固定一行：宽度不足时按优先级隐藏次要信息，保证 PO#（标题）始终可见。
     注意：这些 @container 规则必须放在本页样式的最末尾（见文件底部），
     否则会被后面同优先级的 .todo-* 规则覆盖。 */
  /* 成员管理：可观察生产方下拉 */
  select.watch-add-select {
    font-family: inherit;
    border: 1px solid #e0e0dc;
    border-radius: 6px;
    background: #fff;
    color: #37352f;
    outline: none;
    min-width: 0;
  }

  /* 生产方下拉（仅管理员）：待确认阶段即可直接指定 */
  .producer-select {
    font-size: 11px;
    padding: 3px 6px;
    border-radius: 6px;
    border: 1px solid #e0e0dc;
    background: #fff;
    color: #0f7b6c;
    font-family: inherit;
    outline: none;
    max-width: 150px;
    flex-shrink: 0;
  }
  .producer-select.unset { color: #d9730d; border-color: #f0d6b8; background: #fffaf3; }
  /* 未指定生产方时的提示（详情区内） */
  .producer-hint {
    font-size: 12px;
    color: #d9730d;
    background: #fdf0e3;
    border-radius: 6px;
    padding: 8px 10px;
    margin-bottom: 10px;
    line-height: 1.6;
  }

  .btn-add {
    background: #2383e2;
    color: #fff;
    padding: 0 22px;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
  }
  .btn-add:hover { background: #1a6fc4; }
  .section-title {
    font-size: 12px;
    font-weight: 600;
    color: #9b9a97;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 20px 0 10px;
  }
  .todo-item {
    background: #fff;
    border: 1px solid #ebebe8;
    border-radius: 8px;
    margin-bottom: 8px;
    overflow: hidden;
    transition: box-shadow 0.15s;
  }
  .todo-item:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
  .todo-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 16px;
    cursor: pointer;
    user-select: none;
    container-type: inline-size;
  }
  .todo-check {
    width: 18px;
    height: 18px;
    border: 1.5px solid #c9c9c5;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #fff;
    transition: all 0.15s;
  }
  .todo-check.checked {
    background: #2383e2;
    border-color: #2383e2;
  }
  .todo-check.readonly {
    cursor: not-allowed;
    opacity: 0.7;
  }
  .todo-check:not(.readonly) { cursor: pointer; }
  .todo-check:not(.readonly):hover { border-color: #2383e2; }
  /* 状态徽章 */
  .status-badge {
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 10px;
    white-space: nowrap;
    flex-shrink: 0;
    font-weight: 500;
  }
  .status-badge.pending { background: #fdf0e3; color: #d9730d; }
  .status-badge.doing { background: #e7f0fb; color: #2383e2; }
  .status-badge.done { background: #e6f4ee; color: #0f7b6c; }
  /* 状态下拉（管理员） */
  .status-select {
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid #e0e0dc;
    background: #fff;
    color: #37352f;
    cursor: pointer;
    flex-shrink: 0;
    outline: none;
  }
  .status-select:focus { border-color: #2383e2; }
  .todo-title {
    flex: 1 1 auto;
    min-width: 6em;
    font-size: 15px;
    line-height: 1.4;
    /* 订单号与右侧的「回形针」图标（脱敏订单文件链接）同一行显示 */
    display: flex;
    align-items: center;
    gap: 5px;
    overflow: hidden;
  }
  /* 订单号文字：过长时以省略号收尾（右侧的「回形针」图标始终可见） */
  .todo-title-text {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .todo-title.done {
    text-decoration: line-through;
    color: #b0b0ad;
  }
  /* PO# 链接（该待办有「订单文件链接」时） */
  .todo-title-link { color: inherit; text-decoration: none; }
  .todo-title-link:hover { color: #2383e2; text-decoration: underline; }
  /* 「脱敏订单文件链接」的回形针图标（订单号右侧）：
     · 已有链接 → 正常着色（蓝色），点击直接打开该链接（所有能看到该订单的用户都可点击）；
     · 暂无链接且当前用户有「是否可下脱敏订单」权限 → 浅灰色可点击（点击弹窗补填链接）；
     · 暂无链接且无该权限 → 浅灰色（仅作提示，点击无反应） */
  .todo-mask {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    color: #c9c9c5;
    text-decoration: none;
    cursor: default;
  }
  .todo-mask svg { width: 15px; height: 15px; display: block; }
  .todo-mask.todo-mask-addable { cursor: pointer; }
  .todo-mask.todo-mask-addable:hover { color: #6b6b68; background: #f1f1ef; }
  a.todo-mask.todo-mask-linked { color: #2383e2; cursor: pointer; }
  a.todo-mask.todo-mask-linked:hover { color: #1a6fc4; background: #e7f0fb; }
  .todo-title.done .todo-mask { opacity: 0.75; }
  .todo-date {
    font-size: 12px;
    color: #b0b0ad;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .todo-owner {
    font-size: 11px;
    background: #f1f1ef;
    color: #6b6b68;
    padding: 2px 8px;
    border-radius: 10px;
    white-space: nowrap;
    flex-shrink: 1;
    min-width: 40px;
    max-width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .note-list { margin-bottom: 12px; }
  .note-empty {
    font-size: 13px;
    color: #c9c9c5;
    padding: 6px 0;
  }
  .note-item {
    background: #fafaf9;
    border-radius: 6px;
    padding: 8px 12px;
    margin-bottom: 8px;
  }
  .note-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }
  .note-author {
    font-size: 12px;
    font-weight: 600;
    color: #37352f;
  }
  .note-time {
    font-size: 11px;
    color: #b0b0ad;
  }
  .note-text {
    font-size: 14px;
    line-height: 1.6;
    color: #37352f;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .note-link {
    display: inline-block;
    font-size: 14px;
    color: #2383e2;
    text-decoration: none;
    background: #e7f0fb;
    padding: 6px 12px;
    border-radius: 6px;
    font-weight: 500;
    transition: background 0.15s;
  }
  .note-link:hover { background: #d6e7fa; text-decoration: underline; }

  .note-add { margin-top: 4px; }
  .note-add .note-input { min-height: 56px; }
  /* ---------- 站内消息（@提及） ---------- */
  /* 顶栏「登录名左侧」的红色数字角标：数字 = 未读 @ 次数（>9 显示 9+） */
  .mention-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 17px;
    height: 17px;
    padding: 0 5px;
    margin-right: 6px;
    background: #eb5757;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    line-height: 17px;
    border-radius: 9px;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
  }
  .mention-badge:hover { background: #d64545; }
  /* 未读为 0 但仍有历史提醒：灰色「0」角标（仍可点开查看历史提醒） */
  .mention-badge.zero { background: #9b9a97; }
  .mention-badge.zero:hover { background: #8a8a87; }
  /* 成员列表中成员登录名左侧的红点（团队管理员可见） */
  .mention-badge.static { cursor: default; }
  /* 备注正文里的 @提及 高亮 */
  .mention-chip {
    color: #2383e2;
    background: #e7f0fb;
    border-radius: 6px;
    padding: 0 4px;
    font-weight: 500;
  }
  /* 输入「@」时弹出的团队成员候选列表 */
  .mention-picker {
    position: absolute;
    z-index: 200;
    min-width: 168px;
    max-height: 190px;
    overflow-y: auto;
    background: #fff;
    border: 1px solid #e0e0dc;
    border-radius: 8px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.12);
    padding: 4px;
  }
  .mention-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border-radius: 6px;
    font-size: 13px;
    color: #37352f;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
  }
  .mention-item:hover, .mention-item.active { background: #f1f1ef; }
  .mention-item .mention-name { font-weight: 500; }
  .mention-item .mention-role {
    font-size: 11px;
    color: #9b9a97;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mention-picker-empty { padding: 8px; font-size: 12px; color: #9b9a97; line-height: 1.6; }
  /* 站内消息面板（@我的） */
  .mention-list { display: flex; flex-direction: column; gap: 8px; max-height: 330px; overflow-y: auto; }
  .mention-row {
    border: 1px solid #ebebe8;
    border-radius: 8px;
    padding: 8px 10px;
    font-size: 13px;
    line-height: 1.7;
    cursor: pointer;
    word-break: break-word;
  }
  .mention-row:hover { border-color: #2383e2; }
  .mention-row.unread { background: #fff7f7; border-color: #f3c9c9; }
  .mention-row .mention-from { font-weight: 600; margin-right: 6px; }
  /* 录入者后面的时间（次要信息） */
  .mention-row .mention-time { font-size: 11px; color: #9b9a97; margin-right: 6px; }
  .mention-row .mention-text { color: #37352f; }
  /* 消息行抬头：左侧信息 + 右上角「未读」勾选框 */
  .mention-row-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }
  .mention-row-main { min-width: 0; }
  .mention-unread-toggle {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    font-size: 11px;
    color: #6b6b68;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
  }
  .mention-unread-toggle input { margin: 0; cursor: pointer; }
  /* 勾选态（= 未读）：文字变红加粗 */
  .mention-unread-toggle.on { color: #eb5757; font-weight: 600; }
  .body-actions { gap: 8px; }
  .body-actions .save-status { margin-right: auto; }
  .todo-arrow {
    color: #c9c9c5;
    font-size: 12px;
    transition: transform 0.2s;
    flex-shrink: 0;
  }
  .todo-item.open .todo-arrow { transform: rotate(90deg); }
  .todo-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease;
    border-top: 1px solid transparent;
  }
  .todo-item.open .todo-body {
    max-height: 5000px;
    border-top-color: #f1f1ef;
  }

  .todo-body-inner {
    padding: 14px 16px 16px 46px;
  }
  .note-label {
    font-size: 12px;
    color: #9b9a97;
    margin-bottom: 6px;
    font-weight: 500;
  }
  .note-input {
    width: 100%;
    min-height: 70px;
    resize: vertical;
    line-height: 1.6;
    font-size: 14px;
  }
  .body-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .save-status {
    font-size: 12px;
    color: #9b9a97;
  }
  .btn-danger {
    background: transparent;
    color: #eb5757;
    padding: 6px 12px;
    font-size: 13px;
  }
  .btn-danger:hover { background: #fdecec; }
  .empty {
    text-align: center;
    color: #b0b0ad;
    padding: 60px 20px;
    font-size: 14px;
  }
  .empty .icon { font-size: 40px; margin-bottom: 12px; }
  /* 「已完成」加载更多按钮 */
  .load-more-row {
    display: flex;
    justify-content: center;
    padding: 2px 0 6px;
  }
  .load-more-btn {
    background: #fff;
    color: #37352f;
    border: 1px solid #e0e0dc;
    padding: 7px 16px;
    font-size: 13px;
    border-radius: 6px;
  }
  .load-more-btn:hover { background: #f7f7f5; }
  /* 弹窗 */
  .modal-mask {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(15,15,15,0.4);
    z-index: 100;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .modal-mask.show { display: flex; }
  .modal {
    background: #fff;
    border-radius: 12px;
    width: 100%;
    max-width: 460px;
    max-height: 85vh;
    overflow-y: auto;
    padding: 24px;
  }
  .modal h2 {
    font-size: 18px;
    margin-bottom: 18px;
    font-weight: 600;
  }
  .modal .field { margin-bottom: 14px; }
  .modal .field label {
    display: block;
    font-size: 13px;
    color: #6b6b68;
    margin-bottom: 6px;
    font-weight: 500;
  }
  .modal .field input { width: 100%; }
  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }
  .btn-secondary {
    background: #f1f1ef;
    color: #37352f;
    padding: 9px 18px;
  }
  .btn-secondary:hover { background: #e8e8e5; }
  .btn-primary-sm {
    background: #2383e2;
    color: #fff;
    padding: 9px 18px;
  }
  .btn-primary-sm:hover { background: #1a6fc4; }
  .user-list { margin-top: 6px; display: flex; flex-direction: column; gap: 10px; }
  /* 每个成员一个区块：底色加深 + 区块间距，避免几个成员看成一团 */
  .user-block {
    border: 1px solid #dcdcd8;
    border-radius: 8px;
    background: #e8e8e5;
    overflow: hidden;
  }
  .user-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 12px;
    font-size: 14px;
  }
  .user-row .role {
    font-size: 11px;
    background: #fff;
    color: #6b6b68;
    padding: 2px 8px;
    border-radius: 10px;
    margin-left: 8px;
  }
  .user-row .role.admin { background: #e7f0fb; color: #2383e2; }
  .user-row .role.viewer { background: #fdf0e3; color: #d9730d; }
  .user-row .role.restricted { background: #e6f4ee; color: #0f7b6c; }
  .user-row .role.superviewer { background: #f3e8ff; color: #8250df; }
  .user-row-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  /* 成员行右侧的「重置密码 / 删除」：两个按钮**分行**显示（上下排列） */
  .user-row-btns {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
    flex-shrink: 0;
  }
  .user-row-btns button { width: 100%; }
  /* 加深底色上的按钮改用白底，更清楚 */
  .user-row .btn-secondary-sm { background: #fff; border: 1px solid #e0e0dc; }
  .user-row .btn-secondary-sm:hover { background: #f7f7f5; }
  /* 成员管理：生产单下单权限开关（在「重置密码」按钮左侧） */
  .order-perm {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #6b6b68;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
  }
  .order-perm input {
    width: 14px;
    height: 14px;
    margin: 0;
    accent-color: #2383e2;
    cursor: pointer;
  }
  .order-perm b { color: #37352f; font-weight: 600; }
  /* 权限1「添加订单」（自动：客户列表里有客户即可添加订单）在成员行里的只读状态提示 */
  .order-perm-static {
    font-size: 12px;
    color: #6b6b68;
    white-space: nowrap;
  }
  .order-perm-static b { color: #37352f; font-weight: 600; }
  /* 普通成员的多个权限开关**分行**显示（权限2 / 权限3 / 权限4） */
  .order-perm-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  /* 权限开关后面的补充说明（如新增成员表单底部的权限说明） */
  .order-perm-hint {
    color: #9b9a97;
    font-size: 12px;
    font-weight: 400;
  }
  .order-perm-hint b { color: #6b6b68; }
  /* 成员备注（成员管理列表内）：直接点文字改，不显示「备注」字样与按钮 */
  .remark-row {
    margin-top: 4px;
    font-size: 12px;
    color: #6b6b68;
    max-width: 100%;
    word-break: break-word;
  }
  /* 加深底色上「未填写」提示也要看得清 */
  .user-block .desc-empty { color: #8a8a85; }
  .btn-secondary-sm {
    background: #f1f1ef;
    color: #37352f;
    padding: 6px 12px;
    font-size: 13px;
  }
  .btn-secondary-sm:hover { background: #e8e8e5; }

  /* 成员区块内的「客户列表 / 可观察生产方」面板：白底，与成员区块底色区分开 */
  .customer-manage {
    border-top: 1px solid #e0e0dc;
    padding: 10px 12px;
    background: #fff;
  }
  .customer-manage-title {
    font-size: 12px;
    color: #9b9a97;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .customer-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
    min-height: 22px;
  }
  .customer-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    background: #e7f0fb;
    color: #2383e2;
    padding: 3px 8px;
    border-radius: 10px;
  }
  .customer-chip-del {
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    color: #2383e2;
    opacity: 0.6;
  }
  .customer-chip-del:hover { opacity: 1; }
  .customer-empty { font-size: 12px; color: #c9c9c5; }
  /* 「可查看客户列表」（「是否可查看全部订单」= 否 的成员）：与「可录入订单客户列表」区分显示 */
  .customer-manage.view-customer-manage { background: #fbfbfa; }
  .customer-manage.view-customer-manage .customer-manage-title { color: #6b6b68; }
  .customer-manage-hint {
    font-size: 12px;
    color: #9b9a97;
    line-height: 1.6;
    margin-bottom: 8px;
  }
  .customer-chip.view-chip { background: #f1f1ef; color: #6b6b68; }
  .customer-chip.view-chip .customer-chip-del { color: #6b6b68; }
  .customer-add-row { display: flex; gap: 8px; }
  .customer-add-input {
    flex: 1;
    padding: 6px 10px;
    font-size: 13px;
  }
  .customer-add-row .btn-primary-sm { padding: 6px 14px; font-size: 13px; }
  .customer-add-row select {
    flex: 1;
    min-width: 0;
    padding: 6px 10px;
    font-size: 13px;
  }

  /* 生产方管理 */
  .modal .field textarea { width: 100%; }
  .producer-list { margin-top: 6px; }
  .producer-row-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  .producer-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid #ebebe8;
    border-radius: 6px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  .producer-short {
    font-weight: 600;
    color: #37352f;
    word-break: break-word;
  }
  .producer-desc {
    font-size: 13px;
    color: #6b6b68;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
    margin-top: 4px;
  }
  /* 可点击编辑的文字（成员备注 / 生产方说明 / 客户说明） */
  .desc-editable { cursor: pointer; border-radius: 4px; }
  .desc-editable:hover { color: #2383e2; text-decoration: underline; }
  .desc-empty { color: #c9c9c5; }
  .desc-editable:hover .desc-empty { color: #2383e2; text-decoration: underline; }
  .producer-row .btn-danger { padding: 4px 10px; font-size: 13px; }
  .producer-empty { font-size: 13px; color: #c9c9c5; padding: 6px 0; }
  /* 生产方性质（自产 / 外购）：新增表单里选择，列表里可直接切换 */
  .modal .field select.producer-nature { width: 100%; }
  select.producer-nature,
  select.producer-nature-select {
    font-family: inherit;
    font-size: 14px;
    border: 1px solid #e0e0dc;
    border-radius: 6px;
    padding: 9px 12px;
    background: #fff;
    color: #37352f;
    outline: none;
  }
  select.producer-nature-select {
    font-size: 12px;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 10px;
    color: #6b6b68;
    background: #f1f1ef;
    cursor: pointer;
    flex-shrink: 0;
  }
  select.producer-nature-select:focus { border-color: #2383e2; }
  .producer-name-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .msg { font-size: 13px; margin-top: 10px; min-height: 18px; }

  .msg.ok { color: #0f7b6c; }
  .msg.err { color: #eb5757; }
  /* 试用版数量限制提示（成员 / 生产方 / 客户）：订阅专业版后可解除限制 */
  .trial-limit-hint {
    font-size: 12px;
    line-height: 1.7;
    color: #d9730d;
    background: #fdf0e3;
    border-radius: 6px;
    padding: 8px 10px;
    margin-bottom: 12px;
  }
  .trial-limit-hint.full { color: #eb5757; background: #fdecec; }
  .divider { height: 1px; background: #ebebe8; margin: 20px 0; }
  /* 一个待办固定一行：宽度不足时按优先级隐藏次要信息，保证 PO#（标题）与生产方始终可见。
     注：@container 规则必须放在本页样式的最末尾，否则会被上面同优先级的 .todo-* 规则覆盖 */
  @container (max-width: 660px) {
    .todo-date { display: none; }
  }
  @container (max-width: 605px) {
    .todo-owner { display: none; }
  }
  @container (max-width: 555px) {
    .todo-customer { display: none; }
  }
  @container (max-width: 500px) {
    .todo-amount { display: none; }
  }
  /* 出货日期区块（「交期」右侧的灰色区块）：比金额再早一点隐藏，保证交期仍可见 */
  @container (max-width: 470px) {
    .todo-ship { display: none; }
  }
  /* 交期（.todo-due）在窄屏**始终显示**（不再隐藏，避免手机上完全看不到交期）：
     位置不够时改为只显示「月/日」（不显示年份），容器宽度同一行放得下，不会换行。 */
  @container (max-width: 520px) {
    .todo-due .due-full { display: none; }
    .todo-due .due-short { display: inline; }
  }
  /* 更窄时把 PO# 的下限略微放宽，优先保留生产方标签与展开箭头 */
  @container (max-width: 420px) {
    .todo-title { min-width: 4.5em; }
  }

  /* ================= 手机 / 平板自适应（媒体查询；统一放在样式末尾，避免被上面的同优先级规则覆盖） ================= */

  /* 平板（≤ 900px）：顶栏与内容留白收紧 */
  @media (max-width: 900px) {
    .topbar { padding: 10px 14px; }
    .container { padding: 20px 16px 72px; }
    .btn-ghost { padding: 6px 10px; }
    .ad-slot { padding: 0 16px; }
  }

  /* 手机（≤ 700px）：顶栏换行、录入区单列、订单详情与弹窗适配 */
  @media (max-width: 700px) {
    .topbar { flex-wrap: wrap; gap: 6px 10px; }
    .topbar .brand { font-size: 15px; }
    /* 顶栏按钮换到第二行、右对齐；手指点按区域靠右更顺手 */
    .topbar .user-area { width: 100%; flex-wrap: wrap; justify-content: flex-end; gap: 6px; }
    .btn-ghost { padding: 6px 8px; font-size: 12.5px; }
    .container { padding: 14px 12px 64px; }
    .ad-slot { padding: 0 12px; margin-top: 10px; font-size: 12.5px; }

    /* 录入区：每个字段占满整行（币种 + 金额并排一行），按钮整行，避免横向挤压 */
    .add-row { gap: 8px; margin-bottom: 18px; }
    .add-row input,
    .add-row select,
    .add-row .customer-select,
    .add-row .customer-input,
    .add-row .due-input,
    .add-row .date-field { flex: 1 1 100%; max-width: 100%; }
    .add-row input.title-input,
    .add-row input.url-input { flex: 1 1 100%; }
    .add-row .currency-select { flex: 0 0 42%; max-width: 42%; }
    .add-row .amount-input { flex: 1 1 auto; max-width: none; }
    .add-row .btn-add { flex: 1 1 100%; padding: 12px 18px; }

    /* 订单行：留白与展开区缩进收紧，把宽度留给 PO# 与标签 */
    .todo-header { padding: 12px; gap: 6px; }
    /* 手机端交期**必须显示**：一行放不下完整日期时只显示「月/日」（不显示年份），不换行 */
    .todo-due .due-full { display: none; }
    .todo-due .due-short { display: inline; }
    .todo-body-inner { padding: 12px 12px 14px 12px; }
    .producer-select { max-width: 100%; }
    /* 备注区：状态提示单独一行，按钮换行不挤压 */
    .body-actions { flex-wrap: wrap; }
    .body-actions .save-status { width: 100%; margin-right: 0; order: 3; }

    /* 弹窗：贴边显示、内容超高时内部滚动（键盘弹出也能操作） */
    .modal-mask { padding: 10px; align-items: flex-start; }
    .modal { max-width: 100%; max-height: 92vh; padding: 18px 14px; border-radius: 10px; }
    .modal h2 { font-size: 17px; margin-bottom: 14px; }
    .modal-actions { flex-wrap: wrap; }
    .mention-picker { min-width: 0; max-width: calc(100vw - 40px); }

    /* 成员管理：成员区块改为上下堆叠，权限开关允许换行 */
    .user-row { flex-direction: column; align-items: stretch; gap: 8px; }
    .user-row-actions { width: 100%; flex-wrap: wrap; justify-content: space-between; }
    .order-perm-col { width: 100%; }
    .order-perm, .order-perm-static { white-space: normal; }
    .user-row-btns { flex-direction: row; }
    .user-row-btns button { width: auto; }
    .customer-add-row { flex-wrap: wrap; }
    .customer-add-row select { flex: 1 1 100%; }

    /* 表单控件字号 16px：iOS 聚焦时不会自动放大页面 */
    input, textarea, select,
    .add-row input, .add-row select, .note-input,
    .customer-select, .customer-input, .status-select, .producer-select { font-size: 16px; }
  }

  /* 小屏手机（≤ 420px）：进一步压缩留白，按钮整行更好点按 */
  @media (max-width: 420px) {
    .topbar { padding: 10px; }
    .container { padding: 12px 10px 60px; }
    .section-title { margin: 14px 0 8px; }
    .empty { padding: 40px 12px; }
    .todo-header { padding: 10px; }
    .load-more-btn { width: 100%; }
  }

</style>
</head>
<body>
  <div class="topbar">
    <div class="brand">
      <span id="siteName">${j(p)}</span>
      <span id="teamBadge" style="display:none"></span>
      <button class="btn-renew" id="btnSubscribe" style="display:none">订阅</button>
    </div>
    <div class="user-area">
      <!-- 站内消息：登录名左侧的红色数字角标（数字 = 未读 @ 次数，>9 显示 9+） -->
      <span class="mention-badge" id="mentionBadge" style="display:none" title="有人 @ 了你（点击查看）"></span>
      <span id="currentUser"></span>
      <button class="btn-ghost" id="btnChangePwd">修改密码</button>
      <button class="btn-ghost" id="btnSettings" style="display:none">团队设置</button>
      <button class="btn-ghost" id="btnManageUsers" style="display:none">成员管理</button>
      <button class="btn-ghost" id="btnProducers" style="display:none">生产方管理</button>
      <button class="btn-ghost" id="btnCustomers" style="display:none">客户管理</button>
      <button class="btn-ghost" id="btnLogout">退出</button>
    </div>
  </div>
${s}

  <div class="container">
    <div class="add-row"${m?' style="display:none"':""}>
      <select id="newCustomer" class="customer-select">
        <option value="">选择客户</option>
      </select>
      <input type="text" id="newTitle" class="title-input" placeholder="输入订单号..." maxlength="200">
      <div class="date-field">
        <input type="date" id="newDueDate" class="due-input" title="交期（yyyy/mm/dd）" placeholder="yyyy/mm/dd">
        <span class="date-ph">yyyy/mm/dd</span>
      </div>
      <select id="newCurrency" class="currency-select" title="币种">
        <option value="USD" selected>美元</option>
        <option value="CNY">人民币</option>
      </select>
      <input type="number" id="newAmount" class="amount-input" placeholder="金额" min="0" step="0.01">
      <input type="url" id="newOrderUrl" class="url-input" placeholder="订单文件链接 http://…" maxlength="500">
      <button class="btn-add" id="btnAdd">添加</button>
    </div>
    <div id="listArea"></div>
  </div>



  <!-- 修改密码弹窗 -->
  <div class="modal-mask" id="pwdModal">
    <div class="modal">
      <h2>修改密码</h2>
      <div class="field">
        <label>原密码</label>
        <input type="password" id="oldPwd" placeholder="请输入原密码">
      </div>
      <div class="field">
        <label>新密码</label>
        <input type="password" id="newPwd" placeholder="请输入新密码">
      </div>
      <div class="msg" id="pwdMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="pwdModal">取消</button>
        <button class="btn-primary-sm" id="btnSavePwd">保存</button>
      </div>
    </div>
  </div>

  <!-- 成员管理弹窗 -->
  <div class="modal-mask" id="usersModal">
    <div class="modal">
      <h2>成员管理</h2>
      <!-- 试用版数量限制提示（成员最多 2 个；订阅专业版后解除限制） -->
      <div class="trial-limit-hint" id="userTrialHint" style="display:none"></div>
      <div class="field">
        <label>新增成员</label>
        <input type="text" id="newUserName" placeholder="用户名" style="margin-bottom:8px">
        <input type="password" id="newUserPwd" placeholder="密码" style="margin-bottom:8px">
        <input type="text" id="newUserPosition" placeholder="职位（手动输入，如：业务员 / 采购 / 主管）" maxlength="20" style="width:100%;padding:9px 12px;border:1px solid #e0e0dc;border-radius:6px;font-size:14px;background:#fff;color:#37352f;outline:none">
        <div class="order-perm-hint" style="margin-top:6px">新增成员统一为普通成员：权限1「添加订单」自动（在下方「可录入订单客户列表」中分配客户后即可录入订单）；「是否可查看全部订单」也**自动**（默认「是」= 可查看本团队全部订单；在下方「可查看客户列表」中选择 N 个客户后自动变为「否」= 可查看 N 个客户）/ 权限2「查看客户订单」/ 权限3「下生产订单」/ 权限4「查看生产订单」/ 权限5「更新订单状态」（= 是 时订单列表与团队管理员相同）/ 权限6「下脱敏订单」（= 是 时可点击订单号右侧的「回形针」补填脱敏订单文件链接，**默认「无」**）/ 权限7「添加出货日期」（= 是 时可点击「交期」右侧的灰色空白区块添加出货日期，**默认「无」**）在下方成员列表中逐个设置</div>
      </div>
      <button class="btn-primary-sm" id="btnAddUser" style="width:100%">添加成员</button>
      <div class="msg" id="userMsg"></div>
      <div class="divider"></div>
      <div class="section-title" style="margin-top:0">成员列表</div>
      <div class="user-list" id="userList"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="usersModal">关闭</button>
      </div>
    </div>
  </div>

  <!-- 指定生产方弹窗（管理员把待办改为「进行中」时使用） -->
  <div class="modal-mask" id="producerPickModal">
    <div class="modal">
      <h2>指定生产方</h2>
      <div class="field">
        <label>生产方（来自「生产方管理」）</label>
        <select id="pickProducerSelect" style="width:100%;padding:9px 12px;border:1px solid #e0e0dc;border-radius:6px;font-size:14px;background:#fff;color:#37352f;outline:none">
          <option value="">请选择生产方</option>
        </select>
      </div>
      <div class="msg" id="pickProducerMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" id="btnCancelPickProducer">取消</button>
        <button class="btn-primary-sm" id="btnConfirmPickProducer">确定并改为进行中</button>
      </div>
    </div>
  </div>

  <!-- 修改 PO# / 交期 / 金额弹窗（管理员，仅「待确认」的待办） -->
  <div class="modal-mask" id="dueAmountModal">
    <div class="modal">
      <h2>修改 PO# / 交期 / 金额 / 文件链接</h2>
      <div class="field">
        <label>PO#（主题）</label>
        <input type="text" id="editTitle" maxlength="100" placeholder="请输入 PO# / 主题">
      </div>
      <div class="field">
        <label>交期</label>
        <div class="date-field">
          <input type="date" id="editDueDate" title="交期（yyyy/mm/dd）" placeholder="yyyy/mm/dd">
          <span class="date-ph">yyyy/mm/dd</span>
        </div>
      </div>
      <div class="field">
        <label>金额</label>
        <input type="number" id="editAmount" min="0" step="0.01" placeholder="请输入金额">
      </div>
      <div class="field">
        <label>订单文件链接</label>
        <input type="url" id="editOrderUrl" maxlength="500" placeholder="http://…（留空则清除链接）">
      </div>
      <div class="field">
        <label>采购文件链接</label>
        <input type="url" id="editPurchaseUrl" maxlength="500" placeholder="http://…（留空则清除链接）">
      </div>
      <div class="msg" id="dueAmountMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="dueAmountModal">取消</button>
        <button class="btn-primary-sm" id="btnSaveDueAmount">保存</button>
      </div>
    </div>
  </div>

  <!-- 添加采购文件链接弹窗（订单行上黄色「自产单 / 外购单」标签：有「生产单下单权限」的成员可点击补填） -->
  <div class="modal-mask" id="purchaseUrlModal">
    <div class="modal">
      <h2>添加采购文件链接</h2>
      <div class="field">
        <label>订单</label>
        <input type="text" id="purchaseTodoTitle" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>采购文件链接</label>
        <input type="url" id="purchaseLinkInput" maxlength="500" placeholder="http://…（须以 http:// 或 https:// 开头）">
      </div>
      <div class="msg" id="purchaseUrlMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="purchaseUrlModal">取消</button>
        <button class="btn-primary-sm" id="btnSavePurchaseUrl">保存</button>
      </div>
    </div>
  </div>

  <!-- 添加「脱敏订单文件链接」弹窗（订单号右侧的灰色「回形针」：
       有「是否可下脱敏订单」权限的成员可点击补填；已有链接时回形针只用于打开链接） -->
  <div class="modal-mask" id="maskedUrlModal">
    <div class="modal">
      <h2>添加脱敏订单文件链接</h2>
      <div class="field">
        <label>订单</label>
        <input type="text" id="maskedTodoTitle" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>脱敏订单文件链接</label>
        <input type="url" id="maskedLinkInput" maxlength="500" placeholder="http://…（须以 http:// 或 https:// 开头）">
      </div>
      <div class="msg" id="maskedUrlMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="maskedUrlModal">取消</button>
        <button class="btn-primary-sm" id="btnSaveMaskedUrl">保存</button>
      </div>
    </div>
  </div>

  <!-- 添加「出货日期」弹窗（订单行「交期」右侧的灰色空白区块：
       有「是否可以添加出货日期」权限的成员可点击添加；添加后显示日期且不可再次点击） -->
  <div class="modal-mask" id="shipDateModal">
    <div class="modal">
      <h2>添加出货日期</h2>
      <div class="field">
        <label>订单</label>
        <input type="text" id="shipTodoTitle" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>出货日期</label>
        <div class="date-field">
          <input type="date" id="shipDateInput" title="出货日期（yyyy/mm/dd）" placeholder="yyyy/mm/dd">
          <span class="date-ph">yyyy/mm/dd</span>
        </div>
      </div>
      <div class="msg" id="shipDateMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="shipDateModal">取消</button>
        <button class="btn-primary-sm" id="btnSaveShipDate">保存</button>
      </div>
    </div>
  </div>

  <!-- 生产方管理弹窗 -->
  <div class="modal-mask" id="producersModal">
    <div class="modal">
      <h2>生产方管理</h2>
      <!-- 试用版数量限制提示（生产方最多 1 个；订阅专业版后解除限制） -->
      <div class="trial-limit-hint" id="producerTrialHint" style="display:none"></div>
      <div class="field">
        <label>用户名</label>
        <input type="text" id="newProducerShort" placeholder="请输入用户名（同时作为登录名）" maxlength="30">
      </div>
      <div class="field">
        <label>密码</label>
        <input type="password" id="newProducerPwd" placeholder="请输入登录密码（可用下方「重置密码」修改）" maxlength="50">
      </div>
      <div class="field">
        <label>生产方性质</label>
        <select class="producer-nature" id="newProducerNature">
          <option value="self" selected>自产</option>
          <option value="purchased">外购</option>
        </select>
      </div>
      <div class="field">
        <label>说明</label>
        <textarea id="newProducerDesc" placeholder="请输入说明" rows="3" maxlength="200"></textarea>
      </div>
      <button class="btn-primary-sm" id="btnAddProducer" style="width:100%">添加生产方（同时创建登录账号）</button>
      <div class="msg" id="producerMsg"></div>
      <div class="divider"></div>
      <div class="section-title" style="margin-top:0">生产方列表</div>
      <div class="producer-list" id="producerList"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="producersModal">关闭</button>
      </div>
    </div>
  </div>

  <!-- 客户管理弹窗（全局客户列表；客户可用该用户名/密码登录，只看本客户的待办） -->
  <div class="modal-mask" id="customersModal">
    <div class="modal">
      <h2>客户管理</h2>
      <!-- 试用版数量限制提示（客户最多 1 个；订阅专业版后解除限制） -->
      <div class="trial-limit-hint" id="customerTrialHint" style="display:none"></div>
      <div class="field">
        <label>用户名</label>
        <input type="text" id="newCustomerName" placeholder="请输入用户名（同时作为客户名称）" maxlength="60">
      </div>
      <div class="field">
        <label>密码</label>
        <input type="password" id="newCustomerPwd" placeholder="请输入登录密码（可用下方「重置密码」修改）" maxlength="50">
      </div>
      <div class="field">
        <label>说明</label>
        <textarea id="newCustomerDesc" placeholder="请输入说明" rows="3" maxlength="200"></textarea>
      </div>
      <button class="btn-primary-sm" id="btnAddCustomer" style="width:100%">添加客户（同时创建登录账号）</button>
      <div class="msg" id="customerListMsg"></div>
      <div class="divider"></div>
      <div class="section-title" style="margin-top:0">客户列表</div>
      <div class="producer-list" id="customerListRows"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="customersModal">关闭</button>
      </div>
    </div>
  </div>

  <!-- 团队设置弹窗 -->
  <div class="modal-mask" id="settingsModal">
    <div class="modal">
      <h2>团队设置</h2>
      <div class="field">
        <label>团队名称</label>
        <input type="text" id="siteNameInput" placeholder="请输入团队名称" maxlength="30">
      </div>
      <div class="field">
        <label>版本 / 有效期</label>
        <input type="text" id="teamExpireInput" readonly style="background:#f7f7f5">
      </div>
      <div class="msg" id="settingsMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="settingsModal">取消</button>
        <button class="btn-primary-sm" id="btnSaveSettings">保存</button>
      </div>
    </div>
  </div>

  <!-- 订阅 / 续费弹窗（团队管理员）：
       试用账号 → 选择套餐后提交「订阅申请」，由超级管理员开通为专业用户；
       专业版账号 → 提交「续费申请」延长有效期。
       订阅时限与价格保持不变；收款方式已取消（原「微信支付」界面演示已移除），统一由超级管理员开通。 -->
  <div class="modal-mask" id="subscribeModal">
    <div class="modal">
      <h2 id="subscribeTitle">订阅专业版</h2>
      <div class="field">
        <label>团队</label>
        <input type="text" id="subTeam" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>当前状态</label>
        <input type="text" id="subCurrent" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>选择订阅时长</label>
        <div class="plan-list" id="subPlanList"></div>
      </div>
      <div class="field">
        <label>联系方式（选填）</label>
        <input type="text" id="subContact" maxlength="50" placeholder="便于超级管理员与您联系">
      </div>
      <div class="field">
        <label>留言（选填）</label>
        <textarea id="subNote" rows="2" maxlength="200" placeholder="例如：开票信息等"></textarea>
      </div>
      <div class="renew-hint" id="subHint"></div>
      <div class="msg" id="subMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="subscribeModal">关闭</button>
        <button class="btn-primary-sm" id="btnSubmitSubscribe">提交订阅申请</button>
      </div>
    </div>
  </div>

  <!-- 重置密码弹窗 -->
  <div class="modal-mask" id="resetPwdModal">

    <div class="modal">
      <h2>重置密码</h2>
      <div class="field">
        <label>成员</label>
        <input type="text" id="resetPwdUser" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>新密码</label>
        <input type="password" id="resetPwdValue" placeholder="请输入新密码">
      </div>
      <div class="msg" id="resetPwdMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="resetPwdModal">取消</button>
        <button class="btn-primary-sm" id="btnSaveResetPwd">确定重置</button>
      </div>
    </div>
  </div>

  <!-- 编辑弹窗（成员备注 / 生产方说明 / 客户说明 共用） -->
  <div class="modal-mask" id="remarkModal">
    <div class="modal">
      <h2 id="remarkTitle">备注</h2>
      <div class="field">
        <label id="remarkUserLabel">成员</label>
        <input type="text" id="remarkUser" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label id="remarkFieldLabel">备注</label>
        <textarea id="remarkText" placeholder="请输入备注（留空则清除备注）" rows="3" maxlength="200"></textarea>
      </div>
      <div class="msg" id="remarkMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="remarkModal">取消</button>
        <button class="btn-primary-sm" id="btnSaveRemark">保存</button>
      </div>
    </div>
  </div>

  <!-- 站内消息面板：列出「@ 我的」提醒（点条目可展开对应待办） -->
  <div class="modal-mask" id="mentionsModal">
    <div class="modal">
      <h2>站内消息（@我的）</h2>
      <div class="mention-list" id="mentionList"></div>
      <div class="msg" id="mentionMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="mentionsModal">关闭</button>
      </div>
    </div>
  </div>

<script>
  let currentUser = null;

  let todos = [];
  let isViewer = false;
  let isRestricted = false; // 生产部（仅看授权生产方的待办）
  let isProducer = false;   // 生产方账号（仅看指定给自己的待办）
  let isCustomer = false;   // 客户账号（仅看本客户的待办）
  let isObserver = false;   // 业务主管 / 生产部 / 生产方 / 客户（只读）
  let isTeamAdmin = false;  // 团队管理员（团队账号本人）
  let isProTeam = false;    // 专业版（已订阅且在有效期内）：数量不受限、页面顶部无广告
  let isTrialTeam = false;  // 试用团队（未订阅 / 订阅已到期）：功能与专业版基本相同，仅数量受限
                            //（成员 2 个 / 生产方 1 个 / 客户 1 个）+ 页面顶部显示广告位
  let teamIsPro = false;    // 所在团队是否在「专业版有效期内」：专业版改为「进行中」必须先指定生产方；试用团队无需（没有「生产方管理」）
  let isSuperadmin = false; // 超级管理员：只管理团队用户，不使用业务页面
  let isSuperviewer = false; // 总经理（拥有团队管理员的待办功能，但没有管理类功能）
  let isDeptManager = false; // 部门主管（同总经理；另有「是否可查看客户订单 / 采购订单」两个开关）
  let isTodoManager = false; // 团队管理员 / 总经理 / 部门主管：可管理待办（生产方、删除、编辑等）
  let canChangeStatus = false; // 可改变待办状态：仅团队管理员 / 总经理（部门主管为只读状态徽章，与业务部一致）
  // 普通成员的新权限「是否可查看全部订单」（**默认「是」**）：= 是 → 清单显示本团队全部订单
  //（他人录入的订单为只读：不能改状态 / 不能删除，但可添加备注）；= 否 → 只能查看自己录入的订单
  let canViewAllOrders = false;
  let showAllUsers = false; // 团队管理员 / 总经理 / 观察类：显示全部用户的待办
  // 「已完成」折叠显示：默认只渲染 5 条，点「加载更多」每次再多显示 20 条（避免一次渲染太多导致卡顿）
  const DONE_PAGE_STEP = 20;
  let doneVisible = 5;

  // ---------- 工具 ----------
  function fmtDate(iso) {
    const d = new Date(iso);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }
  function fmtDateTime(iso) {
    const d = new Date(iso);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return y + '-' + m + '-' + day + ' ' + hh + ':' + mm;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&': '\\u0026amp;', '<': '\\u0026lt;', '>': '\\u0026gt;',
      '"': '\\u0026quot;', "'": '\\u0026#39;'
    }[c]));
  }
  async function api(url, opts) {
    let res;
    try {
      res = await fetch(url, opts);
    } catch (e) {
      // 网络层失败（服务未启动 / 地址不可达 / 连接被中断）：给出可操作的提示，
      // 而不是只显示浏览器原始的「Failed to fetch」
      throw new Error('网络请求失败：无法连接服务器。请确认服务已启动并访问正确地址（本地调试请先运行 npm run dev → http://localhost:8787；线上请检查网络与部署状态）');
    }
    if (res.status === 401) { location.href = '/'; throw new Error('未登录'); }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || '请求失败');
    return data;
  }

  // ---------- 试用版数量限制（成员 / 生产方 / 客户） ----------
  // 试用版（未订阅 / 订阅已到期）功能与专业版基本相同，仅限制数量：
  //   成员最多 2 个、生产方最多 1 个、客户最多 1 个；订阅（专业版）后解除限制
  //   （/api/me 不再返回 trialLimits），同时页面顶部的广告位也不再显示。
  const TRIAL_LIMIT_TEXT = { members: '成员', producers: '生产方', customers: '客户' };

  // 重新拉取试用版数量（打开管理弹窗 / 新增 / 删除后调用）：仅团队账号本人需要
  async function refreshTrialLimits() {
    if (!isTeamAdmin || !currentUser) return;
    try {
      const me = await api('/api/me');
      currentUser.trialLimits = me.trialLimits || null;
    } catch (e) { /* 忽略：保留上次结果 */ }
  }

  // 应用试用版数量限制：显示提示；达到上限时禁用对应的「添加」按钮
  function applyTrialLimit(kind, hintId, btnId) {
    const lim = (currentUser && currentUser.trialLimits && currentUser.trialLimits[kind]) || null;
    const btn = document.getElementById(btnId);
    const hint = document.getElementById(hintId);
    if (btn) { btn.disabled = false; btn.style.opacity = ''; btn.style.cursor = ''; btn.title = ''; }
    if (hint) { hint.style.display = 'none'; hint.className = 'trial-limit-hint'; hint.textContent = ''; }
    if (!lim) return;
    const label = TRIAL_LIMIT_TEXT[kind] || kind;
    const full = lim.used >= lim.max;
    if (hint) {
      hint.style.display = '';
      hint.className = full ? 'trial-limit-hint full' : 'trial-limit-hint';
      hint.textContent = '试用版最多可添加 ' + lim.max + ' 个' + label +
        '（已添加 ' + lim.used + ' 个）：订阅专业版后可解除数量限制，并移除页面顶部广告。';
    }
    if (btn && full) {
      btn.disabled = true;
      btn.style.opacity = '0.5';
      btn.style.cursor = 'not-allowed';
      btn.title = '试用版最多可添加 ' + lim.max + ' 个' + label + '：订阅专业版后可解除数量限制';
    }
  }

  // ---------- 初始化 ----------
  async function init() {
    try {
      currentUser = await api('/api/me');
    } catch (e) { return; }
    // 超级管理员不使用业务页面，直接进入「团队用户管理」控制台
    if (currentUser.role === 'superadmin') { location.href = '/admin'; return; }
    isViewer = currentUser.role === 'viewer';
    isRestricted = currentUser.role === 'restricted';
    isProducer = currentUser.role === 'producer';
    isCustomer = currentUser.role === 'customer';
    isObserver = isViewer || isRestricted || isProducer || isCustomer;
    isTeamAdmin = currentUser.role === 'team';
    isProTeam = !!(isTeamAdmin && currentUser.pro);   // 专业版有效期内
    isTrialTeam = isTeamAdmin && !isProTeam;          // 试用账号（无期限 / 订阅已到期）
    // 所在团队是否专业版有效期内：团队账号本人用自己的订阅状态；成员（总经理等）用 /api/me 返回的 teamPro
    teamIsPro = isTeamAdmin ? isProTeam : !!currentUser.teamPro;
    isSuperviewer = currentUser.role === 'superviewer';
    isDeptManager = currentUser.role === 'deptmanager';
    // 权限5「是否可以更新订单状态」= 有 的普通成员：订单列表显示与功能与团队管理员相同
    const isStatusUpdater = !!currentUser.canUpdateStatus &&
      (currentUser.role === 'editor' || currentUser.role === 'member');
    isTodoManager = isTeamAdmin || isSuperviewer || isDeptManager || isStatusUpdater;
    // 待办状态的可编辑范围：团队管理员 / 总经理 / 权限5=有 的成员；部门主管与普通成员一样只读显示状态
    canChangeStatus = isTeamAdmin || isSuperviewer || isStatusUpdater;
    // 显示全部用户待办的场景：团队管理员 / 总经理 / 观察类角色（业务主管 / 生产部 / 生产方 / 客户）。
    // 注：普通成员（editor / member）只能看到自己的订单，因此不在此列。
    showAllUsers = isTodoManager || isObserver;
    document.getElementById('currentUser').textContent = currentUser.username;

    if (isTeamAdmin) {
      // 「团队设置」（团队名称）对团队账号（含试用）开放
      document.getElementById('btnSettings').style.display = '';
      // 「成员管理 / 生产方管理 / 客户管理」：**试用版与专业版都开放** ——
      // 试用版仅限制数量（成员 2 个 / 生产方 1 个 / 客户 1 个），订阅专业版后解除限制。
      document.getElementById('btnManageUsers').style.display = '';
      document.getElementById('btnProducers').style.display = '';
      document.getElementById('btnCustomers').style.display = '';
    }
    // 顶栏团队徽章：团队账号显示「试用（无期限）/ 专业版有效期」，成员显示所属团队
    renderTeamBadge();
    // 站内消息：顶栏登录名左侧的角标（未读 > 0 红色 / = 0 但有历史提醒时灰色「0」），并每 60 秒刷新一次
    setMentionBadge(currentUser.mentionsUnread || 0, currentUser.mentionsTotal || 0);
    setInterval(loadMentions, 60000);
    // 预加载生产方列表：团队管理员/总经理的下拉需要，其他角色也会用它兜底显示待办卡片上的生产方简称
    await ensureProducers();
    // 普通成员（原业务部）的新权限「是否可查看全部订单」（**默认「是」**）：= 是 → 清单显示
    // 本团队全部订单（他人录入的订单为只读：不能改状态 / 不能删除，但可添加备注）；= 否 → 只看自己的
    // 注：与「客户列表」无关（客户只决定「添加新订单」录入区是否显示）
    canViewAllOrders = (currentUser.role === 'editor' || currentUser.role === 'member') &&
      currentUser.canViewAllOrders !== false;
    // 「添加新订单」录入区（录单权限）：
    //   · 服务端渲染时已按权限决定是否输出 display:none —— 无录单权限的用户（专业版团队管理员 /
    //     无客户的成员 / 观察类等）登录瞬间**不会再闪现**录入框；
    //   · 这里再按 /api/me 的最新结果同步一次，作为兜底（权限刚变更 / 页面被缓存等情况）。
    const addRowEl = document.querySelector('.add-row');
    if (addRowEl) {
      addRowEl.style.display = currentUser.canPlaceOrder ? '' : 'none';
    }

    // 日期框：自绘 yyyy/mm/dd 提示
    bindDateFields();

    await loadSettings();
    await loadCustomers();
    await loadTodos();
  }

  // 顶栏团队徽章（仅团队账号本人）：试用（无期限）/ 专业版有效期 / 订阅已到期 / 已停用
  // 团队成员（含生产方 / 客户）不显示该徽章——其团队名称统一显示在左上角
  function renderTeamBadge() {
    const el = document.getElementById('teamBadge');
    if (!el || !currentUser) return;
    let text = '';
    let cls = 'team-badge';
    if (isTeamAdmin) {
      // 团队名称已由左上角站点标题（#siteName）显示，徽章里不再重复，只显示状态 / 剩余天数
      if (currentUser.status === 'disabled') {
        text = '已停用';
        cls += ' over';
      } else if (isProTeam) {
        const days = daysLeft(currentUser.expiresAt);
        text = '专业版 · 有效期至 ' + ((currentUser.expiresAt || '').slice(0, 10) || '—') +
          (days >= 0 ? '（剩余 ' + days + ' 天）' : '');
        cls += (days >= 0 && days < 30) ? ' warn' : '';
      } else if (currentUser.status === 'expired') {
        // 专业版订阅已到期：自动回落为试用（受限）状态，仍可登录、可添加订单
        text = '订阅已到期（试用模式）';
        cls += ' warn';
      } else {
        text = '试用中（无期限）';
      }
    }
    // 团队成员 / 生产方 / 客户：不显示版本类型与有效期
    // （他们的团队名称已显示在左上角站点标题处，与团队账号本人一致）
    updateSubscribeButton();
    if (!text) { el.style.display = 'none'; return; }
    el.textContent = text;
    el.className = cls;
    el.style.display = '';
  }

  // 顶栏「订阅 / 续费」按钮：
  //   · 试用账号（未订阅 / 订阅已到期）：显示「订阅」——选择套餐提交订阅申请，由超级管理员开通为专业版；
  //   · 专业版账号：剩余不足 30 天时显示「续费」；
  //   · 已提交申请时按钮变为橙色提示态（文字改为「订阅申请已提交」/「续费申请已提交」）。
  function updateSubscribeButton() {
    const btn = document.getElementById('btnSubscribe');
    if (!btn || !currentUser) return;
    if (!isTeamAdmin || currentUser.status === 'disabled') {
      btn.style.display = 'none';
      return;
    }
    const days = daysLeft(currentUser.expiresAt);
    const submitted = !!(currentUser.subscribeRequest && currentUser.subscribeRequest.at);
    const expired = currentUser.status === 'expired';
    const isRenew = isProTeam && !expired;
    const need = !isProTeam || expired || (days >= 0 && days < 30) || submitted;
    if (!need) {
      btn.style.display = 'none';
      return;
    }
    const label = isRenew ? '续费' : '订阅';
    btn.textContent = submitted ? label + '申请已提交' : label;
    btn.className = submitted ? 'btn-renew submitted' : 'btn-renew';
    btn.title = submitted
      ? label + '申请已提交，等待超级管理员处理（点击可查看 / 修改）'
      : (isRenew
        ? '专业版剩余不足 30 天，点击选择套餐续费'
        : '试用版数量受限（成员 2 个 / 生产方 1 个 / 客户 1 个）且页面顶部含广告位；点击订阅升级为专业用户，即可解除限制并移除广告');
    btn.style.display = '';
  }

  // 客户输入框（仅团队成员录单时需要）：
  //   业务部等成员为「客户下拉」——选项即其「可录入订单客户列表」中自己被分配的客户；
  //   团队账号本人（团队管理员）固定不录入订单（试用版与专业版一致），因此录入区整体不显示，
  //   此处不再做任何替换。

  // 距到期天数（向上取整；已过期返回负数）
  function daysLeft(iso) {
    if (!iso) return -1;
    const end = new Date(iso).getTime();
    if (isNaN(end)) return -1;
    return Math.ceil((end - Date.now()) / 86400000);
  }

  // ---------- 加载站点 / 团队设置 ----------
  async function loadSettings() {
    try {
      const data = await api('/api/settings');
      const s = data.settings || {};
      // 左上角显示**所属团队名称**（团队账号本人与团队成员一致）；
      // 没有团队信息时（如历史数据 / 无团队账号）回退到全局网站名称
      const teamName = (currentUser && currentUser.teamName) || s.teamName || '';
      const name = teamName || s.siteName || '订单管理系统';
      document.getElementById('siteName').textContent = name;
      document.title = name;
    } catch (e) { /* 忽略 */ }
  }



  // ---------- 加载待办 ----------
  async function loadTodos() {
    const data = await api('/api/todos');
    todos = data.todos || [];
    render();
  }

  function statusOf(t) {
    return t.status || (t.done ? 'done' : 'pending');
  }

  // ---------- 日期框（自绘 yyyy/mm/dd 提示，取代浏览器原生的 yyyy/mm/日） ----------
  function syncDateField(el) {
    if (el) el.classList.toggle('has-value', !!el.value);
  }
  function bindDateFields() {
    document.querySelectorAll('.date-field input[type="date"]').forEach(el => {
      ['input', 'change', 'blur'].forEach(ev => el.addEventListener(ev, () => syncDateField(el)));
      syncDateField(el);
    });
  }

  function render() {
    const area = document.getElementById('listArea');
    if (!todos.length) {
      area.innerHTML = '<div class="empty">目前尚未录入订单！</div>';
      return;
    }
    const pending = todos.filter(t => statusOf(t) === 'pending');
    const doing = todos.filter(t => statusOf(t) === 'doing');
    const done = todos.filter(t => statusOf(t) === 'done');
    let html = '';
    if (pending.length) {
      html += '<div class="section-title">待确认 (' + pending.length + ')</div>';
      html += pending.map(renderItem).join('');
    }
    if (doing.length) {
      html += '<div class="section-title">进行中 (' + doing.length + ')</div>';
      html += doing.map(renderItem).join('');
    }
    if (done.length) {
      const shownDone = done.slice(0, doneVisible);
      const restDone = done.length - shownDone.length;
      html += '<div class="section-title">已完成 (' + done.length + ')</div>';
      html += shownDone.map(renderItem).join('');
      if (restDone > 0) {
        html += '<div class="load-more-row">' +
          '<button class="load-more-btn" id="btnLoadMoreDone">加载更多（还有 ' + restDone + ' 条）</button>' +
          '</div>';
      }
    }
    area.innerHTML = html;
    bindEvents();
  }

  // 从文本中提取第一个网址（支持 http(s):// 或 www. 开头）
  function extractUrl(text) {
    const s = String(text);
    const m = s.match(/https?:\\/\\/[^\\s]+/i) || s.match(/www\\.[^\\s]+/i);
    return m ? m[0] : null;
  }
  // 规范化网址（补全协议）
  function normalizeUrl(text) {
    const s = String(text).trim();
    if (/^www\\./i.test(s)) return 'https://' + s;
    return s;
  }
  // 备注正文：先转义，再把「@用户名」渲染为高亮小标签（站内消息提及）
  function noteTextHtml(text) {
    return esc(text).replace(/@[A-Za-z0-9_.-]{3,20}/g, function (m) {
      return '<span class="mention-chip">' + m + '</span>';
    });
  }
  // 渲染备注列表（追加式，不可删除）
  function renderNotes(t) {
    const notes = Array.isArray(t.notes) ? t.notes : [];
    if (!notes.length) {
      return '<div class="note-empty">暂无备注</div>';
    }
    return notes.map(n => {
      const text = String(n.text || '');
      const url = extractUrl(text);
      let body;
      if (url) {
        // 去掉网址后的剩余文字
        const rest = text.replace(url, '').trim();
        const restHtml = rest
          ? \`<div class="note-text">\${noteTextHtml(rest)}</div>\` : '';
        body = \`\${restHtml}<a class="note-link" href="\${esc(normalizeUrl(url))}" target="_blank" rel="noopener noreferrer">🔗 点击打开附件</a>\`;
      } else {
        body = \`<div class="note-text">\${noteTextHtml(text)}</div>\`;
      }
      return \`
      <div class="note-item">
        <div class="note-meta">
          <span class="note-author">\${esc(n.author || '')}</span>
          <span class="note-time">\${fmtDateTime(n.createdAt)}</span>
        </div>
        \${body}
      </div>\`;
    }).join('');
  }



  const STATUS_TEXT = { pending: '待确认', doing: '进行中', done: '已完成' };

  // 交期颜色（三种状态一致）：
  //   当前日期 ≥ 交期（已到期/逾期）→ 红
  //   剩余 0~2 周（0 < 剩余天数 ≤ 14）→ 黄
  //   剩余超过 2 周（> 14 天）→ 绿
  function dueClassOf(dueDate) {
    if (!dueDate) return '';
    const due = new Date(String(dueDate) + 'T00:00:00');
    if (isNaN(due.getTime())) return '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.round((due.getTime() - today.getTime()) / 86400000);
    if (days <= 0) return ' due-overdue';
    if (days <= 14) return ' due-soon';
    return ' due-far';
  }

  // 交期的「月/日」短格式（手机端位置不够时只显示月/日，保证一行显示不换行）
  //   '2026-09-23' → '09/23'；无法解析时原样返回
  // 注：本段代码位于模板字符串内，正则中的反斜杠需写成「\\」（如 \\d）
  function dueShortText(dueDate) {
    const s = String(dueDate || '');
    const m = s.match(/^(\\d{4})-(\\d{2})-(\\d{2})$/);
    if (m) return m[2] + '/' + m[3];
    const d = new Date(s);
    if (isNaN(d.getTime())) return s;
    return String(d.getMonth() + 1).padStart(2, '0') + '/' +
      String(d.getDate()).padStart(2, '0');
  }

  // 币种符号：人民币 = ¥；美元（含历史数据未填币种）= $
  function currencySymbolOf(currency) {
    return currency === 'CNY' ? '¥' : '$';
  }

  // 「脱敏订单文件链接」的回形针图标（订单号右侧；颜色由 CSS 的 color 控制：
  //   浅灰 = 暂无链接，蓝色 = 已有链接可点击打开）
  const MASK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"' +
    ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>' +
    '</svg>';

  function renderItem(t) {
    const ownerAttr = t.owner ? \` data-owner="\${esc(t.owner)}"\` : '';
    // 录入者标签：
    //   · 普通成员：清单里**每条订单都显示录入者**（含自己的订单）；
    //   · 其他角色：只在能看他人订单时显示（团队管理员 / 总经理 / 观察类），自己的订单不显示用户名。
    const isEditorView = currentUser.role === 'editor' || currentUser.role === 'member';
    const showOwnerTag = !!t.owner &&
      (isEditorView || (showAllUsers && t.owner !== currentUser.username));
    const ownerTag = showOwnerTag
      ? \`<div class="todo-owner" title="录入者：\${esc(t.owner)}">\${esc(t.owner)}</div>\` : '';
    const st = statusOf(t);
    const doneCls = st === 'done' ? ' done' : '';
    // 管理员 + 待确认：交期 / 金额可直接点击修改
    const canEditDueAmount = isTodoManager && st === 'pending';
    const customerTag = t.customer
      ? \`<div class="todo-customer" title="客户：\${esc(t.customer)}">\${esc(t.customer)}</div>\` : '';
    const dueTag = t.dueDate
      ? '<div class="todo-due' + dueClassOf(t.dueDate) + (canEditDueAmount ? ' editable' : '') + '"' +
        (canEditDueAmount ? ' data-editdue="' + esc(t.id) + '"' : '') +
        ' title="交期 ' + esc(t.dueDate) + (canEditDueAmount ? '（点击修改）' : '') + '">' +
        // 宽屏显示完整日期（yyyy-mm-dd）；窄屏（手机）由 CSS 切换为「月/日」，
        // 确保交期在手机上**始终可见且一行显示不换行**
        '<span class="due-full">' + esc(t.dueDate) + '</span>' +
        '<span class="due-short">' + esc(dueShortText(t.dueDate)) + '</span>' +
        '</div>'
      : (canEditDueAmount
        ? '<div class="todo-due editable" data-editdue="' + esc(t.id) + '" title="点击设置交期">设置交期</div>'
        : '');
    // 出货日期区块（**「交期」区块右侧，长度与交期一致**）：
    //   · 已填写（t.shipDate）：灰色区块显示出货日期 —— **不可再点击**（不能重复添加）；
    //   · 未填写：灰色**空白区块** —— 有权限「是否可以添加出货日期」的成员（团队管理员固定有；
    //     普通成员**默认「无」**，由团队管理员在「成员管理」的成员列表中逐个开关）点击弹窗添加；
    //     **无该权限的用户不能点击**（区块仅作占位显示）。
    const hasShipDate = !!t.shipDate;
    const canAddShip = !hasShipDate && !!currentUser.canAddShipDate;
    const shipTag = hasShipDate
      ? '<div class="todo-ship ship-filled" title="出货日期 ' + esc(t.shipDate) + '">' +
        esc(t.shipDate) + '</div>'
      : '<div class="todo-ship' + (canAddShip ? ' ship-addable' : '') + '"' +
        (canAddShip ? ' data-addship="' + esc(t.id) + '"' : '') +
        ' title="' + (canAddShip
          ? '点击添加出货日期'
          : '未填写出货日期（需「是否可以添加出货日期」权限）') + '">' +
        '<span class="todo-ship-ph">0000-00-00</span></div>';
    // 生产方标签（只显示简称）：历史数据可能只有 producerId，用生产方列表兜底
    const producerShort = t.producerName ||
      (t.producerId ? ((producersCache.find(p => p.id === t.producerId) || {}).username || '') : '');
    // 订单行标签文字：按该订单生产方的「生产方性质」显示「自产单 / 外购单」
    // （生产方名称放在悬浮提示里；生产方已被删除、取不到性质时回退为显示名称）
    const producerInfo = t.producerId
      ? (producersCache.find(p => p.id === t.producerId) || null)
      : null;
    const producerLabel = producerShort
      ? (producerInfo
        ? (producerInfo.nature === 'purchased' ? '外购单' : '自产单')
        : producerShort)
      : '';
    // 已填「采购文件链接」的灰色标签（权限4「是否可以查看生产订单」= 是时）：
    // 团队管理员 / 总经理 / 部门主管（历史账号，按「是否可查看采购订单」开关）以及
    // 权限4 = 是 的普通成员，都可点击直接打开采购文件
    const canOpenPurchase = currentUser.canViewPurchaseOrder !== undefined
      ? !!currentUser.canViewPurchaseOrder
      : (isTodoManager || !!currentUser.canPurchase); // 兜底：与历史行为一致
    const producerTagAsLink = canOpenPurchase && !!t.purchaseUrl;
    // 未填写「采购文件链接」时：标签改用黄色色块，提示需要补齐采购文件
    const producerWarn = !t.purchaseUrl;
    // 黄色标签（权限3「是否可以下生产订单」= 有）可点击直接补填采购文件链接
    // （与权限1「添加订单」相互独立：只开录入不开采购时，黄色标签仅作提示）
    const canFillPurchase = producerWarn && !!currentUser.canPurchase;
    const producerTagCls = 'todo-producer' + (producerWarn ? ' todo-producer-warn' : '') +
      (canFillPurchase ? ' todo-producer-addable' : '');
    const producerNameTip = producerShort && producerShort !== producerLabel
      ? '（' + producerShort + '）' : '';
    const producerTag = producerLabel
      ? (producerTagAsLink
        ? '<a class="todo-producer todo-producer-link" href="' + esc(t.purchaseUrl) + '"' +
          ' target="_blank" rel="noopener noreferrer"' +
          ' title="' + esc(producerLabel) + ' ' + esc(producerNameTip) +
          '｜点击打开采购文件：' + esc(t.purchaseUrl) + '">' +
          esc(producerLabel) + '</a>'
        : '<div class="' + producerTagCls + '"' +
          (canFillPurchase ? ' data-addpurchase="' + esc(t.id) + '"' : '') +
          ' title="' + esc(producerLabel) + ' ' + esc(producerNameTip) +
          (producerWarn ? (canFillPurchase ? '｜点击添加采购文件链接' : '｜未填写采购文件链接') : '') + '">' +
          esc(producerLabel) + '</div>')
      : '';
    // 观察类用户不显示金额；管理员在「待确认」阶段可点击修改
    const curSymbol = currencySymbolOf(t.currency);
    const amountTag = !isObserver
      ? ((t.amount !== undefined && t.amount !== null && t.amount !== '')
        ? '<div class="todo-amount' + (canEditDueAmount ? ' editable' : '') + '"' +
          (canEditDueAmount ? ' data-editamount="' + esc(t.id) + '"' : '') +
          ' title="金额 ' + curSymbol + esc(t.amount) + (canEditDueAmount ? '（点击修改）' : '') + '">' +
          curSymbol + esc(t.amount) + '</div>'
        : (canEditDueAmount
          ? '<div class="todo-amount editable" data-editamount="' + esc(t.id) + '" title="点击设置金额">设置金额</div>'
          : ''))
      : '';

    // 生产方下拉（仅管理员）：待确认阶段即可直接指定；改为「进行中」前必须有值
    const producerOptions = producersCache.map(p =>
      '<option value="' + esc(p.id) + '"' + (t.producerId === p.id ? ' selected' : '') + '>' +
      esc(p.username) + '</option>').join('');
    // 生产方下拉（仅管理员/总经理、且仅「待确认」阶段显示）
    // 「进行中 / 已完成」已有灰色生产方标签，无需保留下拉（避免误改）
    // 生产方下拉（仅管理员/总经理、且仅「待确认」阶段显示）
    // 「进行中 / 已完成」已有灰色生产方标签，无需保留下拉（避免误改）
    // 试用版同样有「生产方管理」（最多 1 个，订阅后解除限制）：
    // 列表中没有任何生产方时不显示无效的下拉，改用下方提示引导去添加生产方
    // （历史上已存在生产方时仍可正常指定）
    const showProducerSelect = isTodoManager && st === 'pending' &&
      !(isTrialTeam && !producersCache.length);
    const producerSelect = showProducerSelect
      ? '<select class="producer-select' + (t.producerId ? '' : ' unset') +
        '" data-producer-select="' + t.id + '" title="指定该待办的生产方">' +
        '<option value=""' + (t.producerId ? '' : ' selected') + '>' +
        (producersCache.length ? '选择生产方' : '请先添加生产方') + '</option>' +
        producerOptions + '</select>'
      : '';
    // 管理员/总经理：未指定生产方时给出提示（进行中/已完成阶段无下拉，需先改回待确认）
    const producerHint = (isTodoManager && !t.producerId)
      ? ((isTrialTeam && !producersCache.length)
        ? '<div class="producer-hint">尚无生产方：可点击顶部「生产方管理」添加（试用版最多 1 个生产方，订阅后可添加更多）。</div>'
        : (st === 'pending'
          ? '<div class="producer-hint">尚未指定生产方：可直接在上方标题行的「生产方」下拉中选择；改为「进行中」前必须指定。</div>'
          : '<div class="producer-hint">尚未指定生产方：请先将状态改回「待确认」，指定生产方后再改为「进行中」。</div>'))
      : '';
    // 状态展示：管理员用下拉可切换；其他用户用只读徽章


    // 状态展示：团队管理员 / 总经理用下拉可切换；其他用户（含部门主管、业务部）用只读徽章
    const statusEl = canChangeStatus
      ? \`<select class="status-select" data-status-select="\${t.id}">
           <option value="pending"\${st === 'pending' ? ' selected' : ''}>待确认</option>
           <option value="doing"\${st === 'doing' ? ' selected' : ''}>进行中</option>
           <option value="done"\${st === 'done' ? ' selected' : ''}>已完成</option>
         </select>\`
      : \`<span class="status-badge \${st}">\${STATUS_TEXT[st]}</span>\`;

    // 业务主管：待办本身只读（无删除按钮），但可添加备注
    // 已进入「进行中/已完成」状态的事件不可删除（含管理员，避免误删）
    // 是否本人录入的订单：普通成员在「客户列表为空 → 查看全部订单」时能看到他人的订单，
    // 这些订单在其清单里为只读（不能改状态 / 不能删除他人的订单）
    const isOwnOrder = !t.owner || t.owner === currentUser.username;
    // 「删除订单」的身份：待办管理者（团队管理员 / 总经理 / 部门主管）、订单本人；
    // 观察类角色（业务主管 / 生产部 / 生产方 / 客户）为只读，不显示删除按钮
    // 「添加备注」的身份：备注为**追加式**，任何用户都可为清单里可见的订单添加备注 ——
    //   观察类角色、待办管理者、订单本人，以及「是否可查看全部订单」= 是（默认）的普通成员
    //  （这类成员的清单里会显示本团队全部订单：只读，但可为他人的订单添加备注）
    const canAddNote = isObserver || isTodoManager || isOwnOrder || canViewAllOrders ||
      !!t.viewOnly; // viewOnly = 通过「可查看客户列表」可见的他人订单（只读但可追加备注）
    const canDelete = !isObserver && st === 'pending' && (isTodoManager || isOwnOrder);

    const delBtn = canDelete
      ? \`<button class="btn-danger" data-del="\${t.id}">删除订单</button>\`
      : '';
    // 已完成的事件不可再添加备注；其余可见订单都显示备注框
    const noteAddBlock = (st === 'done' || !canAddNote)
      ? ''
      : \`<div class="note-add">
              <textarea class="note-input" data-note-input="\${t.id}" placeholder="添加备注（添加后不可删除；输入 @ 可提醒团队成员）..."></textarea>
              <div class="body-actions">
                <span class="save-status" data-status="\${t.id}"></span>
                \${delBtn}
                <button class="btn-primary-sm" data-addnote="\${t.id}">添加备注</button>
              </div>
            </div>\`;



    // PO#（标题）可点击的链接：由「是否可查看客户订单」决定
    //   · 团队管理员 / 生产方 / 客户：可点击（历史行为不变）
    //   · 普通成员：按权限2「是否可以查看客户订单」（默认「无」）
    //   · 部门主管（历史账号）：按开关（未设置过默认可点击）
    //   · 业务主管 / 生产部 / 总经理：纯文本不可点击
    const canViewCustomer = currentUser.canViewCustomerOrder !== undefined
      ? !!currentUser.canViewCustomerOrder
      : !(isViewer || isRestricted); // 兜底：与历史行为一致
    const titleUrl = canViewCustomer ? (t.orderUrl || '') : '';
    const titleHtml = titleUrl
      ? '<a class="todo-title-link" href="' + esc(titleUrl) + '" target="_blank" rel="noopener noreferrer"' +
        ' title="打开订单文件：' + esc(titleUrl) + '">' + esc(t.title) + '</a>'
      : esc(t.title);

    // 订单号右侧的「回形针」图标（脱敏订单文件链接）：
    //   · 已有链接（t.maskedUrl）：图标正常着色（蓝色）并指向该链接，点击即打开该链接
    //     —— 此时**不再提供补填功能**（所有能看到该订单的用户都可点击打开）；
    //   · 暂无链接：图标为浅灰色 —— 拥有权限「是否可下脱敏订单」的成员（团队管理员固定有；
    //     普通成员**默认「无」**，由团队管理员在「成员管理」的成员列表中逐个开关）
    //     点击即弹窗补填链接；其余用户的灰色图标仅作提示（点击无反应）。
    const hasMaskedUrl = !!t.maskedUrl;
    const canAddMasked = !hasMaskedUrl && !!currentUser.canPlaceMaskedOrder;
    const maskTag = hasMaskedUrl
      ? '<a class="todo-mask todo-mask-linked" href="' + esc(t.maskedUrl) + '"' +
        ' target="_blank" rel="noopener noreferrer"' +
        ' title="打开脱敏订单文件：' + esc(t.maskedUrl) + '">' + MASK_ICON + '</a>'
      : '<span class="todo-mask' + (canAddMasked ? ' todo-mask-addable' : '') + '"' +
        (canAddMasked ? ' data-addmask="' + esc(t.id) + '"' : '') +
        ' title="' + (canAddMasked
          ? '点击添加脱敏订单文件链接'
          : '未上传脱敏订单文件链接（需「是否可下脱敏订单」权限）') + '">' +
        MASK_ICON + '</span>';

    return \`
      <div class="todo-item" data-id="\${t.id}"\${ownerAttr}>
        <div class="todo-header" data-toggle="\${t.id}">
          \${statusEl}
          \${producerSelect}
          \${customerTag}
          <div class="todo-title\${doneCls}"><span class="todo-title-text">\${titleHtml}</span>\${maskTag}</div>
          \${dueTag}
          \${shipTag}
          \${amountTag}
          \${ownerTag}
          \${producerTag}
          <div class="todo-date">\${fmtDate(t.createdAt)}</div>
          <div class="todo-arrow">▶</div>
        </div>


        <div class="todo-body">
          <div class="todo-body-inner">
            \${producerHint}
            <div class="note-label">备注（\${(t.notes || []).length}）</div>
            <div class="note-list">\${renderNotes(t)}</div>
            \${noteAddBlock}
          </div>

        </div>
      </div>\`;
  }

  function bindEvents() {
    // 「已完成」加载更多：每次多显示 20 条
    const moreDone = document.getElementById('btnLoadMoreDone');
    if (moreDone) {
      moreDone.addEventListener('click', () => {
        doneVisible += DONE_PAGE_STEP;
        render();
      });
    }
    // PO# 链接 / 生产方标签上的采购文件链接 / 订单号右侧已填的「脱敏订单文件」链接：
    // 点击打开链接时，不触发展开/折叠
    document.querySelectorAll('.todo-title-link, .todo-producer-link, .todo-mask-linked').forEach(el => {
      el.addEventListener('click', (e) => e.stopPropagation());
    });
    // 订单号右侧的灰色「回形针」（该订单暂无脱敏订单文件链接）：
    // 有权限「是否可下脱敏订单」的成员可点击弹窗补填链接
    document.querySelectorAll('[data-addmask]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openMaskedUrl(el.getAttribute('data-addmask'));
      });
    });
    // 「交期」右侧的灰色空白「出货日期」区块（该订单尚未添加出货日期）：
    // 有权限「是否可以添加出货日期」的成员可点击弹窗添加
    document.querySelectorAll('[data-addship]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openShipDate(el.getAttribute('data-addship'));
      });
    });
    // 黄色「自产单 / 外购单」标签（该订单缺采购文件链接）：有「生产单下单权限」的成员可点击补填
    document.querySelectorAll('[data-addpurchase]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openPurchaseUrl(el.getAttribute('data-addpurchase'));
      });
    });
    // 展开/折叠
    document.querySelectorAll('[data-toggle]').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-status-select]')) return;
        const item = el.closest('.todo-item');
        item.classList.toggle('open');
      });
    });
    // 状态切换（仅管理员可见下拉）
    document.querySelectorAll('[data-status-select]').forEach(el => {
      el.addEventListener('click', (e) => e.stopPropagation());
      el.addEventListener('change', async (e) => {
        e.stopPropagation();
        const id = el.getAttribute('data-status-select');
        const t = todos.find(x => x.id === id);
        if (!t) return;
        const newStatus = el.value;
        // 转入「进行中」必须指定生产方（专业版团队）：未指定时弹窗强制选择，已在标题行指定过则直接生效
        // 试用团队没有「生产方管理」功能（无法添加生产方），不做此限制，允许直接改为「进行中」
        if (newStatus === 'doing' && !t.producerId && teamIsPro) {
          await openProducerPick(t, el);
          return;
        }
        try {
          await saveStatus(t, newStatus);
        } catch (err) { alert(err.message); render(); }
      });
    });
    // 生产方选择（仅管理员可见下拉）：待确认阶段即可直接指定
    document.querySelectorAll('[data-producer-select]').forEach(el => {
      el.addEventListener('click', (e) => e.stopPropagation());
      el.addEventListener('change', async (e) => {
        e.stopPropagation();
        const id = el.getAttribute('data-producer-select');
        const t = todos.find(x => x.id === id);
        if (!t) return;
        const pid = el.value;
        if (!pid) {
          alert('请选择生产方（可在顶部「生产方管理」中添加）');
          el.value = t.producerId || '';
          return;
        }
        const payload = { producerId: pid };
        // 管理员操作他人待办时需指定所属用户
        if (t.owner) payload.owner = t.owner;
        el.disabled = true;
        try {
          await api('/api/todos/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          const p = producersCache.find(x => x.id === pid);
          t.producerId = pid;
          t.producerName = p ? p.username : '';
          render();
        } catch (err) {
          alert(err.message);
          render();
        }
      });
    });
    // 交期 / 金额可点击修改（管理员，仅「待确认」的待办）
    document.querySelectorAll('[data-editdue]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openDueAmount(el.getAttribute('data-editdue'), 'editDueDate');
      });
    });
    document.querySelectorAll('[data-editamount]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openDueAmount(el.getAttribute('data-editamount'), 'editAmount');
      });
    });
    // 添加备注（追加式，不可删除）
    document.querySelectorAll('[data-addnote]').forEach(el => {
      el.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = el.getAttribute('data-addnote');
        const item = el.closest('.todo-item');
        const input = item.querySelector('[data-note-input]');
        const status = item.querySelector('[data-status]');
        const text = input.value.trim();
        if (!text) {
          if (status) status.textContent = '请输入备注内容';
          return;
        }
        el.disabled = true;
        try {
          // @提及：文本中的 @用户名 会作为提醒发给对应成员（后端会再校验是否为团队成员）
          const payload = { text: text, mentions: parseMentionsFromText(text) };
          // 业务主管需指定待办所属用户
          const owner = item.getAttribute('data-owner');
          if (owner) payload.owner = owner;
          const data = await api('/api/todos/' + id + '/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          const t = todos.find(x => x.id === id);
          if (t) {
            if (!Array.isArray(t.notes)) t.notes = [];
            t.notes.push(data.note);
          }
          input.value = '';
          render();
          // 重新展开该项
          const newItem = document.querySelector('.todo-item[data-id="' + id + '"]');
          if (newItem) newItem.classList.add('open');
        } catch (err) {
          if (status) status.textContent = err.message;
          el.disabled = false;
        }
      });
    });
    bindEvents2();
  }

  // ---------- 站内消息（@提及）----------
  // 说明：在待办的下拉备注区输入「@」会列出本团队人员，点击即插入 @用户名；
  // 提交备注后被 @ 的成员会在「登录名左侧」看到带数字的红色角标
  // （数字 = 未读 @ 次数，超过 9 显示「9+」），点角标可查看消息并标记已读。
  let mentionItems = []; // 我的站内消息（最新在前）
  let mentionTotalCount = 0; // 提醒总条数（用于未读为 0 时显示灰色「0」角标）
  let mentionMembers = null; // 可 @ 的人员缓存
  let mentionPickerEl = null; // 当前打开的候选下拉
  let mentionPickerInput = null; // 候选下拉对应的输入框
  let mentionPickerList = [];
  let mentionPickerIndex = 0;

  // 提醒内容最多显示的字节数（UTF-8 口径：ASCII 1 字节、中文 3 字节）；超出则截断并加 ...
  const MENTION_TEXT_MAX_BYTES = 60;

  // 按 UTF-8 字节截断文本：超过 maxBytes 时返回「前 maxBytes 字节 + ...」
  // 按码点累计字节数，避免把中文 / emoji 截成半个字
  function clipBytes(text, maxBytes) {
    const s = String(text === undefined || text === null ? '' : text);
    const max = Number(maxBytes) > 0 ? Number(maxBytes) : MENTION_TEXT_MAX_BYTES;
    let bytes = 0;
    let out = '';
    for (const ch of s) {
      const cp = ch.codePointAt(0);
      const size = cp <= 0x7f ? 1 : (cp <= 0x7ff ? 2 : (cp <= 0xffff ? 3 : 4));
      if (bytes + size > max) return out + '...';
      bytes += size;
      out += ch;
    }
    return s;
  }

  const MENTION_ROLE_TEXT = {
    team: '团队账号',
    editor: '成员',
    member: '成员',
    viewer: '业务主管',
    restricted: '生产部',
    superviewer: '总经理',
    deptmanager: '部门主管',
  };

  // 角标数字文案：>9 显示 9+
  function mentionCountText(n) {
    return n > 9 ? '9+' : String(n);
  }

  // 顶栏登录名左侧的角标：
  //   未读 > 0 → 红色角标（数字 = 未读 @ 次数，>9 显示 9+）
  //   未读 = 0 但仍有历史提醒 → 灰色「0」角标（否则已读后再也打不开历史提醒）
  //   从未收到过提醒 → 不显示
  function setMentionBadge(n, total) {
    const el = document.getElementById('mentionBadge');
    if (!el) return;
    const unread = Number(n) || 0;
    if (typeof total === 'number' && !isNaN(total)) mentionTotalCount = total;
    if (!unread && !mentionTotalCount) {
      el.style.display = 'none';
      el.textContent = '';
      el.className = 'mention-badge';
      el.title = '有人 @ 了你';
      return;
    }
    el.textContent = mentionCountText(unread);
    el.className = unread > 0 ? 'mention-badge' : 'mention-badge zero';
    el.title = unread > 0
      ? '有人 @ 了你：' + unread + ' 条未读（点击查看）'
      : '暂无未读 @ 提醒（点击查看历史提醒）';
    el.style.display = '';
  }

  // 拉取我的站内消息（顺带刷新角标）
  async function loadMentions() {
    try {
      const data = await api('/api/mentions');
      mentionItems = data.items || [];
      setMentionBadge(data.unread || 0, data.total || 0);
    } catch (e) { /* 忽略，不影响主流程 */ }
  }

  // 渲染站内消息面板
  function renderMentionPanel() {
    const box = document.getElementById('mentionList');
    if (!mentionItems.length) {
      box.innerHTML = '<div class="note-empty">暂无 @ 你的消息</div>';
      return;
    }
    box.innerHTML = mentionItems.map(function (m, i) {
      // 抬头一行：录入者（@ 你的人）+ 时间 + 「在「待办名」对你说：」，下一行是备注内容（像一条消息）
      const titlePart = m.todoTitle ? '在「' + esc(m.todoTitle) + '」' : '';
      return '<div class="mention-row' + (m.read ? '' : ' unread') + '" data-mention-idx="' + i + '">' +
        '<div class="mention-row-head">' +
          '<div class="mention-row-main">' +
            '<div><span class="mention-from">' + esc(m.from) + '</span> ' +
              '<span class="mention-time">' + fmtDateTime(m.at) + '</span> ' +
              titlePart + '对你说：</div>' +
          '</div>' +
          '<label class="mention-unread-toggle' + (m.read ? '' : ' on') + '"' +
            ' title="勾选 = 重新标记为未读（红点数量 +1）；取消勾选 = 标记为已读">' +
            '<input type="checkbox" data-mention-unread="' + esc(m.id) + '"' + (m.read ? '' : ' checked') + '>' +
            '<span>未读</span>' +
          '</label>' +
        '</div>' +
        // 备注内容最多显示 60 字节，超出则以 ... 结尾（点该条可展开待办查看完整备注）
        '<div class="mention-text">' + noteTextHtml(clipBytes(m.text || '', MENTION_TEXT_MAX_BYTES)) + '</div>' +
        '</div>';
    }).join('');
    box.querySelectorAll('[data-mention-idx]').forEach(function (el) {
      el.addEventListener('click', async function () {
        const m = mentionItems[Number(el.getAttribute('data-mention-idx'))];
        if (!m) return;
        const msg = document.getElementById('mentionMsg');
        // 点开某条消息 = 该条「标记为已读」，未读提醒数减 1（红点同步刷新）
        if (!m.read) {
          try {
            const data = await api('/api/mentions/read', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: m.id }),
            });
            m.read = true;
            const unread = typeof data.unread === 'number'
              ? data.unread
              : mentionItems.filter(function (x) { return !x.read; }).length;
            setMentionBadge(unread, typeof data.total === 'number' ? data.total : mentionItems.length);
            msg.className = 'msg ok';
            msg.textContent = '已标记为已读，剩余未读 ' + unread + ' 条';
          } catch (err) {
            msg.className = 'msg err';
            msg.textContent = err.message;
          }
        }
        // 点击某条消息后直接关闭消息清单
        document.getElementById('mentionsModal').classList.remove('show');
        // 同时展开对应待办（若在当前列表中）
        const item = document.querySelector('.todo-item[data-id="' + m.todoId + '"]');
        if (item) {
          document.querySelectorAll('.todo-item.open').forEach(function (x) { x.classList.remove('open'); });
          item.classList.add('open');
          item.scrollIntoView({ block: 'center', behavior: 'smooth' });
        } else {
          alert('该订单不在当前列表中（可能属于其他成员或已删除）：' + (m.todoTitle || ''));
        }
      });
    });
    // 右上角「未读」勾选框（勾选 = 重新标记为未读，红点 +1；取消勾选 = 标记为已读，红点 -1）
    box.querySelectorAll('[data-mention-unread]').forEach(function (cb) {
      cb.addEventListener('click', function (e) { e.stopPropagation(); });
      cb.addEventListener('change', async function (e) {
        e.stopPropagation();
        const itemId = cb.getAttribute('data-mention-unread');
        const m = mentionItems.filter(function (x) { return x.id === itemId; })[0];
        if (!m) return;
        const wantUnread = cb.checked; // 勾选 = 未读
        const msg = document.getElementById('mentionMsg');
        cb.disabled = true;
        try {
          const data = await api('/api/mentions/read', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: itemId, read: !wantUnread }),
          });
          m.read = !wantUnread;
          const unread = typeof data.unread === 'number'
            ? data.unread
            : mentionItems.filter(function (x) { return !x.read; }).length;
          setMentionBadge(unread, typeof data.total === 'number' ? data.total : mentionItems.length);
          msg.className = 'msg ok';
          msg.textContent = wantUnread
            ? '已重新标记为未读，未读提醒数 +1（当前 ' + unread + ' 条）'
            : '已标记为已读，未读提醒数 -1（当前 ' + unread + ' 条）';
          renderMentionPanel(); // 刷新未读底色与勾选状态
        } catch (err) {
          cb.checked = !wantUnread; // 失败回滚
          msg.className = 'msg err';
          msg.textContent = err.message;
        }
      });
    });
  }

  // 点顶栏红点：打开站内消息面板
  document.getElementById('mentionBadge').addEventListener('click', async function () {
    await loadMentions();
    renderMentionPanel();
    const msg = document.getElementById('mentionMsg');
    msg.className = 'msg';
    const unread = mentionItems.filter(function (m) { return !m.read; }).length;
    msg.textContent = unread ? '共 ' + unread + ' 条未读 @ 提醒' : '';
    document.getElementById('mentionsModal').classList.add('show');
  });

  // 说明：面板内已移除「全部标记为已读」按钮（改为逐条点击 / 勾选控制）。
  // 服务端仍保留「不带 id 即全部标记为已读」的能力（POST /api/mentions/read），便于需要时使用。

  // ===== 备注输入「@」时的成员候选列表 =====

  // 解析备注文本里的 @用户名（与服务端口径一致；服务端会再校验一次）
  function parseMentionsFromText(text) {
    const names = [];
    const re = /@([A-Za-z0-9_.-]{3,20})/g;
    let m;
    while ((m = re.exec(String(text || ''))) !== null) {
      if (names.indexOf(m[1]) === -1) names.push(m[1]);
    }
    return names;
  }

  // 可 @ 的人员（懒加载 + 缓存）：团队账号本人 + 本团队所有成员；不把自己列进候选
  async function ensureMentionMembers() {
    if (!mentionMembers) {
      try {
        const data = await api('/api/team-members');
        mentionMembers = data.members || [];
      } catch (e) {
        mentionMembers = [];
      }
    }
    return mentionMembers.filter(function (m) { return m.username !== currentUser.username; });
  }

  // 光标前是否是「@ + 可选前缀」（据此决定是否弹出候选；a@b 这类邮箱写法不触发）
  function mentionQueryAtCaret(el) {
    const pos = el.selectionStart;
    const before = el.value.slice(0, pos);
    const m = before.match(/(^|[^A-Za-z0-9_.@-])@([A-Za-z0-9_.-]*)$/);
    if (!m) return null;
    const query = m[2];
    if (query.length > 20) return null;
    return { query: query, start: pos - 1 - query.length, end: pos };
  }

  function closeMentionPicker() {
    if (mentionPickerEl && mentionPickerEl.parentNode) {
      mentionPickerEl.parentNode.removeChild(mentionPickerEl);
    }
    mentionPickerEl = null;
    mentionPickerInput = null;
    mentionPickerList = [];
    mentionPickerIndex = 0;
  }

  // 弹出候选列表：挂在 body 上（避免被待办列表的 overflow 裁剪），贴在输入框下方，空间不足时贴上方
  function openMentionPicker(input, list, emptyText) {
    closeMentionPicker();
    const box = document.createElement('div');
    box.className = 'mention-picker';
    box.innerHTML = list.length
      ? list.map(function (m, i) {
          const role = m.position || m.dept || MENTION_ROLE_TEXT[m.role] || m.role || '';
          return '<div class="mention-item' + (i === 0 ? ' active' : '') + '" data-mention-pick="' + esc(m.username) + '">' +
            '<span class="mention-name">@' + esc(m.username) + '</span>' +
            '<span class="mention-role">' + esc(role) + (m.isTeamAdmin && m.label ? '·' + esc(m.label) : '') + '</span>' +
            '</div>';
        }).join('')
      : '<div class="mention-picker-empty">' + esc(emptyText) + '</div>';
    document.body.appendChild(box);
    const rect = input.getBoundingClientRect();
    box.style.width = Math.max(176, Math.min(300, rect.width)) + 'px';
    box.style.left = (rect.left + window.scrollX) + 'px';
    box.style.top = (rect.bottom + window.scrollY + 4) + 'px';
    const boxRect = box.getBoundingClientRect();
    if (boxRect.bottom > window.innerHeight - 8) {
      box.style.top = Math.max(window.scrollY + 4, rect.top + window.scrollY - boxRect.height - 4) + 'px';
    }
    mentionPickerEl = box;
    mentionPickerInput = input;
    mentionPickerList = list;
    mentionPickerIndex = 0;
    box.querySelectorAll('[data-mention-pick]').forEach(function (el) {
      // 用 mousedown 并阻止默认行为：避免输入框先失焦导致光标位置丢失
      el.addEventListener('mousedown', function (ev) {
        ev.preventDefault();
        insertMention(input, el.getAttribute('data-mention-pick'));
      });
    });
  }

  // 选中成员：把光标前的「@前缀」替换为「@用户名 」
  function insertMention(input, username) {
    const q = mentionQueryAtCaret(input);
    if (!q) { closeMentionPicker(); return; }
    const val = input.value;
    input.value = val.slice(0, q.start) + '@' + username + ' ' + val.slice(q.end);
    const caret = q.start + username.length + 2;
    closeMentionPicker();
    input.focus();
    try { input.setSelectionRange(caret, caret); } catch (e) { /* 忽略 */ }
  }

  // 备注输入框：输入「@」时弹出本团队人员候选
  document.addEventListener('input', function (e) {
    const input = e.target;
    if (!input || !input.matches || !input.matches('[data-note-input]')) return;
    const q = mentionQueryAtCaret(input);
    if (!q) { closeMentionPicker(); return; }
    ensureMentionMembers().then(function (members) {
      if (!input.isConnected || document.activeElement !== input) return;
      const kw = q.query.toLowerCase();
      const list = members.filter(function (m) {
        return !kw || String(m.username).toLowerCase().indexOf(kw) !== -1;
      }).slice(0, 8);
      const emptyText = members.length
        ? '没有匹配的团队成员'
        : (isTrialTeam
          ? '试用版暂无成员：可在「成员管理」中添加（最多 2 个成员，订阅后可添加更多）'
          : '本团队暂无可 @ 的成员');
      openMentionPicker(input, list, emptyText);
    });
  });

  // 候选列表键盘操作：↑ ↓ 切换、Enter / Tab 选中、Esc 关闭
  document.addEventListener('keydown', function (e) {
    if (!mentionPickerEl || !mentionPickerInput || e.target !== mentionPickerInput) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!mentionPickerList.length) return;
      e.preventDefault();
      const step = e.key === 'ArrowDown' ? 1 : mentionPickerList.length - 1;
      mentionPickerIndex = (mentionPickerIndex + step) % mentionPickerList.length;
      mentionPickerEl.querySelectorAll('.mention-item').forEach(function (el, i) {
        el.classList.toggle('active', i === mentionPickerIndex);
      });
      return;
    }
    if (e.key === 'Enter' || e.key === 'Tab') {
      if (!mentionPickerList[mentionPickerIndex]) return;
      e.preventDefault();
      insertMention(mentionPickerInput, mentionPickerList[mentionPickerIndex].username);
      return;
    }
    if (e.key === 'Escape') closeMentionPicker();
  });

  // 点空白处 / 滚动 / 改变窗口大小：关闭候选列表
  document.addEventListener('click', function (e) {
    if (!mentionPickerEl) return;
    if (e.target === mentionPickerInput) return;
    if (mentionPickerEl.contains(e.target)) return;
    closeMentionPicker();
  });
  window.addEventListener('scroll', function () { closeMentionPicker(); }, true);
  window.addEventListener('resize', closeMentionPicker);

  // 原本 bindEvents() 里的其余绑定（拆成 bindEvents2：站内消息相关代码需位于顶层，
  // 供 renderNotes / init 等顶层函数直接调用；同时避免每次渲染重复注册监听）
  function bindEvents2() {
    // 删除
    document.querySelectorAll('[data-del]').forEach(el => {
      el.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = el.getAttribute('data-del');
        const item = el.closest('.todo-item');
        if (!confirm('确定删除这条待办吗？')) return;
        try {
          const owner = item.getAttribute('data-owner');
          const url = '/api/todos/' + id + (owner ? '?owner=' + encodeURIComponent(owner) : '');
          await api(url, { method: 'DELETE' });
          todos = todos.filter(x => x.id !== id);
          render();
        } catch (err) { alert(err.message); }
      });
    });
  }

  // ---------- 加载当前用户的客户列表 ----------
  //   · 团队账号本人（团队管理员）：不录入订单（试用版与专业版一致），录入区不显示，无需加载；
  //   · 其他成员（业务部等）：为自己被分配的客户（「可录入订单客户列表」）。
  async function loadCustomers() {
    // 「生产单下单权限」为「无」的成员不录入订单，无需加载客户下拉
    if (!currentUser.canPlaceOrder) return;
    if (isTrialTeam) return; // 试用版团队账号同样不录入订单
    try {
      const url = isTeamAdmin
        ? '/api/customer-list'
        : '/api/customers/' + encodeURIComponent(currentUser.username);
      const data = await api(url);
      const sel = document.getElementById('newCustomer');
      const customers = data.customers || [];
      if (!customers.length) {
        sel.innerHTML = '<option value="">' +
          (isTeamAdmin ? '请先在「客户管理」中添加客户' : '暂无客户，请联系管理员分配') +
          '</option>';
        return;
      }
      sel.innerHTML = '<option value="">选择客户</option>' +
        customers.map(c => '<option value="' + esc(c.name) + '">' + esc(c.name) + '</option>').join('');
    } catch (err) { /* 忽略 */ }
  }

  // ---------- 添加待办 ----------
  // 客户：试用团队账号为手工填写的名称（后端自动记入客户列表）；其他角色为下拉选择
  async function addTodo() {
    const input = document.getElementById('newTitle');
    const customerEl = document.getElementById('newCustomer');
    const dueInput = document.getElementById('newDueDate');
    const amountInput = document.getElementById('newAmount');
    const urlInput = document.getElementById('newOrderUrl');
    const currencyEl = document.getElementById('newCurrency');
    const title = input.value.trim();
    const customer = (customerEl.value || '').trim();
    const dueDate = dueInput.value;
    const amount = amountInput.value;
    const orderUrl = urlInput.value.trim();
    const currency = currencyEl ? currencyEl.value : 'USD';
    if (!customer) { alert('请选择客户'); return; }
    if (!title) { alert('请输入主题'); return; }
    if (!dueDate) { alert('请选择交期'); return; }
    if (amount === '' || amount === null) { alert('请输入金额'); return; }
    if (orderUrl && !/^https?:\\/\\//i.test(orderUrl)) {
      alert('订单文件链接需要以 http:// 或 https:// 开头');
      urlInput.focus();
      return;
    }
    try {
      const data = await api('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, customer, dueDate, amount, orderUrl, currency }),
      });
      todos.unshift(data.todo);
      input.value = '';
      customerEl.value = '';
      dueInput.value = '';
      syncDateField(dueInput);
      amountInput.value = '';
      urlInput.value = '';
      if (currencyEl) currencyEl.value = 'USD';
      render();
    } catch (err) { alert(err.message); }
  }

  document.getElementById('btnAdd').addEventListener('click', addTodo);
  document.getElementById('newTitle').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
  });


  // ---------- 弹窗控制 ----------
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', () => {
      document.getElementById(el.getAttribute('data-close')).classList.remove('show');
    });
  });
  document.querySelectorAll('.modal-mask').forEach(mask => {
    mask.addEventListener('click', (e) => {
      if (e.target !== mask) return;
      // 指定生产方弹窗关闭时需回滚状态下拉的选择
      if (mask.id === 'producerPickModal') { closeProducerPick(); return; }
      mask.classList.remove('show');
    });
  });

  // ---------- 修改密码 ----------
  document.getElementById('btnChangePwd').addEventListener('click', () => {
    document.getElementById('pwdMsg').textContent = '';
    document.getElementById('oldPwd').value = '';
    document.getElementById('newPwd').value = '';
    document.getElementById('pwdModal').classList.add('show');
  });
  document.getElementById('btnSavePwd').addEventListener('click', async () => {
    const msg = document.getElementById('pwdMsg');
    msg.className = 'msg';
    try {
      await api('/api/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldPassword: document.getElementById('oldPwd').value,
          newPassword: document.getElementById('newPwd').value,
        }),
      });
      msg.className = 'msg ok';
      msg.textContent = '修改成功';
      setTimeout(() => document.getElementById('pwdModal').classList.remove('show'), 800);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 生产方缓存（指定生产方 / 授权观察共用） ----------
  let producersCache = [];
  async function ensureProducers() {
    if (producersCache.length) return producersCache;
    try {
      const data = await api('/api/producers');
      producersCache = data.producers || [];
    } catch (e) { producersCache = []; }
    return producersCache;
  }

  // ---------- 全局客户列表缓存（客户管理 / 成员管理分配客户共用） ----------
  let customerListCache = [];
  async function ensureCustomerList(force) {
    if (customerListCache.length && !force) return customerListCache;
    try {
      const data = await api('/api/customer-list');
      customerListCache = data.customers || [];
    } catch (e) { customerListCache = []; }
    return customerListCache;
  }

  const ROLE_TEXT = {
    superadmin: '超级管理员', team: '团队管理员',
    editor: '业务部',
    viewer: '业务主管', restricted: '生产部',
    superviewer: '总经理',
    deptmanager: '部门主管'
  };
  const ROLE_CLS = {
    superadmin: 'admin', team: 'admin', editor: '', viewer: 'viewer',
    restricted: 'restricted', superviewer: 'superviewer',
    deptmanager: 'superviewer'
  };

  // 生产部 / 计划部 / 采购部 / 品质部 / 财务部：「可观察生产方」管理区块（成员管理弹窗内）
  //   这 5 个部门角色（restricted）功能完全相同，仅显示名称不同
  function buildWatchBlock(u, producers) {
    const ids = Array.isArray(u.watched) ? u.watched : [];
    const granted = ids.map(id => {
      const p = producers.find(x => x.id === id);
      return p || { id: id, username: '（已删除的生产方）', deleted: true };
    });
    const chips = granted.length
      ? granted.map(p =>
          '<span class="customer-chip">' + esc(p.username) +
          '<span class="customer-chip-del" data-delwatch="' + esc(u.username) +
          '" data-pid="' + esc(p.id) + '">×</span></span>').join('')
      : '<span class="customer-empty">暂无可观察生产方</span>';
    const options = producers.length
      ? '<option value="">选择生产方</option>' + producers.map(p =>
          '<option value="' + esc(p.id) + '">' + esc(p.username) + '</option>').join('')
      : '<option value="">请先在「生产方管理」中添加生产方</option>';
    return '<div class="customer-manage" data-watch-manage="' + esc(u.username) + '">' +
      '<div class="customer-manage-title">可观察生产方</div>' +
      '<div class="customer-list">' + chips + '</div>' +
      '<div class="customer-add-row">' +
      '<select class="customer-add-input watch-add-select">' + options + '</select>' +
      '<button class="btn-primary-sm" data-addwatch="' + esc(u.username) + '">添加生产方</button>' +
      '</div></div>';
  }

  // ---------- 待办状态保存（可同时指定生产方） ----------
  async function saveStatus(t, newStatus, producerId) {
    const payload = { status: newStatus };
    // 管理员操作他人待办时需指定所属用户
    if (t.owner) payload.owner = t.owner;
    if (producerId) payload.producerId = producerId;
    const data = await api('/api/todos/' + t.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const saved = data.todo || {};
    t.status = newStatus;
    t.done = newStatus === 'done';
    if (saved.producerId) {
      t.producerId = saved.producerId;
      t.producerName = saved.producerName;
    }
    render();
  }

  // ---------- 指定生产方弹窗 ----------
  let picking = null;

  async function openProducerPick(t, selectEl) {
    const producers = await ensureProducers();
    if (!producers.length) {
      alert('还没有生产方，请先点击顶部「生产方管理」添加生产方');
      if (selectEl) selectEl.value = statusOf(t);
      return;
    }
    const sel = document.getElementById('pickProducerSelect');
    sel.innerHTML = '<option value="">请选择生产方</option>' + producers.map(p =>
      '<option value="' + esc(p.id) + '">' + esc(p.username) + '</option>').join('');
    sel.value = (t.producerId && producers.some(p => p.id === t.producerId)) ? t.producerId : '';
    const msg = document.getElementById('pickProducerMsg');
    msg.className = 'msg';
    msg.textContent = t.producerName ? '当前生产方：' + t.producerName : '';
    picking = { todo: t, selectEl };
    document.getElementById('producerPickModal').classList.add('show');
  }

  function closeProducerPick() {
    if (!picking) return;
    const todo = picking.todo;
    const selectEl = picking.selectEl;
    picking = null;
    document.getElementById('producerPickModal').classList.remove('show');
    if (selectEl) selectEl.value = statusOf(todo);
  }

  document.getElementById('btnCancelPickProducer').addEventListener('click', closeProducerPick);

  document.getElementById('btnConfirmPickProducer').addEventListener('click', async () => {
    if (!picking) return;
    const sel = document.getElementById('pickProducerSelect');
    const msg = document.getElementById('pickProducerMsg');
    if (!sel.value) {
      msg.className = 'msg err';
      msg.textContent = '请选择生产方';
      return;
    }
    const target = picking.todo;
    picking = null;
    document.getElementById('producerPickModal').classList.remove('show');
    try {
      await saveStatus(target, 'doing', sel.value);
    } catch (err) {
      alert(err.message);
      render();
    }
  });

  // ---------- 修改交期 / 金额（管理员，仅「待确认」的待办） ----------
  let dueAmountTarget = null;

  function openDueAmount(id, focusField) {
    const t = todos.find(x => x.id === id);
    if (!t) return;
    dueAmountTarget = t;
    document.getElementById('editTitle').value = t.title || '';
    document.getElementById('editDueDate').value = t.dueDate || '';
    syncDateField(document.getElementById('editDueDate'));
    document.getElementById('editAmount').value =
      (t.amount === undefined || t.amount === null) ? '' : t.amount;
    document.getElementById('editOrderUrl').value = t.orderUrl || '';
    document.getElementById('editPurchaseUrl').value = t.purchaseUrl || '';
    const msg = document.getElementById('dueAmountMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('dueAmountModal').classList.add('show');
    const el = document.getElementById(focusField);
    if (el) el.focus();
  }

  document.getElementById('btnSaveDueAmount').addEventListener('click', async () => {
    if (!dueAmountTarget) return;
    const msg = document.getElementById('dueAmountMsg');
    msg.className = 'msg';
    const title = document.getElementById('editTitle').value.trim();
    const dueDate = document.getElementById('editDueDate').value;
    const amount = document.getElementById('editAmount').value;
    const orderUrl = document.getElementById('editOrderUrl').value.trim();
    const purchaseUrl = document.getElementById('editPurchaseUrl').value.trim();
    if (!title) { msg.className = 'msg err'; msg.textContent = '请输入 PO#（主题）'; return; }
    if (!dueDate) { msg.className = 'msg err'; msg.textContent = '请选择交期'; return; }
    if (amount === '') { msg.className = 'msg err'; msg.textContent = '请输入金额'; return; }
    if (orderUrl && !/^https?:\\/\\//i.test(orderUrl)) {
      msg.className = 'msg err';
      msg.textContent = '订单文件链接需以 http:// 或 https:// 开头';
      return;
    }
    if (purchaseUrl && !/^https?:\\/\\//i.test(purchaseUrl)) {
      msg.className = 'msg err';
      msg.textContent = '采购文件链接需以 http:// 或 https:// 开头';
      return;
    }
    const targetId = dueAmountTarget.id;
    const payload = { title, dueDate, amount, orderUrl, purchaseUrl };
    // 管理员操作他人待办时需指定所属用户
    if (dueAmountTarget.owner) payload.owner = dueAmountTarget.owner;
    try {
      const data = await api('/api/todos/' + encodeURIComponent(targetId), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const saved = data.todo || {};
      const idx = todos.findIndex(x => x.id === targetId);
      if (idx !== -1) {
        todos[idx].title = saved.title !== undefined ? saved.title : title;
        todos[idx].dueDate = saved.dueDate !== undefined ? saved.dueDate : dueDate;
        todos[idx].amount = saved.amount !== undefined ? saved.amount : amount;
        todos[idx].orderUrl = saved.orderUrl !== undefined ? saved.orderUrl : orderUrl;
        todos[idx].purchaseUrl = saved.purchaseUrl !== undefined ? saved.purchaseUrl : purchaseUrl;
      }
      dueAmountTarget = null;
      document.getElementById('dueAmountModal').classList.remove('show');
      render();
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 补填「采购文件链接」（订单行上黄色的「自产单 / 外购单」标签） ----------
  // 仅「生产单下单权限 = 有」的成员可用；只能补「当前没有采购文件链接」的订单。
  let purchaseTarget = null; // { id, owner }

  function openPurchaseUrl(id) {
    const t = todos.find(x => x.id === id);
    if (!t) return;
    purchaseTarget = { id: t.id, owner: t.owner || '' };
    document.getElementById('purchaseTodoTitle').value =
      (t.title || '') + (t.customer ? '（' + t.customer + '）' : '');
    document.getElementById('purchaseLinkInput').value = '';
    const msg = document.getElementById('purchaseUrlMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('purchaseUrlModal').classList.add('show');
    document.getElementById('purchaseLinkInput').focus();
  }

  document.getElementById('btnSavePurchaseUrl').addEventListener('click', async () => {
    if (!purchaseTarget) return;
    const msg = document.getElementById('purchaseUrlMsg');
    msg.className = 'msg';
    const link = document.getElementById('purchaseLinkInput').value.trim();
    if (!link) {
      msg.className = 'msg err';
      msg.textContent = '请输入采购文件链接';
      return;
    }
    if (!/^https?:\\/\\//i.test(link)) {
      msg.className = 'msg err';
      msg.textContent = '采购文件链接需以 http:// 或 https:// 开头';
      return;
    }
    const target = purchaseTarget;
    try {
      await api('/api/todos/' + encodeURIComponent(target.id) + '/purchase-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ purchaseUrl: link, owner: target.owner }),
      });
      const t = todos.find(x => x.id === target.id);
      if (t) t.purchaseUrl = link;
      purchaseTarget = null;
      document.getElementById('purchaseUrlModal').classList.remove('show');
      render();
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 补填「脱敏订单文件链接」（订单号右侧的灰色「回形针」） ----------
  // 仅权限「是否可下脱敏订单」= 有的成员可用（团队管理员固定有；普通成员默认「无」，
  // 由团队管理员在「成员管理」中开关）；只能补「当前没有脱敏订单文件链接」的订单
  // （已有链接时回形针只用于打开链接，不再提供补填功能）。
  let maskedTarget = null; // { id, owner }

  function openMaskedUrl(id) {
    const t = todos.find(x => x.id === id);
    if (!t) return;
    maskedTarget = { id: t.id, owner: t.owner || '' };
    document.getElementById('maskedTodoTitle').value =
      (t.title || '') + (t.customer ? '（' + t.customer + '）' : '');
    document.getElementById('maskedLinkInput').value = '';
    const msg = document.getElementById('maskedUrlMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('maskedUrlModal').classList.add('show');
    document.getElementById('maskedLinkInput').focus();
  }

  document.getElementById('btnSaveMaskedUrl').addEventListener('click', async () => {
    if (!maskedTarget) return;
    const msg = document.getElementById('maskedUrlMsg');
    msg.className = 'msg';
    const link = document.getElementById('maskedLinkInput').value.trim();
    if (!link) {
      msg.className = 'msg err';
      msg.textContent = '请输入脱敏订单文件链接';
      return;
    }
    if (!/^https?:\\/\\//i.test(link)) {
      msg.className = 'msg err';
      msg.textContent = '脱敏订单文件链接需以 http:// 或 https:// 开头';
      return;
    }
    const target = maskedTarget;
    try {
      await api('/api/todos/' + encodeURIComponent(target.id) + '/masked-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ maskedUrl: link, owner: target.owner }),
      });
      const t = todos.find(x => x.id === target.id);
      if (t) t.maskedUrl = link;
      maskedTarget = null;
      document.getElementById('maskedUrlModal').classList.remove('show');
      render();
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 添加「出货日期」（订单行「交期」右侧的灰色空白区块） ----------
  // 仅权限「是否可以添加出货日期」= 有的成员可用（团队管理员固定有；普通成员默认「无」，
  // 由团队管理员在「成员管理」中开关）；只能为**尚未添加**出货日期的订单添加
  //（已显示出货日期的区块不可再点击，不能重复添加）。
  let shipTarget = null; // { id, owner }

  function openShipDate(id) {
    const t = todos.find(x => x.id === id);
    if (!t) return;
    shipTarget = { id: t.id, owner: t.owner || '' };
    document.getElementById('shipTodoTitle').value =
      (t.title || '') + (t.customer ? '（' + t.customer + '）' : '');
    const input = document.getElementById('shipDateInput');
    input.value = '';
    syncDateField(input);
    const msg = document.getElementById('shipDateMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('shipDateModal').classList.add('show');
    input.focus();
  }

  document.getElementById('btnSaveShipDate').addEventListener('click', async () => {
    if (!shipTarget) return;
    const msg = document.getElementById('shipDateMsg');
    msg.className = 'msg';
    const shipDate = document.getElementById('shipDateInput').value;
    if (!shipDate) {
      msg.className = 'msg err';
      msg.textContent = '请选择出货日期';
      return;
    }
    const target = shipTarget;
    try {
      const data = await api('/api/todos/' + encodeURIComponent(target.id) + '/ship-date', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shipDate: shipDate, owner: target.owner }),
      });
      const t = todos.find(x => x.id === target.id);
      if (t) t.shipDate = (data && data.shipDate) || shipDate;
      shipTarget = null;
      document.getElementById('shipDateModal').classList.remove('show');
      render();
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 成员管理 ----------
  // 「可查看客户列表」（普通成员都显示；**「是否可查看全部订单」为自动权限**）：
  //   · 未选择任何客户 → 「是否可查看全部订单」= 是（可查看本团队全部订单，默认行为）；
  //   · 选择了 N 个客户 → 自动变为「否」：只能查看这 N 个客户的订单 + 自己录入的订单（只读、可加备注）。
  //   客户来源与「可录入订单客户列表」相同（「客户管理」维护的团队客户列表），两者互不影响。
  function buildViewCustomerBlock(u, customerList, viewCustomers) {
    const assignedIds = viewCustomers.map(function (c) { return c.id; });
    const chips = viewCustomers.length
      ? viewCustomers.map(function (c) {
          return '<span class="customer-chip view-chip">' + esc(c.name) +
            '<span class="customer-chip-del" data-delviewcustomer="' + esc(u.username) +
            '" data-vcid="' + esc(c.id) + '" title="取消选择：从「可查看客户列表」中移除该客户">×</span></span>';
        }).join('')
      : '<span class="customer-empty">未选择客户（该成员可查看本团队全部订单）</span>';
    const available = customerList.filter(function (c) { return assignedIds.indexOf(c.id) === -1; });
    const addRow = available.length
      ? '<select class="customer-add-select"><option value="">选择客户</option>' +
        available.map(function (c) {
          return '<option value="' + esc(c.id) + '">' + esc(c.name) + '</option>';
        }).join('') +
        '</select>' +
        '<button class="btn-primary-sm" data-addviewcustomer="' + esc(u.username) + '">添加客户</button>'
      : '<div class="customer-empty">' +
        (customerList.length ? '全部客户都已选择' : '请先到顶部「客户管理」添加客户') +
        '</div>';
    return '<div class="customer-manage view-customer-manage" data-view-customer-manage="' +
      esc(u.username) + '">' +
      '<div class="customer-manage-title">可查看客户列表</div>' +
      '<div class="customer-manage-hint">不选择客户 = 可查看全部订单；' +
      '选择了客户 = 只能查看这些客户的订单（含他人录入，只读、可加备注）+ 自己录入的订单。</div>' +
      '<div class="customer-list">' + chips + '</div>' +
      '<div class="customer-add-row">' + addRow + '</div>' +
      '</div>';
  }

  document.getElementById('btnManageUsers').addEventListener('click', async () => {
    document.getElementById('userMsg').textContent = '';
    document.getElementById('usersModal').classList.add('show');
    await loadUsers();
  });
  async function loadUsers() {
    try {
      const data = await api('/api/users');
      const list = document.getElementById('userList');
      // 试用版数量限制：成员最多 2 个（达到上限时禁用「添加成员」并提示订阅可解除限制）
      await refreshTrialLimits();
      applyTrialLimit('members', 'userTrialHint', 'btnAddUser');
      // 普通成员（原业务部）：editor（兼容历史 role=member 数据）
      const isMember = (u) => u.role === 'editor' || u.role === 'member';
      // 本团队生产方列表（生产部授权用）
      const producers = await ensureProducers();
      // 本团队客户列表（为成员分配客户时的可选项，来自「客户管理」；每次打开都重新拉取）
      const customerList = await ensureCustomerList(true);
      // 先并发拉取所有普通成员的客户列表（用于客户标签 + 权限1「添加订单」状态），避免逐个 await 造成的问题
      const customerMap = {};
      await Promise.all(data.users.map(async (u) => {
        if (!isMember(u)) return;
        try {
          const cd = await api('/api/customers/' + encodeURIComponent(u.username));
          customerMap[u.username] = cd.customers || [];
        } catch (e) {
          customerMap[u.username] = [];
        }
      }));
      // 「可查看客户列表」（普通成员都需要：不选客户 = 可查看全部订单；选了客户 = 只能查看这些客户）
      const viewCustomerMap = {};
      await Promise.all(data.users.map(async (u) => {
        if (!isMember(u)) return;
        try {
          const vd = await api('/api/view-customers/' + encodeURIComponent(u.username));
          viewCustomerMap[u.username] = vd.customers || [];
        } catch (e) {
          viewCustomerMap[u.username] = [];
        }
      }));
      list.innerHTML = data.users.map(u => {
        // 普通成员显示「职位」（手动填写，可点击修改）；历史账号回退为角色名
        const isMemberRow = isMember(u);
        const positionText = String(u.position || '').trim();
        const roleText = isMemberRow
          ? (positionText || '未填写职位')
          : (u.dept || ROLE_TEXT[u.role] || '成员');
        const roleCls = ROLE_CLS[u.role] || '';
        // 普通成员需要维护客户列表（「添加订单」权限的依据：有客户即可添加订单）
        let customerBlock = '';
        if (u.role === 'restricted') {
          // 生产部 / 计划部 / 采购部 / 品质部 / 财务部（历史账号）：维护「可观察生产方」
          customerBlock = buildWatchBlock(u, producers);
        } else if (isMemberRow) {

          const customers = customerMap[u.username] || [];
          const assignedIds = customers.map(c => c.id);
          const chips = customers.length
            ? customers.map(c => \`
                <span class="customer-chip">
                  \${esc(c.name)}
                  <span class="customer-chip-del" data-delcustomer="\${esc(u.username)}" data-cid="\${esc(c.id)}">×</span>
                </span>\`).join('')
            : '<span class="customer-empty">暂无客户</span>';
          // 可选项直接调用「客户管理」里维护的全局客户列表（已分配的排除）
          const available = customerList.filter(c => assignedIds.indexOf(c.id) === -1);
          const addRow = available.length
            ? '<select class="customer-add-select"><option value="">选择客户</option>' +
              available.map(c => '<option value="' + esc(c.id) + '">' + esc(c.name) + '</option>').join('') +
              '</select>' +
              '<button class="btn-primary-sm" data-addcustomer="' + esc(u.username) + '">添加客户</button>'
            : '<div class="customer-empty">' +
              (customerList.length ? '全部客户都已分配' : '请先到顶部「客户管理」添加客户') +
              '</div>';
          customerBlock = \`
          <div class="customer-manage" data-customer-manage="\${esc(u.username)}">
            <div class="customer-manage-title">可录入订单客户列表</div>
            <div class="customer-list">\${chips}</div>
            <div class="customer-add-row">\${addRow}</div>
          </div>\`;
          // 「可查看客户列表」：普通成员**始终显示**（不选客户 = 可查看全部订单；
          // 选择了 N 个客户 → 「是否可查看全部订单」自动变为「否」，只能查看这 N 个客户 + 自己录入的订单）
          customerBlock += buildViewCustomerBlock(
            u, customerList, viewCustomerMap[u.username] || []
          );
        }
        // 成员行右侧的权限开关（团队管理员在这里逐个设定各成员的具体权限）：
        //   · 普通成员（原业务部）：权限1「添加订单」自动（有客户即可添加订单，只显示状态）；
        //     权限2「是否可以查看客户订单」/ 权限3「是否可以下生产订单」/ 权限4「是否可以查看生产订单」
        //     / 权限5「是否可以更新订单状态」/ 权限6「是否可以下脱敏订单」
        //     / 权限7「是否可以添加出货日期」（**默认「无」**，分行显示）；
        //   · 部门主管（历史账号）：固定不录入订单，只显示两个查看权限开关；
        //   · 总经理（历史账号）：固定不录入订单，不显示任何开关；
        //   · 品质部 / 财务部（历史账号）：不需要下单相关权限，不显示开关；
        //   · 生产部 / 计划部 / 采购部（历史账号）：保留单个「生产单下单权限」开关。
        const noOrderPerm = u.role === 'restricted' &&
          (u.dept === '品质部' || u.dept === '财务部');
        // onText/offText：历史权限用「有 / 无」；权限2 / 3 / 4 / 5 / 6 / 7 用「是 / 否」
        // title（可选）：自定义悬浮说明（权限5 用它解释「= 团队管理员相同」）
        const permToggle = function (attr, text, on, onText, offText, title) {
          const a = onText || '有';
          const b = offText || '无';
          return '<label class="order-perm" title="' +
            (title || (text + '：' + a + ' = 允许，' + b + ' = 不允许')) + '">' +
            '<input type="checkbox" ' + attr + '="' + esc(u.username) + '"' + (on ? ' checked' : '') + '>' +
            '<span>' + text + '：<b>' + (on ? a : b) + '</b></span></label>';
        };
        const isDeptMgrRow = u.role === 'deptmanager';
        const isSuperviewerRow = u.role === 'superviewer';
        // 权限1「添加订单」：自动 —— 该成员的「可录入订单客户列表」里有客户才可录入订单（无客户则不显示录入区）；
        // 「是否可查看全部订单」：**同样自动** —— 由下方「可查看客户列表」决定（不选客户 = 可查看全部订单；
        // 选择了 N 个客户 = 否，只能查看这 N 个客户 + 自己录入的订单）；
        // 注：「可录入订单客户列表」只决定能否录入订单，与订单可见范围无关
        const myCustomers = customerMap[u.username] || [];
        const hasCustomers = myCustomers.length > 0;
        // 「可查看客户列表」中的客户数（= 「否」时可见的客户数量）
        const myViewCustomers = viewCustomerMap[u.username] || [];
        const viewCount = myViewCustomers.length;
        const canViewAllOrdersNow = u.canViewAllOrders !== false && viewCount === 0;
        const orderPermBlock = noOrderPerm ? '' : (isMemberRow
          ? '<div class="order-perm-col">' +
              '<span class="order-perm-static" title="权限1「添加订单」自动生效：「可录入订单客户列表」里有客户 → 可录入订单（显示「添加新订单」录入区）；没有客户 → 权限为「无」、不显示录入区（与「查看全部订单」无关）">' +
                '添加订单：<b>' + (hasCustomers ? '有' : '无') + '</b>' +
                (hasCustomers
                  ? '（已有 ' + myCustomers.length + ' 个客户）'
                  : '（无客户，不能录单）') +
              '</span>' +
              // 「是否可查看全部订单」为自动权限（与权限1 一样不提供勾选框，只显示状态）：
              //   未选择客户 → 是（可查看本团队全部订单）；已在下方「可查看客户列表」中选择 N 个客户 → 否（可查看 N 个客户）
              '<span class="order-perm-static" title="「是否可查看全部订单」自动生效（无需勾选）：' +
                '下方「可查看客户列表」未选择客户 → 是，可查看本团队全部订单（含待确认，他人订单只读但可加备注）；' +
                '选择了 N 个客户 → 否，只能查看这 N 个客户的订单 + 自己录入的订单">' +
                '是否可查看全部订单：<b>' + (canViewAllOrdersNow ? '是' : '否') + '</b>' +
                (canViewAllOrdersNow
                  ? '（可查看全部订单）'
                  : '（可查看 ' + viewCount + ' 个客户）') +
              '</span>' +
              permToggle('data-canvieworder', '是否可以查看客户订单', u.canViewCustomerOrder === true, '是', '否') +
              permToggle('data-canpurchase', '是否可以下生产订单', u.canPurchase === true, '是', '否') +
              permToggle('data-canviewpurchase', '是否可以查看生产订单', u.canViewPurchaseOrder === true, '是', '否') +
              permToggle('data-canupdatestatus', '是否可以更新订单状态', u.canUpdateStatus === true, '是', '否',
                '「是否可以更新订单状态」= 是 时，该成员的订单列表显示与功能与团队管理员完全相同：' +
                '可见本团队全部订单（含待确认），可改变状态 / 指定生产方 / 修改「待确认」订单 / 删除 / 添加备注，' +
                '且订单号与「自产单 / 外购单」标签可点击（默认「否」）') +
              permToggle('data-canmaskedorder', '是否可以下脱敏订单', u.canPlaceMaskedOrder === true, '是', '否',
                '「是否可以下脱敏订单」= 是 时，该成员可点击订单列表中**订单号右侧的「回形针」**图标' +
                '添加脱敏订单文件链接（默认「否」；已有链接时该图标只用于打开链接，不能再添加）') +
              permToggle('data-canshipdate', '是否可以添加出货日期', u.canAddShipDate === true, '是', '否',
                '「是否可以添加出货日期」= 是 时，该成员可点击订单行**「交期」右侧的灰色空白区块**' +
                '添加出货日期（默认「否」；已有出货日期的订单只显示日期，不能再添加）') +
            '</div>'
          : (isDeptMgrRow
            // 部门主管（历史账号，功能参照总经理）：固定不录入订单，只保留 2 个查看权限开关（分行显示）
            ? '<div class="order-perm-col">' +
                permToggle('data-canvieworder', '是否可查看客户订单', u.canViewCustomerOrder !== false, '是', '否') +
                permToggle('data-canviewpurchase', '是否可查看采购订单', u.canViewPurchaseOrder !== false, '是', '否') +
              '</div>'
            // 总经理（历史账号）：固定不录入订单，不显示任何权限开关
            : (isSuperviewerRow ? '' : permToggle('data-canorder', '生产单下单权限', !!u.canPlaceOrder))));
        return \`
        <div class="user-block">
          <div class="user-row">
            <div>
              \${u.mentionsUnread ? '<span class="mention-badge static" title="该成员有 ' + u.mentionsUnread + ' 条未读 @ 消息">' + mentionCountText(u.mentionsUnread) + '</span>' : ''}<span>\${esc(u.username)}</span>
              \${isMemberRow
                ? '<span class="role ' + roleCls + ' desc-editable" data-desc-kind="position" data-desc-id="' + esc(u.username) + '" data-desc-name="' + esc(u.username) + '" title="点击修改职位">' +
                    (positionText ? esc(positionText) : '<span class="desc-empty">未填写职位</span>') + '</span>'
                : '<span class="role ' + roleCls + '">' + roleText + '</span>'}
              \${editTextHtml('user', u.username, u.username, u.remark, '未填写', 'remark-row')}
            </div>
            <div class="user-row-actions">
              \${orderPermBlock}
              <div class="user-row-btns">
                <button class="btn-secondary-sm" data-resetpwd="\${esc(u.username)}">重置密码</button>
                <button class="btn-danger" data-deluser="\${esc(u.username)}">删除</button>
              </div>
            </div>
          </div>
          \${customerBlock}
        </div>\`;

      }).join('');
      list.querySelectorAll('[data-deluser]').forEach(el => {
        el.addEventListener('click', async () => {
          const name = el.getAttribute('data-deluser');
          if (!confirm('确定删除成员 ' + name + ' 吗？其待办也会被删除。')) return;
          try {
            await api('/api/users/' + encodeURIComponent(name), { method: 'DELETE' });
            await loadUsers();
          } catch (err) { alert(err.message); }
        });
      });
      // 重置密码
      list.querySelectorAll('[data-resetpwd]').forEach(el => {
        el.addEventListener('click', () => {
          const name = el.getAttribute('data-resetpwd');
          document.getElementById('resetPwdUser').value = name;
          document.getElementById('resetPwdValue').value = '';
          const msg = document.getElementById('resetPwdMsg');
          msg.className = 'msg';
          msg.textContent = '';
          document.getElementById('resetPwdModal').classList.add('show');
        });
      });
      // 成员备注（点文字直接修改）
      bindDescEditors(list, () => loadUsers());
      // 权限开关（勾选后立即保存）：权限2 查看客户订单 / 权限3 下生产订单 / 权限4 查看生产订单 /
      // 权限5 更新订单状态（= 有 时订单列表与团队管理员相同）/
      // 权限6 下脱敏订单（= 是 时可点击订单号右侧的「回形针」补填脱敏订单文件链接，默认「无」）/
      // 权限7 添加出货日期（= 是 时可点击「交期」右侧的灰色空白区块添加出货日期，默认「无」）；
      // 注：权限1「添加订单」与「是否可查看全部订单」都是**自动**权限（无勾选框，只显示状态）——
      //     前者由「可录入订单客户列表」决定，后者由「可查看客户列表」决定（见 /api/view-customers/）；
      // 历史角色的「生产单下单权限」也走同一接口
      const permAttrs = [
        ['data-canorder', 'canPlaceOrder'],
        ['data-canpurchase', 'canPurchase'],
        ['data-canvieworder', 'canViewCustomerOrder'],
        ['data-canviewpurchase', 'canViewPurchaseOrder'],
        ['data-canupdatestatus', 'canUpdateStatus'],
        ['data-canmaskedorder', 'canPlaceMaskedOrder'],
        ['data-canshipdate', 'canAddShipDate'],
      ];
      list.querySelectorAll(permAttrs.map(a => '[' + a[0] + ']').join(', ')).forEach(el => {
        el.addEventListener('change', async () => {
          const pair = permAttrs.filter(a => el.hasAttribute(a[0]))[0];
          const name = el.getAttribute(pair[0]);
          el.disabled = true;
          try {
            const body = {};
            body[pair[1]] = el.checked;
            await api('/api/users/' + encodeURIComponent(name) + '/order-permission', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
            });
            await loadUsers();
          } catch (err) {
            alert(err.message);
            el.disabled = false;
            el.checked = !el.checked;
          }
        });
      });

      // 添加客户（从「客户管理」维护的全局客户列表中选取）
      list.querySelectorAll('[data-addcustomer]').forEach(el => {
        el.addEventListener('click', async () => {
          const name = el.getAttribute('data-addcustomer');
          const block = el.closest('.customer-manage');
          const sel = block ? block.querySelector('.customer-add-select') : null;
          if (!sel || !sel.value) { alert('请选择客户'); return; }
          const cid = sel.value;
          const picked = customerList.find(c => c.id === cid);
          if (!picked) { alert('该客户已不存在，请关闭后重新打开成员管理'); return; }
          try {
            await api('/api/customers/' + encodeURIComponent(name), {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name: picked.name, globalId: picked.id }),
            });
            await loadUsers();
          } catch (err) { alert(err.message); }
        });
      });
      // 授权 / 取消授权 生产部的可观察生产方
      list.querySelectorAll('[data-addwatch]').forEach(el => {
        el.addEventListener('click', async () => {
          const name = el.getAttribute('data-addwatch');
          const block = el.closest('[data-watch-manage]');
          const sel = block ? block.querySelector('.watch-add-select') : null;
          if (!sel) return;
          if (!sel.value) { alert('请选择生产方'); return; }
          try {
            await api('/api/watch/' + encodeURIComponent(name), {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ producerId: sel.value }),
            });
            await loadUsers();
          } catch (err) { alert(err.message); }
        });
      });
      list.querySelectorAll('[data-delwatch]').forEach(el => {
        el.addEventListener('click', async () => {
          const name = el.getAttribute('data-delwatch');
          const pid = el.getAttribute('data-pid');
          if (!confirm('确定取消该生产方的观察授权吗？')) return;
          try {
            await api('/api/watch/' + encodeURIComponent(name) + '/' + encodeURIComponent(pid), { method: 'DELETE' });
            await loadUsers();
          } catch (err) { alert(err.message); }
        });
      });
      // 删除客户
      list.querySelectorAll('[data-delcustomer]').forEach(el => {
        el.addEventListener('click', async () => {
          const uname = el.getAttribute('data-delcustomer');
          const cid = el.getAttribute('data-cid');
          if (!confirm('确定删除该客户吗？')) return;
          try {
            await api('/api/customers/' + encodeURIComponent(uname) + '/' + encodeURIComponent(cid), { method: 'DELETE' });
            await loadUsers();
          } catch (err) { alert(err.message); }
        });
      });
      // 「可查看客户列表」：添加 / 移除客户（在此清单中添加客户 = 授权把该客户的订单
      // 显示在该成员的订单列表中；清单为空 → 该成员只能查看自己录入的订单）
      list.querySelectorAll('[data-addviewcustomer]').forEach(el => {
        el.addEventListener('click', async () => {
          const name = el.getAttribute('data-addviewcustomer');
          const block = el.closest('[data-view-customer-manage]');
          const sel = block ? block.querySelector('.customer-add-select') : null;
          if (!sel || !sel.value) { alert('请选择客户'); return; }
          const cid = sel.value;
          const picked = customerList.find(c => c.id === cid);
          if (!picked) { alert('该客户已不存在，请关闭后重新打开成员管理'); return; }
          try {
            await api('/api/view-customers/' + encodeURIComponent(name), {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name: picked.name, globalId: picked.id }),
            });
            await loadUsers();
          } catch (err) { alert(err.message); }
        });
      });
      list.querySelectorAll('[data-delviewcustomer]').forEach(el => {
        el.addEventListener('click', async () => {
          const uname = el.getAttribute('data-delviewcustomer');
          const cid = el.getAttribute('data-vcid');
          // 移除后若列表变空 → 该成员自动恢复「是否可查看全部订单 = 是」（可查看全部订单）
          const block = el.closest('[data-view-customer-manage]');
          const chipCount = block ? block.querySelectorAll('.customer-chip').length : 0;
          if (!confirm('确定从「可查看客户列表」中移除该客户吗？' +
            (chipCount <= 1
              ? '移除后该成员将恢复为「可查看全部订单」。'
              : '移除后该客户的订单将不再显示在该成员的订单列表中。'))) return;
          try {
            await api('/api/view-customers/' + encodeURIComponent(uname) + '/' + encodeURIComponent(cid), { method: 'DELETE' });
            await loadUsers();
          } catch (err) { alert(err.message); }
        });
      });
    } catch (err) {
      document.getElementById('userMsg').className = 'msg err';
      document.getElementById('userMsg').textContent = err.message;
    }
  }



  document.getElementById('btnAddUser').addEventListener('click', async () => {
    const msg = document.getElementById('userMsg');
    msg.className = 'msg';
    const username = document.getElementById('newUserName').value.trim();
    const password = document.getElementById('newUserPwd').value;
    // 职位（手动输入）：新增成员不再有「业务部 / 部门主管 / 总经理」分类
    const position = document.getElementById('newUserPosition').value.trim();
    if (!username || !password) {
      msg.className = 'msg err';
      msg.textContent = '请填写用户名和密码';
      return;
    }
    try {
      await api('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, position }),
      });
      msg.className = 'msg ok';
      msg.textContent = '添加成功（权限请在下方成员列表中逐个设置）';
      document.getElementById('newUserName').value = '';
      document.getElementById('newUserPwd').value = '';
      document.getElementById('newUserPosition').value = '';
      await loadUsers();
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 生产方管理 ----------
  document.getElementById('btnProducers').addEventListener('click', async () => {
    const msg = document.getElementById('producerMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('producersModal').classList.add('show');
    await loadProducers();
  });

  async function loadProducers() {
    const list = document.getElementById('producerList');
    // 试用版数量限制：生产方最多 1 个（达到上限时禁用「添加生产方」并提示订阅可解除限制）
    await refreshTrialLimits();
    applyTrialLimit('producers', 'producerTrialHint', 'btnAddProducer');
    try {
      const data = await api('/api/producers');
      const producers = data.producers || [];
      if (!producers.length) {
        list.innerHTML = '<div class="producer-empty">暂无生产方</div>';
        return;
      }
      list.innerHTML = producers.map(p =>
        '<div class="producer-row">' +
          '<div>' +
            '<div class="producer-name-row">' +
              '<div class="producer-short">' + esc(p.username) + '</div>' +
              '<select class="producer-nature-select" data-producer-nature="' + esc(p.id) + '"' +
                ' title="生产方性质（自产 / 外购）：选择后立即保存">' +
                '<option value="self"' + (p.nature === 'purchased' ? '' : ' selected') + '>自产</option>' +
                '<option value="purchased"' + (p.nature === 'purchased' ? ' selected' : '') + '>外购</option>' +
              '</select>' +
            '</div>' +
            editTextHtml('producer', p.id, p.username, p.description, '未填写说明', 'producer-desc') +
          '</div>' +
          '<div class="producer-row-actions">' +
            '<button class="btn-secondary-sm" data-resetpwdproducer="' + esc(p.username) + '">重置密码</button>' +
            '<button class="btn-danger" data-delproducer="' + esc(p.id) + '">删除</button>' +
          '</div>' +
        '</div>').join('');
      // 说明可点击修改
      bindDescEditors(list, () => loadProducers());
      // 生产方性质（自产 / 外购）：列表内直接切换，选择后立即保存
      list.querySelectorAll('[data-producer-nature]').forEach(el => {
        el.addEventListener('change', async () => {
          const id = el.getAttribute('data-producer-nature');
          const nature = el.value;
          el.disabled = true;
          try {
            await api('/api/producers/' + encodeURIComponent(id) + '/nature', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ nature }),
            });
            producersCache = [];
            await loadProducers();
            render();
          } catch (err) {
            alert(err.message);
            producersCache = [];
            await loadProducers();
          }
        });
      });
      // 重置生产方登录密码（复用「重置密码」弹窗）
      list.querySelectorAll('[data-resetpwdproducer]').forEach(el => {
        el.addEventListener('click', () => {
          const name = el.getAttribute('data-resetpwdproducer');
          document.getElementById('resetPwdUser').value = name;
          document.getElementById('resetPwdValue').value = '';
          const msg = document.getElementById('resetPwdMsg');
          msg.className = 'msg';
          msg.textContent = '';
          document.getElementById('resetPwdModal').classList.add('show');
        });
      });
      list.querySelectorAll('[data-delproducer]').forEach(el => {
        el.addEventListener('click', async () => {
          const id = el.getAttribute('data-delproducer');
          if (!confirm('确定删除该生产方吗？')) return;
          try {
            await api('/api/producers/' + encodeURIComponent(id), { method: 'DELETE' });
            producersCache = [];
            await loadProducers();
            render();
          } catch (err) { alert(err.message); }
        });
      });
    } catch (err) {
      list.innerHTML = '<div class="producer-empty">加载失败：' + esc(err.message) + '</div>';
    }
  }

  document.getElementById('btnAddProducer').addEventListener('click', async () => {
    const msg = document.getElementById('producerMsg');
    msg.className = 'msg';
    const username = document.getElementById('newProducerShort').value.trim();
    const password = document.getElementById('newProducerPwd').value;
    const description = document.getElementById('newProducerDesc').value.trim();
    const nature = document.getElementById('newProducerNature').value;
    if (!username) {
      msg.className = 'msg err';
      msg.textContent = '请输入用户名';
      return;
    }
    if (!password) {
      msg.className = 'msg err';
      msg.textContent = '请输入密码（生产方用它登录）';
      return;
    }
    try {
      await api('/api/producers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, description, nature }),
      });
      msg.className = 'msg ok';
      msg.textContent = '添加成功（生产方可用该用户名和密码登录）';
      document.getElementById('newProducerShort').value = '';
      document.getElementById('newProducerPwd').value = '';
      document.getElementById('newProducerDesc').value = '';
      document.getElementById('newProducerNature').value = 'self';
      producersCache = [];
      await loadProducers();
      render();
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 客户管理（全局客户列表；供成员管理为业务部分配客户） ----------
  document.getElementById('btnCustomers').addEventListener('click', async () => {
    const msg = document.getElementById('customerListMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('customersModal').classList.add('show');
    await loadCustomerList();
  });

  async function loadCustomerList() {
    const list = document.getElementById('customerListRows');
    // 试用版数量限制：客户最多 1 个（达到上限时禁用「添加客户」并提示订阅可解除限制）
    await refreshTrialLimits();
    applyTrialLimit('customers', 'customerTrialHint', 'btnAddCustomer');
    try {
      const data = await api('/api/customer-list');
      const customers = data.customers || [];
      customerListCache = customers;
      if (!customers.length) {
        list.innerHTML = '<div class="producer-empty">暂无客户</div>';
        return;
      }
      list.innerHTML = customers.map(c =>
        '<div class="producer-row">' +
          '<div>' +
            '<div class="producer-short">' + esc(c.name) + '</div>' +
            editTextHtml('customer', c.id, c.name, c.description, '未填写说明', 'producer-desc') +
          '</div>' +
          '<div class="producer-row-actions">' +
            '<button class="btn-secondary-sm" data-resetpwdcustomer="' + esc(c.name) + '">重置密码</button>' +
            '<button class="btn-danger" data-delcustomerlist="' + esc(c.id) + '">删除</button>' +
          '</div>' +
        '</div>').join('');
      // 说明可点击修改
      bindDescEditors(list, () => loadCustomerList());
      // 重置客户登录密码（复用「重置密码」弹窗）
      list.querySelectorAll('[data-resetpwdcustomer]').forEach(el => {
        el.addEventListener('click', () => {
          const name = el.getAttribute('data-resetpwdcustomer');
          document.getElementById('resetPwdUser').value = name;
          document.getElementById('resetPwdValue').value = '';
          const msg = document.getElementById('resetPwdMsg');
          msg.className = 'msg';
          msg.textContent = '';
          document.getElementById('resetPwdModal').classList.add('show');
        });
      });
      list.querySelectorAll('[data-delcustomerlist]').forEach(el => {
        el.addEventListener('click', async () => {
          const id = el.getAttribute('data-delcustomerlist');
          if (!confirm('确定删除该客户吗？（已分配给成员的记录不会自动移除）')) return;
          try {
            await api('/api/customer-list/' + encodeURIComponent(id), { method: 'DELETE' });
            customerListCache = [];
            await loadCustomerList();
          } catch (err) { alert(err.message); }
        });
      });
    } catch (err) {
      list.innerHTML = '<div class="producer-empty">加载失败：' + esc(err.message) + '</div>';
    }
  }

  document.getElementById('btnAddCustomer').addEventListener('click', async () => {
    const msg = document.getElementById('customerListMsg');
    msg.className = 'msg';
    const name = document.getElementById('newCustomerName').value.trim();
    const password = document.getElementById('newCustomerPwd').value;
    const description = document.getElementById('newCustomerDesc').value.trim();
    if (!name) {
      msg.className = 'msg err';
      msg.textContent = '请输入用户名';
      return;
    }
    if (!password) {
      msg.className = 'msg err';
      msg.textContent = '请输入密码（客户用它登录）';
      return;
    }
    try {
      await api('/api/customer-list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password, description }),
      });
      msg.className = 'msg ok';
      msg.textContent = '添加成功（客户可用该用户名和密码登录）';
      document.getElementById('newCustomerName').value = '';
      document.getElementById('newCustomerPwd').value = '';
      document.getElementById('newCustomerDesc').value = '';
      customerListCache = [];
      await loadCustomerList();
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 列表内文字编辑（成员备注 / 生产方说明 / 客户说明 共用） ----------
  const EDIT_KINDS = {
    user: {
      label: '成员',
      field: '备注',
      hint: '请输入备注（留空即清除备注）',
      key: 'remark',
      api: (id) => '/api/users/' + encodeURIComponent(id) + '/remark',
    },
    // 成员职位（「业务部 / 部门主管 / 总经理」分类取消后改为手动输入的职位）
    position: {
      label: '成员',
      field: '职位',
      hint: '请输入职位（手动输入，留空即清除职位）',
      key: 'position',
      api: (id) => '/api/users/' + encodeURIComponent(id) + '/position',
    },
    producer: {
      label: '生产方',
      field: '说明',
      hint: '请输入说明（留空即清除说明）',
      key: 'description',
      api: (id) => '/api/producers/' + encodeURIComponent(id) + '/description',
    },
    customer: {
      label: '客户',
      field: '说明',
      hint: '请输入说明（留空即清除说明）',
      key: 'description',
      api: (id) => '/api/customer-list/' + encodeURIComponent(id) + '/description',
    },
  };
  let editTarget = null; // { kind, id, onSaved }

  // 行内可点击编辑的文字（成员备注 / 生产方说明 / 客户说明）
  function editTextHtml(kind, id, name, value, emptyText, cls) {
    const text = String(value || '').trim();
    return '<div class="' + esc(cls) + ' desc-editable" data-desc-kind="' + esc(kind) +
      '" data-desc-id="' + esc(id) + '" data-desc-name="' + esc(name) + '"' +
      ' title="' + (text ? '点击修改' : '点击添加') + '">' +
      (text ? esc(text) : '<span class="desc-empty">' + esc(emptyText) + '</span>') +
      '</div>';
  }

  // 打开编辑弹窗（标题 / 字段名 / 提示语按对象类型切换）
  function openEditModal(kind, id, name, current, onSaved) {
    const def = EDIT_KINDS[kind];
    if (!def) return;
    editTarget = { kind, id, onSaved };
    document.getElementById('remarkTitle').textContent = def.label + def.field;
    document.getElementById('remarkUserLabel').textContent = def.label;
    document.getElementById('remarkUser').value = name || id || '';
    document.getElementById('remarkFieldLabel').textContent = def.field;
    const ta = document.getElementById('remarkText');
    ta.placeholder = def.hint;
    ta.value = current || '';
    const msg = document.getElementById('remarkMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('remarkModal').classList.add('show');
    ta.focus();
  }

  // 绑定列表内可点击编辑的文字（成员备注 / 生产方说明 / 客户说明）
  function bindDescEditors(list, onSaved) {
    list.querySelectorAll('[data-desc-kind]').forEach(el => {
      el.addEventListener('click', () => {
        const empty = el.querySelector('.desc-empty');
        openEditModal(el.getAttribute('data-desc-kind'), el.getAttribute('data-desc-id'),
          el.getAttribute('data-desc-name'), empty ? '' : el.textContent.trim(), onSaved);
      });
    });
  }

  document.getElementById('btnSaveRemark').addEventListener('click', async () => {
    const msg = document.getElementById('remarkMsg');
    msg.className = 'msg';
    const value = document.getElementById('remarkText').value.trim();
    if (!editTarget) { msg.className = 'msg err'; msg.textContent = '请选择要修改的对象'; return; }
    const def = EDIT_KINDS[editTarget.kind];
    if (!def) { msg.className = 'msg err'; msg.textContent = '未知的对象类型'; return; }
    try {
      const payload = {};
      payload[def.key] = value;
      await api(def.api(editTarget.id), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      msg.className = 'msg ok';
      msg.textContent = def.field + '已保存';
      if (editTarget.onSaved) await editTarget.onSaved();
      setTimeout(() => document.getElementById('remarkModal').classList.remove('show'), 500);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 重置密码 ----------
  document.getElementById('btnSaveResetPwd').addEventListener('click', async () => {
    const msg = document.getElementById('resetPwdMsg');
    msg.className = 'msg';
    const username = document.getElementById('resetPwdUser').value;
    const newPassword = document.getElementById('resetPwdValue').value;
    if (!newPassword) {
      msg.className = 'msg err';
      msg.textContent = '请输入新密码';
      return;
    }
    try {
      await api('/api/users/' + encodeURIComponent(username) + '/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword }),
      });
      msg.className = 'msg ok';
      msg.textContent = '重置成功';
      setTimeout(() => document.getElementById('resetPwdModal').classList.remove('show'), 800);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 团队设置 ----------
  document.getElementById('btnSettings').addEventListener('click', () => {
    const msg = document.getElementById('settingsMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('siteNameInput').value = currentUser.teamName || currentUser.username;
    // 版本 / 有效期：试用账号为「无限期试用」，专业版显示有效期（订阅 / 续费由超级管理员开通）
    document.getElementById('teamExpireInput').value =
      currentStateText() + '｜订阅或续费请联系超级管理员';
    document.getElementById('settingsModal').classList.add('show');
  });
  document.getElementById('btnSaveSettings').addEventListener('click', async () => {
    const msg = document.getElementById('settingsMsg');
    msg.className = 'msg';
    const teamName = document.getElementById('siteNameInput').value.trim();
    if (!teamName) {
      msg.className = 'msg err';
      msg.textContent = '请输入团队名称';
      return;
    }
    try {
      const data = await api('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teamName: teamName }),
      });
      const name = (data.settings && data.settings.teamName) || teamName;
      currentUser.teamName = name;
      document.getElementById('siteName').textContent = name;
      document.title = name;
      renderTeamBadge();
      msg.className = 'msg ok';
      msg.textContent = '保存成功';
      setTimeout(() => document.getElementById('settingsModal').classList.remove('show'), 800);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 退出 ----------
  document.getElementById('btnLogout').addEventListener('click', async () => {
    await fetch('/api/logout', { method: 'POST' });
    location.href = '/';
  });

  // ---------- 订阅 / 续费（团队管理员）：选择套餐 → 提交订阅申请，由超级管理员开通 ----------
  //   · 「订阅」= 试用账号升级为专业用户；「续费」= 专业版延长有效期；
  //   · 订阅时限与价格保持不变（days 与超级管理员「开通 / 续费」接口 /api/teams/<用户名>/renew 口径一致）；
  //   · 收款方式已取消：原「微信支付 / 收款二维码 / 付款成功」界面演示已移除，一律由超级管理员开通。
  const SUBSCRIBE_PLANS = [
    { id: 'm1', term: '1 个月', price: 100, days: 30 },
    { id: 'y1', term: '1 年', price: 1000, days: 365 },
    { id: 'y3', term: '3 年', price: 2500, days: 1095 },
    { id: 'y5', term: '5 年', price: 4000, days: 1825 }
  ];
  let pickedPlan = SUBSCRIBE_PLANS[0];

  // 当前操作是「订阅」（试用账号 / 订阅已到期）还是「续费」（专业版有效期内）
  function subscribeMode() {
    return (isProTeam && currentUser.status !== 'expired') ? '续费' : '订阅';
  }

  // 当前状态文案（弹窗内展示）
  function currentStateText() {
    const exp = (currentUser.expiresAt || '').slice(0, 10);
    if (isProTeam) {
      const days = daysLeft(currentUser.expiresAt);
      return '专业版（有效期至 ' + (exp || '—') +
        (days >= 0 ? '，剩余 ' + days + ' 天' : '') + '）';
    }
    if (currentUser.status === 'expired') {
      return '试用中（原专业版订阅已于 ' + (exp || '—') + ' 到期）';
    }
    // 试用版（无期限）：功能与专业版基本相同，仅数量受限（成员 / 生产方 / 客户）且页面顶部显示广告位
    return '试用中（无期限，数量受限：成员 2 / 生产方 1 / 客户 1）';
  }

  // 团队标签：「团队名称（登录账号）」；两者相同时不重复显示
  function teamLabel() {
    const tn = currentUser.teamName || currentUser.username;
    return tn === currentUser.username ? tn : tn + '（' + currentUser.username + '）';
  }

  // 金额文案（如 ￥100 / ￥2500）
  function moneyText(price) {
    return '￥' + (Math.round(price * 100) / 100);
  }

  // 日期文案：yyyy/mm/dd
  function slashDate(d) {
    const pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '/' + pad(d.getMonth() + 1) + '/' + pad(d.getDate());
  }

  // 开通后的到期日：从「当前时间」与「原到期时间」中较晚者起，按套餐天数顺延
  // 注：口径与后端 /api/teams/<用户名>/renew 一致（实际到期日以超级管理员开通后为准）
  function proExpireDate(plan) {
    const cur = new Date(currentUser.expiresAt || '').getTime();
    const base = (!isNaN(cur) && cur > Date.now()) ? cur : Date.now();
    return new Date(base + plan.days * 86400000);
  }

  // 渲染套餐卡片（订阅时限与价格保持不变）
  function renderPlans() {
    const box = document.getElementById('subPlanList');
    box.innerHTML = SUBSCRIBE_PLANS.map(function (p) {
      const cls = p.id === pickedPlan.id ? 'plan-card active' : 'plan-card';
      return '<button type="button" class="' + cls + '" data-plan="' + p.id + '">' +
        '<span class="plan-term">' + p.term + '</span>' +
        '<span class="plan-price">' + moneyText(p.price) + '</span>' +
        '</button>';
    }).join('');
    box.querySelectorAll('[data-plan]').forEach(function (el) {
      el.addEventListener('click', function () {
        const picked = SUBSCRIBE_PLANS.filter(function (p) {
          return p.id === el.getAttribute('data-plan');
        })[0];
        if (!picked) return;
        pickedPlan = picked;
        renderPlans();
        updateSubHint();
      });
    });
  }

  // 弹窗提示：已选套餐 + 开通后到期日 + 申请状态
  // （提交后由超级管理员开通；已取消微信收款，不再有扫码 / 付款步骤）
  function updateSubHint() {
    const lines = [
      '已选套餐：' + pickedPlan.term + '　' + moneyText(pickedPlan.price) +
        '（顺延 ' + pickedPlan.days + ' 天）',
      '开通后到期日：' + slashDate(proExpireDate(pickedPlan)) +
        '（从当前时间与原到期时间中较晚者起顺延）',
      '提交后系统会把申请信息（含套餐与收款说明）发送到您的注册邮箱，并抄送管理员提醒；',
      '开通由超级管理员完成，开通前仍按试用账号使用（功能与专业版基本相同，仅数量受限：成员 2 个 / 生产方 1 个 / 客户 1 个，且页面顶部显示广告位）。'
    ];
    const req = currentUser.subscribeRequest;
    if (req && req.at) {
      lines.push('您已于 ' + fmtDateTime(req.at) + ' 提交过' +
        (req.kind === 'renew' ? '续费' : '订阅') +
        '申请，等待超级管理员处理；如需补充信息可再次提交（会覆盖上一次）。');
    }
    document.getElementById('subHint').innerHTML = lines.join('<br>');
  }

  // 打开弹窗（选择套餐 → 提交申请）：
  //   试用账号显示「订阅专业版」，专业版账号显示「续费专业版」
  document.getElementById('btnSubscribe').addEventListener('click', function () {
    const msg = document.getElementById('subMsg');
    msg.className = 'msg';
    msg.textContent = '';
    const mode = subscribeMode();
    pickedPlan = SUBSCRIBE_PLANS[0];
    document.getElementById('subscribeTitle').textContent = mode + '专业版';
    document.getElementById('btnSubmitSubscribe').textContent = '提交' + mode + '申请';
    document.getElementById('subTeam').value = teamLabel();
    document.getElementById('subCurrent').value = currentStateText();
    document.getElementById('subContact').value = currentUser.contact || '';
    // 已提交过申请：回填原申请信息（套餐 / 留言），便于修改后重新提交
    const req = currentUser.subscribeRequest;
    if (req && req.plan) {
      const found = SUBSCRIBE_PLANS.filter(function (p) { return p.id === req.plan.id; })[0];
      if (found) pickedPlan = found;
    }
    document.getElementById('subNote').value = req ? (req.note || '') : '';
    renderPlans();
    updateSubHint();
    document.getElementById('subscribeModal').classList.add('show');
  });

  // 提交订阅 / 续费申请（含所选套餐）：超级管理员在控制台开通后即成为专业版
  document.getElementById('btnSubmitSubscribe').addEventListener('click', async () => {
    const msg = document.getElementById('subMsg');
    msg.className = 'msg';
    const btn = document.getElementById('btnSubmitSubscribe');
    const mode = subscribeMode();
    btn.disabled = true;
    try {
      const data = await api('/api/subscribe-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: document.getElementById('subContact').value.trim(),
          note: document.getElementById('subNote').value.trim(),
          plan: {
            id: pickedPlan.id,
            term: pickedPlan.term,
            price: pickedPlan.price,
            days: pickedPlan.days
          },
        }),
      });
      currentUser.subscribeRequest = data.subscribeRequest || { at: new Date().toISOString() };
      currentUser.contact = document.getElementById('subContact').value.trim();
      msg.className = 'msg ok';
      // 申请邮件发送结果（发给申请人本人；有配置管理员提醒邮箱时同时抄送）
      const m = data.mail || {};
      let tip = mode + '申请已提交，超级管理员会尽快为您开通专业版';
      if (m.devMode) {
        tip += '（当前为调试模式，未真实发送邮件）';
      } else if (m.ok) {
        tip += '；申请邮件已发送至 ' + (m.to || '您的注册邮箱') +
          (m.cc && m.cc.length ? '，并已抄送管理员提醒' : '');
      } else if (m.error) {
        tip += '；但申请邮件未能发送：' + m.error;
      }
      msg.textContent = tip;
      updateSubscribeButton();
      setTimeout(function () { document.getElementById('subscribeModal').classList.remove('show'); }, 1000);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    } finally {
      btn.disabled = false;
    }
  });



  init();
<\/script>
</body>
</html>`}function _e(t,e){let a=String(e??"").trim()||"订单管理系统";return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${j(a)} · 团队用户管理</title>
${Ee(t)}
<style>
${Te}
  .topbar {
    background: #fff;
    border-bottom: 1px solid #ebebe8;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .topbar .brand {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .topbar .user-area {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: #6b6b68;
  }
  .btn-ghost {
    background: transparent;
    color: #6b6b68;
    padding: 6px 12px;
    font-size: 13px;
  }
  .btn-ghost:hover { background: #f1f1ef; }
  .role-tag {
    font-size: 11px;
    background: #e7f0fb;
    color: #2383e2;
    padding: 2px 8px;
    border-radius: 10px;
    font-weight: 400;
  }
  .container {
    max-width: 860px;
    margin: 0 auto;
    padding: 24px 20px 80px;
  }
  .stat-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
  .stat-card {
    flex: 1 1 140px;
    background: #fff;
    border: 1px solid #ebebe8;
    border-radius: 8px;
    padding: 12px 14px;
  }
  .stat-card .num { font-size: 20px; font-weight: 600; }
  .stat-card .label { font-size: 12px; color: #9b9a97; margin-top: 2px; }
  .toolbar { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
  .toolbar input { flex: 1; max-width: 300px; padding: 8px 12px; }
  .section-title {
    font-size: 13px;
    font-weight: 600;
    color: #6b6b68;
    margin-bottom: 10px;
  }
  .team-list { display: flex; flex-direction: column; gap: 10px; }
  .team-card {
    background: #fff;
    border: 1px solid #e0e0dc;
    border-radius: 8px;
    padding: 14px;
  }
  .team-head { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .team-name { font-size: 15px; font-weight: 600; }
  .team-user { font-size: 13px; color: #9b9a97; }
  .status-badge {
    font-size: 11px;
    padding: 2px 9px;
    border-radius: 10px;
    background: #f1f1ef;
    color: #6b6b68;
  }
  .status-badge.trial { background: #e7f0fb; color: #2383e2; }
  .status-badge.active { background: #e6f4ee; color: #0f7b6c; }
  .status-badge.disabled { background: #f1f1ef; color: #6b6b68; }
  .status-badge.expired { background: #fdecec; color: #eb5757; }
  .status-badge.renew { background: #fdf0e3; color: #d9730d; }
  .renew-request {
    margin-top: 8px;
    font-size: 12px;
    line-height: 1.7;
    color: #d9730d;
    background: #fdf0e3;
    border-radius: 6px;
    padding: 6px 10px;
    word-break: break-word;
  }
  .team-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 16px;
    font-size: 12px;
    color: #6b6b68;
    margin-top: 8px;
  }
  .team-remark {
    margin-top: 8px;
    font-size: 12px;
    color: #6b6b68;
    background: #f7f7f5;
    border-radius: 6px;
    padding: 6px 10px;
    word-break: break-word;
    cursor: pointer;
  }
  .team-remark:hover { color: #2383e2; background: #f1f1ef; }
  .desc-empty { color: #c9c9c5; }
  .team-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
  .btn-secondary-sm {
    background: #f1f1ef;
    color: #37352f;
    padding: 6px 12px;
    font-size: 13px;
  }
  .btn-secondary-sm:hover { background: #e8e8e5; }
  .btn-danger {
    background: #fff;
    color: #eb5757;
    border: 1px solid #f3d2d2;
    padding: 6px 12px;
    font-size: 13px;
  }
  .btn-danger:hover { background: #fdecec; }
  /* 实心红按钮：彻底删除团队用户的最终确认 */
  .btn-danger-solid { background: #eb5757; color: #fff; padding: 9px 18px; }
  .btn-danger-solid:hover { background: #d64545; }
  /* 删除确认弹窗中的红色警告区 */
  .del-warn {
    background: #fdecec;
    border: 1px solid #f5c6c6;
    color: #a03333;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 13px;
    line-height: 1.7;
    margin-bottom: 14px;
  }
  .msg { font-size: 13px; margin-top: 10px; min-height: 18px; }
  .msg.ok { color: #0f7b6c; }
  .msg.err { color: #eb5757; }
  .empty { text-align: center; color: #b0b0ad; font-size: 14px; padding: 40px 0; }
  .quick-row { display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; }
  .modal-mask {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(15,15,15,0.4);
    z-index: 100;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .modal-mask.show { display: flex; }
  .modal {
    background: #fff;
    border-radius: 12px;
    width: 100%;
    max-width: 420px;
    max-height: 85vh;
    overflow-y: auto;
    padding: 24px;
  }
  .modal h2 { font-size: 18px; margin-bottom: 18px; font-weight: 600; }
  .modal .field { margin-bottom: 14px; }
  .modal .field label {
    display: block;
    font-size: 13px;
    color: #6b6b68;
    margin-bottom: 6px;
    font-weight: 500;
  }
  .modal .field input, .modal .field textarea { width: 100%; }
  .modal .field textarea { resize: vertical; }
  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }
  .btn-secondary { background: #f1f1ef; color: #37352f; padding: 9px 18px; }
  .btn-secondary:hover { background: #e8e8e5; }
  .btn-primary-sm { background: #2383e2; color: #fff; padding: 9px 18px; }
  .btn-primary-sm:hover { background: #1a6fc4; }
  /* 团队卡片：注册邮箱「未验证」标记 */
  .badge-unverified {
    font-size: 11px;
    color: #b26b00;
    background: #fdf0d5;
    border-radius: 10px;
    padding: 1px 6px;
    margin-left: 6px;
  }
  /* 邮件设置弹窗：复选框一行 */
  .modal .field label.check-line {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 400;
    color: #37352f;
    line-height: 1.5;
  }
  .modal .field input[type="checkbox"] { width: auto; margin: 0; flex: 0 0 auto; }
  /* 邮件设置弹窗：分组卡片、并排字段与说明文字 */
  .mail-group {
    border: 1px solid #ebebe8;
    border-radius: 8px;
    padding: 12px 12px 4px;
    margin-bottom: 14px;
    background: #fdfdfc;
  }
  .mail-group-title {
    font-size: 13px;
    font-weight: 600;
    color: #37352f;
    margin-bottom: 10px;
  }
  .field-row { display: flex; gap: 10px; }
  .field-row .field { flex: 1 1 0; min-width: 0; }
  .hint-line {
    font-size: 12px;
    color: #9b9a97;
    line-height: 1.6;
    margin: 0 0 10px;
  }
  /* 系统设置：网站图标预览 */
  .favicon-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 14px;
  }
  .favicon-preview {
    width: 32px;
    height: 32px;
    flex: 0 0 auto;
    border: 1px solid #ebebe8;
    border-radius: 6px;
    background: #fff;
    object-fit: contain;
  }
  .favicon-hint {
    font-size: 12px;
    color: #9b9a97;
    line-height: 1.6;
  }
  /* ================= 手机 / 平板自适应（超级管理员控制台） ================= */
  @media (max-width: 900px) {
    .topbar { padding: 10px 14px; }
    .container { padding: 20px 16px 72px; }
    .btn-ghost { padding: 6px 10px; }
  }
  @media (max-width: 700px) {
    /* 顶栏按钮换到第二行右对齐；团队卡片与按钮按整行排布 */
    .topbar { flex-wrap: wrap; gap: 6px 10px; }
    .topbar .brand { font-size: 15px; }
    .topbar .user-area { width: 100%; flex-wrap: wrap; justify-content: flex-end; gap: 6px; }
    .btn-ghost { padding: 6px 8px; font-size: 12.5px; }
    .container { padding: 14px 12px 64px; }
    .stat-card { flex: 1 1 calc(50% - 5px); }
    .toolbar { flex-wrap: wrap; }
    .toolbar input { flex: 1 1 100%; max-width: 100%; }
    .team-actions button { flex: 1 1 auto; }
    /* 邮件设置等并排字段（.field-row）在窄屏改为上下排列 */
    .field-row { flex-direction: column; gap: 0; }
    .quick-row button { flex: 1 1 auto; }
    .modal-mask { padding: 10px; align-items: flex-start; }
    .modal { max-width: 100%; max-height: 92vh; padding: 18px 14px; border-radius: 10px; }
    .modal h2 { font-size: 17px; margin-bottom: 14px; }
    .modal-actions { flex-wrap: wrap; }
    /* 表单控件字号 16px：iOS 聚焦时不会自动放大页面 */
    input, textarea, select { font-size: 16px; }
  }
  @media (max-width: 420px) {
    .topbar { padding: 10px; }
    .container { padding: 12px 10px 60px; }
    .stat-card { flex: 1 1 100%; }
    .team-actions button { flex: 1 1 100%; }
  }
</style>
</head>


<body>
  <div class="topbar">
    <div class="brand">
      <span id="siteName">${j(a)}</span>
      <span class="role-tag">超级管理员</span>
    </div>
    <div class="user-area">
      <span id="currentUser"></span>
      <button class="btn-ghost" id="btnMail">邮件设置</button>
      <button class="btn-ghost" id="btnSite">系统设置</button>
      <button class="btn-ghost" id="btnAdminPwd">重置密码</button>
      <button class="btn-ghost" id="btnRefresh">刷新</button>
      <button class="btn-ghost" id="btnLogout">退出</button>
    </div>
  </div>

  <div class="container">
    <div class="stat-row" id="statRow"></div>
    <div class="toolbar">
      <input type="text" id="searchInput" placeholder="搜索团队名称 / 登录账号 / 联系人">
    </div>
    <div class="section-title">团队用户（<span id="teamCount">0</span>）</div>
    <div class="team-list" id="teamList"></div>
    <div class="msg" id="pageMsg"></div>
  </div>

  <!-- 开通 / 续费弹窗（升级为专业版：按套餐天数顺延有效期） -->
  <div class="modal-mask" id="renewModal">
    <div class="modal">
      <h2>开通 / 续费（专业版）</h2>
      <div class="field">
        <label>团队用户</label>
        <input type="text" id="renewTeam" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>当前状态</label>
        <input type="text" id="renewCurrent" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>开通 / 续费天数（从「当前时间」与「原到期时间」中较晚者起顺延）</label>
        <div class="quick-row" id="renewQuick">
          <button class="btn-secondary-sm" data-days="30">1 个月（30 天）</button>
          <button class="btn-secondary-sm" data-days="365">1 年（365 天）</button>
          <button class="btn-secondary-sm" data-days="1095">3 年（1095 天）</button>
          <button class="btn-secondary-sm" data-days="1825">5 年（1825 天）</button>
        </div>
        <input type="number" id="renewDays" min="1" max="3650" step="1" value="30" placeholder="请输入天数">
      </div>
      <div class="msg" id="renewMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="renewModal">取消</button>
        <button class="btn-primary-sm" id="btnConfirmRenew">确定开通 / 续费</button>
      </div>
    </div>
  </div>

  <!-- 重置密码弹窗 -->
  <div class="modal-mask" id="resetPwdModal">
    <div class="modal">
      <h2>重置登录密码</h2>
      <div class="field">
        <label>团队用户</label>
        <input type="text" id="resetPwdTeam" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>新密码</label>
        <input type="password" id="resetPwdValue" placeholder="请输入新密码（至少 6 位）">
      </div>
      <div class="msg" id="resetPwdMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="resetPwdModal">取消</button>
        <button class="btn-primary-sm" id="btnConfirmResetPwd">确定重置</button>
      </div>
    </div>
  </div>

  <!-- 备注弹窗 -->
  <div class="modal-mask" id="remarkModal">
    <div class="modal">
      <h2>团队备注</h2>
      <div class="field">
        <label>团队用户</label>
        <input type="text" id="remarkTeam" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>备注信息</label>
        <textarea id="remarkText" rows="3" maxlength="200" placeholder="请输入备注（留空则清除备注）"></textarea>
      </div>
      <div class="msg" id="remarkMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="remarkModal">取消</button>
        <button class="btn-primary-sm" id="btnConfirmRemark">保存</button>
      </div>
    </div>
  </div>

  <!-- 重置密码弹窗（超级管理员重置**自己**的登录密码） -->
  <div class="modal-mask" id="adminPwdModal">
    <div class="modal">
      <h2>重置密码</h2>
      <div class="field">
        <label>当前账号</label>
        <input type="text" id="adminPwdUser" readonly style="background:#f7f7f5">
      </div>
      <div class="field">
        <label>新密码</label>
        <input type="password" id="adminPwdNew" placeholder="请输入新密码（至少 6 位）">
      </div>
      <div class="field">
        <label>确认新密码</label>
        <input type="password" id="adminPwdConfirm" placeholder="请再次输入新密码">
      </div>
      <div class="hint-line">重置的是<b>当前登录的超级管理员账号</b>的登录密码（无需输入原密码）；重置后请用新密码登录，忘记请妥善保存。</div>
      <div class="msg" id="adminPwdMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="adminPwdModal">取消</button>
        <button class="btn-primary-sm" id="btnConfirmAdminPwd">确定重置</button>
      </div>
    </div>
  </div>

  <!-- 系统设置弹窗（网站名称 + 是否允许新用户注册，全局） -->
  <div class="modal-mask" id="siteModal">
    <div class="modal">
      <h2>系统设置</h2>
      <div class="field">
        <label>网站名称（登录页与页面标题，全局生效）</label>
        <input type="text" id="siteNameInput" maxlength="30" placeholder="请输入网站名称">
      </div>
      <div class="field">
        <label class="check-line">
          <input type="checkbox" id="noRegisterCheck">
          不允许新用户注册（勾选后登录页不再显示「新帐户注册」按钮）
        </label>
      </div>
      <div class="hint-line">默认<b>不勾选</b>=允许注册；勾选并保存后，任何人（包括通过接口提交）都无法再注册新团队账号，已有账号不受影响。</div>
      <div class="field">
        <label>忘记密码联系邮箱（登录页显示；留空则不显示该提示）</label>
        <input type="text" id="supportEmailInput" maxlength="60" placeholder="例如：support@yourdomain.com">
      </div>
      <div class="hint-line">默认 <b>support@cloudnexus.cn</b>。用户忘记密码时，登录页会显示「忘记密码请联系 + 该邮箱」。</div>
      <div class="field">
        <label>网站图标链接（浏览器标签页图标 favicon；留空则使用默认图标）</label>
        <input type="text" id="faviconInput" maxlength="300" placeholder="例如：https://yourdomain.com/favicon.png">
      </div>
      <div class="favicon-row">
        <img id="faviconPreview" class="favicon-preview" alt="图标预览" style="display:none">
        <span class="favicon-hint">填写图片链接（http:// 或 https:// 开头）即可；建议 32×32 / 64×64 的 PNG、ICO 或 SVG。保存后登录页 / 待办页 / 控制台的标签页图标都会使用它。</span>
      </div>
      <div class="field">
        <label>广告代码（试用版页面顶部的广告位；订阅专业版后自动移除）</label>
        <textarea id="adCodeInput" rows="4" maxlength="3000" placeholder="粘贴广告 HTML / JS 代码片段，例如：<a href=&quot;https://example.com&quot;><img src=&quot;https://example.com/ad.png&quot;></a>；留空表示不插入广告"></textarea>
      </div>
      <div class="hint-line">广告只显示在<b>试用版（未订阅 / 订阅已到期）</b>页面顶部；团队订阅为专业版后<b>自动移除广告</b>。支持 HTML / JS 片段（最多 3000 字符），保存后刷新试用版页面即可看到。</div>
      <div class="msg" id="siteMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="siteModal">取消</button>
        <button class="btn-primary-sm" id="btnConfirmSite">保存</button>
      </div>
    </div>
  </div>

  <!-- 邮件设置弹窗（注册邮箱确认码的发件服务） -->
  <div class="modal-mask" id="mailModal">
    <div class="modal">
      <h2>邮件设置（注册邮箱确认码）</h2>
      <div class="field">
        <label>当前状态</label>
        <input type="text" id="mailState" readonly style="background:#f7f7f5">
      </div>
      <!-- 方式一：QQ 邮箱 SMTP（推荐） -->
      <div class="mail-group">
        <div class="mail-group-title">方式一：QQ 邮箱 SMTP（推荐）</div>
        <div class="field">
          <label>SMTP 账号（完整 QQ 邮箱地址）</label>
          <input type="text" id="mailSmtpUser" maxlength="60" autocomplete="off" placeholder="例如：123456789@qq.com">
        </div>
        <div class="field">
          <label>SMTP 授权码（16 位，<b>不是</b> QQ 登录密码；留空表示不修改，填 - 表示清除）</label>
          <input type="text" id="mailSmtpPass" autocomplete="off" placeholder="在 QQ 邮箱「设置 → 账户 → POP3/SMTP服务」开启后生成">
        </div>
        <div class="field-row">
          <div class="field">
            <label>SMTP 服务器</label>
            <input type="text" id="mailSmtpHost" maxlength="60" placeholder="smtp.qq.com">
          </div>
          <div class="field">
            <label>端口（465=SSL，587=STARTTLS）</label>
            <input type="text" id="mailSmtpPort" maxlength="5" placeholder="465">
          </div>
        </div>
        <div class="hint-line">获取授权码：网页版 QQ 邮箱 → 右上角「设置」→「账户」→ 开启「POP3/SMTP服务」→ 按提示验证后生成授权码（开启后服务商通常会发送一封含授权码的邮件）。</div>
      </div>
      <!-- 方式二：Resend / 通用字段 -->
      <div class="mail-group">
        <div class="mail-group-title">方式二：Resend API（可选，与上面二选一）</div>
        <div class="field">
          <label>Resend API Key（留空表示不修改，填 - 表示清除）</label>
          <input type="text" id="mailApiKey" autocomplete="off" placeholder="re_xxxxxxxx">
        </div>
      </div>
      <!-- 订阅 / 续费申请邮件：自定义内容（文字说明 + 最多 3 个收款二维码图片链接） -->
      <div class="mail-group">
        <div class="mail-group-title">订阅 / 续费申请邮件（发给申请人，并抄送管理员提醒）</div>
        <div class="field">
          <label>管理员提醒邮箱（抄送；留空默认抄送到「发件邮箱」）</label>
          <input type="text" id="mailAdminNotify" maxlength="60" autocomplete="off" placeholder="例如：admin@example.com">
        </div>
        <div class="field">
          <label>自定义文字说明（选填，会插入申请邮件正文）</label>
          <textarea id="mailSubText" rows="3" maxlength="1000" placeholder="例如：请扫码支付后将截图回复本邮件，我们会在 1 个工作日内为您开通专业版。"></textarea>
        </div>
        <div class="field">
          <label>收款二维码图片链接 1（http:// 或 https:// 开头；留空则不显示）</label>
          <input type="text" id="mailQr1" maxlength="300" autocomplete="off" placeholder="https://example.com/qr-wechat.png">
        </div>
        <div class="field">
          <label>收款二维码图片链接 2（选填）</label>
          <input type="text" id="mailQr2" maxlength="300" autocomplete="off" placeholder="https://example.com/qr-alipay.png">
        </div>
        <div class="field">
          <label>收款二维码图片链接 3（选填）</label>
          <input type="text" id="mailQr3" maxlength="300" autocomplete="off" placeholder="https://example.com/qr-bank.png">
        </div>
        <div class="hint-line">团队账号在待办页点「订阅 / 续费」提交申请后，系统会自动把「申请人信息 + 套餐信息 + 上面的文字说明与二维码」发送到该团队的注册邮箱，并抄送给上面填写的管理员邮箱；申请记录仍会出现在控制台，由你点「开通 / 续费」处理。</div>
      </div>
      <div class="field">
        <label>发件邮箱地址（QQ 邮箱请与 SMTP 账号一致；Resend 请填已验证域名的邮箱）</label>
        <input type="text" id="mailFrom" maxlength="60" placeholder="留空则默认使用 SMTP 账号">
      </div>
      <div class="field">
        <label>发件人名称（选填）</label>
        <input type="text" id="mailFromName" maxlength="30" placeholder="例如：订单管理系统">
      </div>
      <div class="field">
        <label class="check-line">
          <input type="checkbox" id="mailDevMode">
          调试模式：不真实发送邮件，直接把确认码显示在页面上（仅供本地调试 / 演示）
        </label>
      </div>
      <div class="field">
        <label>发送测试邮件到（可选，先保存再测试）</label>
        <input type="text" id="mailTestTo" maxlength="60" placeholder="例如：you@example.com">
      </div>
      <div class="msg" id="mailMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="mailModal">取消</button>
        <button class="btn-secondary" id="btnMailTest">发送测试邮件</button>
        <button class="btn-primary-sm" id="btnConfirmMail">保存</button>
      </div>
    </div>
  </div>

  <!-- 彻底删除团队用户弹窗（仅「已停用」的团队可用；需输入登录账号二次确认） -->
  <div class="modal-mask" id="delTeamModal">
    <div class="modal">
      <h2>彻底删除团队用户</h2>
      <div class="field">
        <label>团队用户</label>
        <input type="text" id="delTeamName" readonly style="background:#f7f7f5">
      </div>
      <div class="del-warn" id="delTeamWarn"></div>
      <div class="field">
        <label>请输入该团队的登录账号以确认删除</label>
        <input type="text" id="delTeamConfirm" autocomplete="off" placeholder="请输入登录账号">
      </div>
      <div class="msg" id="delTeamMsg"></div>
      <div class="modal-actions">
        <button class="btn-secondary" data-close="delTeamModal">取消</button>
        <button class="btn-danger-solid" id="btnConfirmDelTeam">确认删除</button>
      </div>
    </div>
  </div>

<script>
  let teams = [];
  let siteNameCache = '订单管理系统';
  // 是否允许新用户注册（默认允许；仅超级管理员可在「系统设置」中关闭）
  let allowRegisterCache = true;
  // 登录页「忘记密码请联系」的邮箱（默认 support@cloudnexus.cn；为空则不显示该提示）
  let supportEmailCache = 'support@cloudnexus.cn';
  // 网站图标（favicon）图片链接（为空 = 使用浏览器默认图标）
  let faviconCache = '';
  // 试用版页面顶部「广告位」的广告代码（HTML / JS 片段；为空 = 不插入广告）
  let adCodeCache = '';
  let mailCache = null; // 邮件设置缓存（仅超级管理员使用）
  let currentTeamName = null; // 当前弹窗操作的团队（登录账号）

  function esc(s) {
    return String(s === undefined || s === null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  async function api(url, opts) {
    let res;
    try {
      res = await fetch(url, opts);
    } catch (e) {
      // 网络层失败（服务未启动 / 地址不可达 / 连接被中断）
      throw new Error('网络请求失败：无法连接服务器。请确认服务已启动并访问正确地址（本地调试请先运行 npm run dev；线上请检查网络与部署状态）');
    }
    if (res.status === 401) { location.href = '/'; throw new Error('未登录'); }
    const data = await res.json().catch(function () { return {}; });
    if (!res.ok) throw new Error(data.error || '请求失败');
    return data;
  }
  function daysLeft(iso) {
    if (!iso) return -1;
    const end = new Date(iso).getTime();
    if (isNaN(end)) return -1;
    return Math.ceil((end - Date.now()) / 86400000);
  }
  function fmtDate(iso) {
    return iso ? String(iso).slice(0, 10) : '—';
  }
  // 团队状态：已停用 / 专业版（订阅有效期内） / 订阅已到期（试用模式） / 试用中（无期限）
  function statusOf(t) {
    if (t.status === 'disabled') return { text: '已停用', cls: 'disabled' };
    if (t.pro) {
      const d = daysLeft(t.expiresAt);
      return { text: '专业版' + (d >= 0 ? '（剩余 ' + d + ' 天）' : ''), cls: 'active' };
    }
    if (t.status === 'expired') return { text: '订阅已到期（试用）', cls: 'expired' };
    return { text: '试用中（无期限）', cls: 'trial' };
  }

  function renderStats() {
    const total = teams.length;
    const trial = teams.filter(function (t) {
      return !t.pro && t.status !== 'disabled' && t.status !== 'expired';
    }).length;
    const pro = teams.filter(function (t) { return !!t.pro; }).length;
    const bad = teams.filter(function (t) { return t.status === 'disabled' || t.status === 'expired'; }).length;
    const pending = teams.filter(function (t) { return t.subscribeRequest && t.subscribeRequest.at; }).length;
    const cards = [
      { num: total, label: '团队用户总数' },
      { num: trial, label: '试用账号（无期限）' },
      { num: pro, label: '专业版' },
      { num: bad, label: '已停用 / 订阅已到期' },
      { num: pending, label: '待处理订阅 / 续费申请' }
    ];
    document.getElementById('statRow').innerHTML = cards.map(function (c) {
      return '<div class="stat-card"><div class="num">' + c.num +
        '</div><div class="label">' + esc(c.label) + '</div></div>';
    }).join('');
  }

  function renderList() {
    const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
    const list = teams.filter(function (t) {
      if (!keyword) return true;
      return (t.teamName + ' ' + t.username + ' ' + t.email + ' ' + t.contact + ' ' + t.remark)
        .toLowerCase().indexOf(keyword) !== -1;
    });
    document.getElementById('teamCount').textContent = list.length;
    const box = document.getElementById('teamList');
    if (!list.length) {
      box.innerHTML = '<div class="empty">' +
        (teams.length ? '没有匹配的团队用户' : '暂无团队用户，用户在登录页点击「新帐户注册」后会自动出现在这里') +
        '</div>';
      return;
    }
    box.innerHTML = list.map(function (t) {
      const st = statusOf(t);
      const remark = t.remark
        ? esc(t.remark)
        : '<span class="desc-empty">点击填写备注（留空即清除）</span>';
      const toggleText = t.rawStatus === 'disabled' ? '开通' : '停用';
      // 订阅 / 续费申请（含所选套餐）：超级管理员点「开通 / 续费」处理后自动清除
      const req = t.subscribeRequest && t.subscribeRequest.at ? t.subscribeRequest : null;
      const reqKind = req && req.kind === 'renew' ? '续费申请' : '订阅申请';
      const renewBadge = req ? '<span class="status-badge renew">' + reqKind + '</span>' : '';
      // 团队名称与登录账号相同时不再重复显示「登录账号」
      const userLine = t.teamName === t.username
        ? ''
        : '<span class="team-user">登录账号：' + esc(t.username) + '</span>';
      const reqPlanText = req && req.plan
        ? '｜申请套餐：' + esc(req.plan.term) + ' ' + esc('￥' + req.plan.price) +
          '（' + esc(String(req.plan.days)) + ' 天）'
        : '';
      const renewBlock = req
        ? '<div class="renew-request">📩 ' + reqKind + '：' + esc(fmtDate(req.at)) + ' ' +
          esc(String(req.at).slice(11, 16)) +
          reqPlanText +
          (req.contact ? '｜联系方式：' + esc(req.contact) : '') +
          (req.note ? '｜留言：' + esc(req.note) : '') +
          '（点「开通 / 续费」处理后自动清除）</div>'
        : '';
      // 到期时间：试用账号为无限期试用，专业版显示订阅到期日
      const expireText = t.pro
        ? esc(fmtDate(t.expiresAt))
        : (t.status === 'expired'
          ? esc(fmtDate(t.expiresAt)) + '（已到期，试用模式）'
          : '无限期试用');
      return '<div class="team-card">' +
        '<div class="team-head">' +
          '<span class="team-name">' + esc(t.teamName) + '</span>' +
          userLine +
          '<span class="status-badge ' + st.cls + '">' + esc(st.text) + '</span>' +
          renewBadge +
        '</div>' +
        '<div class="team-meta">' +
          '<span>联系人：' + (t.contact ? esc(t.contact) : '—') + '</span>' +
          '<span>邮箱：' + (t.email ? esc(t.email) : '—') +
            (t.emailVerified === false ? '<span class="badge-unverified">未验证</span>' : '') +
            '</span>' +
          '<span>到期时间：' + expireText + '</span>' +
          '<span>注册时间：' + esc(fmtDate(t.createdAt)) + '</span>' +
          '<span>最近续费：' + esc(fmtDate(t.renewedAt)) + '</span>' +
        '</div>' +
        '<div class="team-remark" data-remark="' + esc(t.username) + '">' + remark + '</div>' +
        renewBlock +
        '<div class="team-actions">' +
          '<button class="btn-secondary-sm" data-toggle-status="' + esc(t.username) + '">' + toggleText + '</button>' +
          // 已停用的团队才能彻底删除（红色危险按钮，二次确认后执行）
          (t.rawStatus === 'disabled'
            ? '<button class="btn-danger" data-delteam="' + esc(t.username) + '">删除</button>'
            : '') +
          '<button class="btn-secondary-sm" data-renew="' + esc(t.username) + '">开通 / 续费</button>' +
          '<button class="btn-secondary-sm" data-resetpwd="' + esc(t.username) + '">重置密码</button>' +
          '<button class="btn-secondary-sm" data-remark="' + esc(t.username) + '">备注</button>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  async function loadTeams() {
    const msg = document.getElementById('pageMsg');
    try {
      const data = await api('/api/teams');
      teams = data.teams || [];
      msg.className = 'msg';
      msg.textContent = '';
      renderStats();
      renderList();
      bindList();
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = '加载失败：' + err.message;
    }
  }


  // ---------- 列表操作绑定 ----------
  function findTeam(name) {
    return teams.find(function (x) { return x.username === name; });
  }
  // 团队标签：「团队名称（登录账号）」；两者相同时不重复显示
  function teamLabel(t) {
    const tn = t.teamName || t.username;
    return tn === t.username ? tn : tn + '（' + t.username + '）';
  }

  function bindList() {
    const box = document.getElementById('teamList');
    // 开通 / 停用
    box.querySelectorAll('[data-toggle-status]').forEach(function (el) {
      el.addEventListener('click', async function () {
        const name = el.getAttribute('data-toggle-status');
        const t = findTeam(name);
        if (!t) return;
        const next = t.rawStatus === 'disabled' ? 'active' : 'disabled';
        if (next === 'disabled' &&
            !confirm('确定停用「' + t.teamName + '」吗？停用后该团队及其成员都无法登录。')) return;
        try {
          await api('/api/teams/' + encodeURIComponent(name) + '/status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: next }),
          });
          await loadTeams();
        } catch (err) { alert(err.message); }
      });
    });
    // 续费
    box.querySelectorAll('[data-renew]').forEach(function (el) {
      el.addEventListener('click', function () {
        const t = findTeam(el.getAttribute('data-renew'));
        if (t) openRenew(t);
      });
    });
    // 彻底删除（仅「已停用」的团队才渲染该按钮）
    box.querySelectorAll('[data-delteam]').forEach(function (el) {
      el.addEventListener('click', function () {
        const t = findTeam(el.getAttribute('data-delteam'));
        if (t) openDelTeam(t);
      });
    });
    // 重置密码
    box.querySelectorAll('[data-resetpwd]').forEach(function (el) {
      el.addEventListener('click', function () {
        const t = findTeam(el.getAttribute('data-resetpwd'));
        if (!t) return;
        const msg = document.getElementById('resetPwdMsg');
        msg.className = 'msg';
        msg.textContent = '';
        currentTeamName = t.username;
        document.getElementById('resetPwdTeam').value = teamLabel(t);
        document.getElementById('resetPwdValue').value = '';
        document.getElementById('resetPwdModal').classList.add('show');
      });
    });
    // 备注（点文字或「备注」按钮）
    box.querySelectorAll('[data-remark]').forEach(function (el) {
      el.addEventListener('click', function () {
        const t = findTeam(el.getAttribute('data-remark'));
        if (!t) return;
        const msg = document.getElementById('remarkMsg');
        msg.className = 'msg';
        msg.textContent = '';
        currentTeamName = t.username;
        document.getElementById('remarkTeam').value = teamLabel(t);
        document.getElementById('remarkText').value = t.remark || '';
        document.getElementById('remarkModal').classList.add('show');
      });
    });
  }

  // ---------- 开通 / 续费（升级为专业版） ----------
  let renewTarget = null;
  function openRenew(t) {
    renewTarget = t;
    const msg = document.getElementById('renewMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('renewTeam').value = teamLabel(t);
    // 当前状态：专业版显示订阅到期日；试用 / 订阅已到期显示对应状态
    document.getElementById('renewCurrent').value = t.pro
      ? '专业版，有效期至 ' + fmtDate(t.expiresAt)
      : (t.status === 'expired'
        ? '订阅已到期（' + fmtDate(t.expiresAt) + '），当前为试用模式'
        : '试用中（无期限）');
    // 已提交订阅 / 续费申请：按申请套餐预填天数，便于「一键按申请开通」
    const req = t.subscribeRequest;
    const reqDays = req && req.plan && req.plan.days ? Number(req.plan.days) : 0;
    document.getElementById('renewDays').value = reqDays || 30;
    if (reqDays && req.plan) {
      msg.className = 'msg ok';
      msg.textContent = req.plan.term + '（' + reqDays + ' 天，￥' + req.plan.price +
        '）已按该团队申请填入天数，确认后即为该团队开通专业版。';
    }
    document.getElementById('renewModal').classList.add('show');
  }
  // 快捷天数按钮（无该容器时跳过，避免脚本中断）
  const renewQuickRow = document.getElementById('renewQuick');
  if (renewQuickRow) {
    renewQuickRow.querySelectorAll('[data-days]').forEach(function (el) {
      el.addEventListener('click', function () {
        document.getElementById('renewDays').value = el.getAttribute('data-days');
      });
    });
  }
  document.getElementById('btnConfirmRenew').addEventListener('click', async function () {
    if (!renewTarget) return;
    const msg = document.getElementById('renewMsg');
    msg.className = 'msg';
    const days = Number(document.getElementById('renewDays').value);
    if (!days || days <= 0) {
      msg.className = 'msg err';
      msg.textContent = '请输入续费天数';
      return;
    }
    try {
      const data = await api('/api/teams/' + encodeURIComponent(renewTarget.username) + '/renew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ days: days }),
      });
      msg.className = 'msg ok';
      msg.textContent = '开通成功：该团队已成为专业版，新到期时间 ' + fmtDate(data.expiresAt);
      renewTarget = null;
      await loadTeams();
      setTimeout(function () { document.getElementById('renewModal').classList.remove('show'); }, 800);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });


  // ---------- 重置密码 ----------
  document.getElementById('btnConfirmResetPwd').addEventListener('click', async function () {
    if (!currentTeamName) return;
    const msg = document.getElementById('resetPwdMsg');
    msg.className = 'msg';
    const pwd = document.getElementById('resetPwdValue').value;
    if (!pwd || pwd.length < 6) {
      msg.className = 'msg err';
      msg.textContent = '请输入新密码（至少 6 位）';
      return;
    }
    try {
      await api('/api/teams/' + encodeURIComponent(currentTeamName) + '/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword: pwd }),
      });
      msg.className = 'msg ok';
      msg.textContent = '重置成功，请告知团队用户新密码';
      setTimeout(function () { document.getElementById('resetPwdModal').classList.remove('show'); }, 900);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 备注 ----------
  document.getElementById('btnConfirmRemark').addEventListener('click', async function () {
    if (!currentTeamName) return;
    const msg = document.getElementById('remarkMsg');
    msg.className = 'msg';
    const remark = document.getElementById('remarkText').value.trim();
    try {
      await api('/api/teams/' + encodeURIComponent(currentTeamName) + '/remark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ remark: remark }),
      });
      msg.className = 'msg ok';
      msg.textContent = '备注已保存';
      await loadTeams();
      setTimeout(function () { document.getElementById('remarkModal').classList.remove('show'); }, 700);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 系统设置（网站名称 + 是否允许新用户注册 + 联系邮箱 + 网站图标，全局） ----------
  // 把图标链接即时应用到当前标签页（保存后无需刷新即可看到效果）
  function applyFaviconToTab(url) {
    try {
      const head = document.head || (document.getElementsByTagName ? document.getElementsByTagName('head')[0] : null);
      if (!head) return;
      let link = head.querySelector ? head.querySelector('link[rel="icon"]') : null;
      if (!url) {
        if (link && link.parentNode) link.parentNode.removeChild(link);
        return;
      }
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'icon');
        head.appendChild(link);
      }
      link.setAttribute('href', url);
    } catch (e) {
      /* 忽略：仅影响标签页图标的即时预览 */
    }
  }

  // 输入框内容变化时更新「图标预览」（仅 http(s) 链接才预览）
  function updateFaviconPreview() {
    const input = document.getElementById('faviconInput');
    const img = document.getElementById('faviconPreview');
    if (!input || !img) return;
    const v = input.value.trim();
    if (/^https?:\\/\\//i.test(v)) {
      img.setAttribute('src', v);
      img.style.display = '';
    } else {
      img.removeAttribute('src');
      img.style.display = 'none';
    }
  }

  document.getElementById('btnSite').addEventListener('click', function () {
    const msg = document.getElementById('siteMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('siteNameInput').value = siteNameCache;
    // 复选框语义：「不允许新用户注册」→ 勾选 = 关闭注册
    document.getElementById('noRegisterCheck').checked = !allowRegisterCache;
    document.getElementById('supportEmailInput').value = supportEmailCache;
    document.getElementById('faviconInput').value = faviconCache;
    document.getElementById('adCodeInput').value = adCodeCache;
    updateFaviconPreview();
    document.getElementById('siteModal').classList.add('show');
  });
  // 输入图标链接时实时预览
  document.getElementById('faviconInput').addEventListener('input', updateFaviconPreview);
  document.getElementById('btnConfirmSite').addEventListener('click', async function () {
    const msg = document.getElementById('siteMsg');
    msg.className = 'msg';
    const siteName = document.getElementById('siteNameInput').value.trim();
    if (!siteName) {
      msg.className = 'msg err';
      msg.textContent = '请输入网站名称';
      return;
    }
    const allowRegister = !document.getElementById('noRegisterCheck').checked;
    const supportEmail = document.getElementById('supportEmailInput').value.trim();
    const favicon = document.getElementById('faviconInput').value.trim();
    // 广告代码（试用版页面顶部广告位）：可留空（= 不插入广告）；支持 HTML / JS 片段
    const adCode = document.getElementById('adCodeInput').value.trim();
    if (adCode.length > 3000) {
      msg.className = 'msg err';
      msg.textContent = '广告代码不能超过 3000 个字符';
      return;
    }
    // 联系邮箱：可留空（= 登录页不显示该提示）；填写时校验格式（与后端一致）
    if (supportEmail &&
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(.[A-Za-z0-9-]+)*.[A-Za-z]{2,}$/.test(supportEmail)) {
      msg.className = 'msg err';
      msg.textContent = '联系邮箱格式不正确，请检查后重试（留空则不显示该提示）';
      return;
    }
    // 网站图标：可留空（= 使用默认图标）；填写时必须是 http(s) 图片链接（与后端一致）
    if (favicon && (!/^https?:\\/\\//i.test(favicon) || /\\s/.test(favicon))) {
      msg.className = 'msg err';
      msg.textContent = '网站图标需填写以 http:// 或 https:// 开头的图片链接（留空则使用默认图标）';
      return;
    }
    try {
      const data = await api('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteName: siteName,
          allowRegister: allowRegister,
          supportEmail: supportEmail,
          favicon: favicon,
          adCode: adCode,
        }),
      });
      siteNameCache = (data.settings && data.settings.siteName) || siteName;
      allowRegisterCache = !(data.settings && data.settings.allowRegister === false);
      supportEmailCache = (data.settings && data.settings.supportEmail) || '';
      faviconCache = (data.settings && data.settings.favicon) || '';
      adCodeCache = (data.settings && data.settings.adCode) || '';
      document.getElementById('siteName').textContent = siteNameCache;
      document.title = siteNameCache + ' · 团队用户管理';
      applyFaviconToTab(faviconCache); // 当前标签页立即生效
      updateFaviconPreview();
      msg.className = 'msg ok';
      msg.textContent = '保存成功（' +
        (allowRegisterCache ? '允许新用户注册' : '已关闭新用户注册') +
        (supportEmailCache ? '；忘记密码联系邮箱：' + supportEmailCache : '；登录页不显示「忘记密码请联系」') +
        (faviconCache ? '；网站图标已更新' : '；网站图标已恢复默认') +
        (adCodeCache ? '；试用版广告代码已保存（试用版页面顶部会显示该广告）' : '；试用版广告已移除') +
        '）';
      setTimeout(function () { document.getElementById('siteModal').classList.remove('show'); }, 1400);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 邮件设置（注册邮箱确认码的发件服务，仅超级管理员） ----------
  //   环境变量 SMTP_USER / SMTP_PASS（QQ 邮箱授权码，或 QQ_MAIL_USER / QQ_MAIL_PASS）、
  //   RESEND_API_KEY / MAIL_FROM / MAIL_FROM_NAME 优先于此处保存的配置
  function mailStateText(s) {
    if (!s) return '未配置';
    if (s.provider === 'smtp') {
      // 本地 dev 只能明文 TCP，SMTP 的 TLS 一定失败 → 明确提示改用调试模式
      const isLocalHost = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '[::1]';
      const localWarn = isLocalHost && !s.devMode
        ? '｜⚠️ 本地 wrangler dev 不支持 SMTP 的 TLS，本地请勾选「调试模式」，或部署后测试'
        : '';
      return '已配置：QQ 邮箱 SMTP（' + (s.smtpUser || '未填账号') + '，' +
        (s.smtpHost || 'smtp.qq.com') + ':' + (s.smtpPort || 465) + '）' +
        (s.source === 'env' ? '（来自环境变量）' : '（来自控制台设置）') +
        (s.devMode ? '｜调试模式已开启' : '') + localWarn;
    }
    if (s.provider === 'resend') {
      return '已配置：Resend 发信' +
        (s.source === 'env' ? '（来自环境变量）' : '（来自控制台设置）') +
        (s.devMode ? '｜调试模式已开启' : '');
    }
    if (s.provider === 'cloudflare') {
      return '已配置：Cloudflare 邮件绑定（send_email）' + (s.devMode ? '｜调试模式已开启' : '');
    }
    return s.devMode
      ? '未配置发件服务（当前为调试模式：确认码直接显示在页面上）'
      : '未配置：请填写 QQ 邮箱 SMTP 账号与授权码后保存，否则用户无法完成注册邮箱确认';
  }

  function applyMailSettings(data) {
    mailCache = data || {};
    document.getElementById('mailState').value = mailStateText(mailCache);
    document.getElementById('mailFrom').value = mailCache.from || '';
    document.getElementById('mailFromName').value = mailCache.fromName || '';
    // QQ 邮箱 SMTP
    document.getElementById('mailSmtpUser').value = mailCache.smtpUser || '';
    document.getElementById('mailSmtpHost').value = mailCache.smtpHost || '';
    document.getElementById('mailSmtpPort').value = mailCache.smtpPort || '';
    const passInput = document.getElementById('mailSmtpPass');
    passInput.value = '';
    passInput.placeholder = mailCache.hasSmtpPass
      ? '已保存：' + mailCache.smtpPassMasked + '（留空表示不修改）'
      : '在 QQ 邮箱「设置 → 账户 → POP3/SMTP服务」开启后生成';
    // Resend
    const keyInput = document.getElementById('mailApiKey');
    keyInput.value = '';
    keyInput.placeholder = mailCache.hasApiKey
      ? '已保存：' + mailCache.apiKeyMasked + '（留空表示不修改）'
      : 're_xxxxxxxx';
    document.getElementById('mailDevMode').checked = !!mailCache.devMode;
    // 订阅 / 续费申请邮件：自定义说明 + 收款二维码 + 管理员提醒邮箱
    document.getElementById('mailAdminNotify').value = mailCache.adminNotifyEmail || '';
    document.getElementById('mailSubText').value = mailCache.subExtraText || '';
    const qrs = Array.isArray(mailCache.subQrCodes) ? mailCache.subQrCodes : [];
    for (let i = 1; i <= 3; i++) {
      document.getElementById('mailQr' + i).value = qrs[i - 1] || '';
    }
  }

  async function loadMailSettings() {
    const msg = document.getElementById('mailMsg');
    msg.className = 'msg';
    msg.textContent = '加载中...';
    try {
      const data = await api('/api/admin/email-settings');
      applyMailSettings(data.settings);
      msg.textContent = '';
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = '加载失败：' + err.message;
    }
  }

  document.getElementById('btnMail').addEventListener('click', async function () {
    document.getElementById('mailModal').classList.add('show');
    await loadMailSettings();
  });

  document.getElementById('btnConfirmMail').addEventListener('click', async function () {
    const msg = document.getElementById('mailMsg');
    msg.className = 'msg';
    try {
      const data = await api('/api/admin/email-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: document.getElementById('mailFrom').value.trim(),
          fromName: document.getElementById('mailFromName').value.trim(),
          apiKey: document.getElementById('mailApiKey').value.trim(),
          smtpUser: document.getElementById('mailSmtpUser').value.trim(),
          smtpPass: document.getElementById('mailSmtpPass').value.trim(),
          smtpHost: document.getElementById('mailSmtpHost').value.trim(),
          smtpPort: document.getElementById('mailSmtpPort').value.trim(),
          devMode: document.getElementById('mailDevMode').checked,
          // 订阅 / 续费申请邮件（发给申请人 + 抄送管理员）
          adminNotifyEmail: document.getElementById('mailAdminNotify').value.trim(),
          subExtraText: document.getElementById('mailSubText').value.trim(),
          subQrCodes: [
            document.getElementById('mailQr1').value.trim(),
            document.getElementById('mailQr2').value.trim(),
            document.getElementById('mailQr3').value.trim(),
          ],
        }),
      });
      applyMailSettings(data.settings);
      msg.className = 'msg ok';
      msg.textContent = '已保存（用户注册时将向注册邮箱发送确认码）';
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  document.getElementById('btnMailTest').addEventListener('click', async function () {
    const msg = document.getElementById('mailMsg');
    msg.className = 'msg';
    const to = document.getElementById('mailTestTo').value.trim();
    if (!to) {
      msg.className = 'msg err';
      msg.textContent = '请输入测试收件邮箱';
      return;
    }
    msg.textContent = '发送中...';
    try {
      const data = await api('/api/admin/email-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: to }),
      });
      msg.className = 'msg ok';
      msg.textContent = data.message || '测试邮件已发送';
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 彻底删除团队用户（仅「已停用」的团队会显示删除按钮） ----------
  let delTeamTarget = null;
  function openDelTeam(t) {
    delTeamTarget = t;
    const msg = document.getElementById('delTeamMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('delTeamName').value = teamLabel(t);
    document.getElementById('delTeamConfirm').value = '';
    // 明确列出会被永久删除的内容（该团队下的成员 / 生产方 / 客户账号与全部业务数据）
    document.getElementById('delTeamWarn').innerHTML =
      '⚠️ 将<b>永久删除</b>该团队用户及其名下的<b>全部成员 / 生产方 / 客户账号</b>，' +
      '并清除这些账号下的<b>所有订单（待办）、客户列表、生产方列表、备注与站内消息</b>。' +
      '此操作<b>不可恢复</b>，请确认已完成数据备份。';
    document.getElementById('delTeamModal').classList.add('show');
    document.getElementById('delTeamConfirm').focus();
  }
  document.getElementById('btnConfirmDelTeam').addEventListener('click', async function () {
    const msg = document.getElementById('delTeamMsg');
    msg.className = 'msg';
    const t = delTeamTarget;
    if (!t) return;
    const input = document.getElementById('delTeamConfirm').value.trim();
    if (input !== t.username) {
      msg.className = 'msg err';
      msg.textContent = '请输入该团队的登录账号「' + t.username + '」以确认删除';
      return;
    }
    try {
      const data = await api('/api/teams/' + encodeURIComponent(t.username), { method: 'DELETE' });
      const del = data.deleted || {};
      document.getElementById('delTeamModal').classList.remove('show');
      delTeamTarget = null;
      await loadTeams();
      const pageMsg = document.getElementById('pageMsg');
      pageMsg.className = 'msg ok';
      pageMsg.textContent =
        '已彻底删除团队「' + (del.teamName || t.teamName) + '」：共删除账号 ' + (del.accounts || 0) +
        ' 个（成员 ' + (del.members || 0) + ' / 生产方 ' + (del.producers || 0) + ' / 客户 ' + (del.customers || 0) +
        '）、订单（待办）' + (del.todos || 0) + ' 条及全部相关数据';
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 重置密码（超级管理员重置**自己**的登录密码） ----------
  // 说明：超级管理员本身就是系统最高权限账号（可重置任意团队的密码），因此这里无需输入原密码，
  //      仅需「新密码 + 确认新密码」两步校验；接口 /api/admin/password 同样限超级管理员本人。
  document.getElementById('btnAdminPwd').addEventListener('click', function () {
    const msg = document.getElementById('adminPwdMsg');
    msg.className = 'msg';
    msg.textContent = '';
    document.getElementById('adminPwdUser').value =
      document.getElementById('currentUser').textContent || 'admin';
    document.getElementById('adminPwdNew').value = '';
    document.getElementById('adminPwdConfirm').value = '';
    document.getElementById('adminPwdModal').classList.add('show');
  });
  document.getElementById('btnConfirmAdminPwd').addEventListener('click', async function () {
    const msg = document.getElementById('adminPwdMsg');
    msg.className = 'msg';
    const newPwd = document.getElementById('adminPwdNew').value;
    const confirmPwd = document.getElementById('adminPwdConfirm').value;
    if (!newPwd) { msg.className = 'msg err'; msg.textContent = '请输入新密码'; return; }
    if (newPwd.length < 6) { msg.className = 'msg err'; msg.textContent = '密码至少 6 位'; return; }
    if (newPwd !== confirmPwd) { msg.className = 'msg err'; msg.textContent = '两次输入的密码不一致'; return; }
    try {
      await api('/api/admin/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword: newPwd, confirmPassword: confirmPwd }),
      });
      msg.className = 'msg ok';
      msg.textContent = '重置成功：请使用新密码登录';
      setTimeout(function () {
        document.getElementById('adminPwdModal').classList.remove('show');
      }, 1000);
    } catch (err) {
      msg.className = 'msg err';
      msg.textContent = err.message;
    }
  });

  // ---------- 弹窗关闭 / 搜索 / 刷新 / 退出 ----------
  document.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', function () {
      document.getElementById(el.getAttribute('data-close')).classList.remove('show');
    });
  });
  document.querySelectorAll('.modal-mask').forEach(function (mask) {
    mask.addEventListener('click', function (e) {
      if (e.target === mask) mask.classList.remove('show');
    });
  });
  document.getElementById('searchInput').addEventListener('input', renderList);
  document.getElementById('btnRefresh').addEventListener('click', loadTeams);
  document.getElementById('btnLogout').addEventListener('click', async function () {
    await fetch('/api/logout', { method: 'POST' });
    location.href = '/';
  });

  // ---------- 初始化 ----------
  async function init() {
    try {
      const me = await api('/api/me');
      if (me.role !== 'superadmin') { location.href = '/todos'; return; }
      document.getElementById('currentUser').textContent = me.username;
      const s = await api('/api/settings');
      siteNameCache = (s.settings && s.settings.siteName) || '订单管理系统';
      allowRegisterCache = !(s.settings && s.settings.allowRegister === false);
      supportEmailCache = (s.settings && s.settings.supportEmail) || '';
      faviconCache = (s.settings && s.settings.favicon) || '';
      adCodeCache = (s.settings && s.settings.adCode) || '';
      document.getElementById('siteName').textContent = siteNameCache;
      document.title = siteNameCache + ' · 团队用户管理';
    } catch (e) { return; }
    await loadTeams();
  }
  init();
<\/script>
</body>
</html>`}import{connect as at}from"cloudflare:sockets";var Y="default",st="__platform__",ot=24*60*60*1e3,xe="订单管理系统",F={members:2,producers:1,customers:1},it={members:"成员",producers:"生产方",customers:"客户"};function Se(t){let e=F[t]||0,a=it[t]||t;return`试用版最多可添加 ${e} 个${a}：如需添加更多，请点击顶栏「订阅」升级为专业用户（订阅后解除数量限制）`}var V=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/,K=10*60,Ve=5,pe=60,dt=5,ct=1e4,Z=3,lt=2e4,ut=8e3;function _(){let t=new Uint8Array(24);return crypto.getRandomValues(t),Array.from(t,e=>e.toString(16).padStart(2,"0")).join("")}async function A(t){let e=new TextEncoder().encode(t+"::cf-todolist-salt"),a=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(a),d=>d.toString(16).padStart(2,"0")).join("")}function J(t){let e=String(t??"").trim();return e?!/^https?:\/\//i.test(e)||/\s/.test(e)?null:e:""}var mt=["USD","CNY"];function pt(t){let e=String(t??"").trim().toUpperCase();return mt.includes(e)?e:"USD"}function n(t,e=200){return new Response(JSON.stringify(t),{status:e,headers:{"Content-Type":"application/json; charset=utf-8"}})}async function S(t){try{return await t.json()}catch{return{}}}function We(t){let a=(t.headers.get("Cookie")||"").match(/(?:^|;\s*)token=([^;]+)/);return a?a[1]:null}function v(t){return t?N(t.role)?st:t.teamId||Y:Y}function N(t){return t==="superadmin"}function T(t){return t==="team"}function ce(t){return!!t&&(t.plan==="pro"||t.plan==="paid")}function ie(t){if(!t)return"active";if(t.status==="disabled")return"disabled";if(ce(t)){let e=t.expiresAt||"";if(e&&new Date(e).getTime()<Date.now())return"expired"}return"active"}function R(t){return ce(t)&&ie(t)==="active"}function Ge(t){return t&&(t.subscribeRequest||t.renewRequest)||null}async function U(t,e){if(!e||e===Y)return null;let a=await t.TODO_KV.get(`user:${e}`);if(!a)return null;let d=JSON.parse(a);return T(d.role)?d:null}async function Ye(t,e){return e?T(e.role)?R(e):R(await U(t,v(e))):!1}async function x(t,e){let a=We(t);if(!a)return null;let d=await e.TODO_KV.get(`session:${a}`);if(!d)return null;let m=await e.TODO_KV.get(`user:${d}`);if(!m)return null;let p=JSON.parse(m);if(!N(p.role)){let r=await U(e,v(p));if(r&&r.status==="disabled")return null}return p}function ft(){let t=new Uint32Array(1);return crypto.getRandomValues(t),String(t[0]%1e6).padStart(6,"0")}function z(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function re(t){let e=String(t||"").trim(),a=e.lastIndexOf("@");if(a<=0)return e;let d=e.slice(0,a),m=d.slice(0,Math.min(2,d.length));return m+"*".repeat(Math.max(1,d.length-m.length))+e.slice(a)}function ye(t){try{let e=new URL(t.url).hostname;return e==="localhost"||e==="127.0.0.1"||e==="::1"||e==="[::1]"}catch{return!1}}function gt(t){let e=new Date(t||Date.now());if(Number.isNaN(e.getTime()))return String(t||"");let a=new Date(e.getTime()+8*60*60*1e3),d=m=>String(m).padStart(2,"0");return`${a.getUTCFullYear()}-${d(a.getUTCMonth()+1)}-${d(a.getUTCDate())} ${d(a.getUTCHours())}:${d(a.getUTCMinutes())}`}function ve(t){let e=Array.isArray(t)?t.slice(0,Z):[],a=[];for(let d=0;d<Z;d++){let m=String(e[d]||"").trim();a.push(m&&m.length<=300&&!/\s/.test(m)&&/^https?:\/\//i.test(m)?m:"")}return a}function X(t){let e=String(t&&t.to||"").trim().toLowerCase(),a=t&&t.cc!==void 0&&t.cc!==null?t.cc:[],d=Array.isArray(a)?a:[a],m=[];for(let p of d){let r=String(p||"").trim();!r||!V.test(r)||r.toLowerCase()!==e&&(m.some(s=>s.toLowerCase()===r.toLowerCase())||m.push(r))}return m}function bt(t,e){let a=[t&&t.adminNotifyEmail,t&&t.from,e&&e.supportEmail];for(let d of a){let m=String(d||"").trim();if(m&&V.test(m))return m}return""}async function ne(t){let e={};try{let b=await t.TODO_KV.get("emailSettings");b&&(e=JSON.parse(b)||{})}catch{e={}}let a=String(t.RESEND_API_KEY||e.apiKey||"").trim(),d=String(t.MAIL_FROM_NAME||e.fromName||"").trim(),m=String(t.SMTP_HOST||e.smtpHost||"smtp.qq.com").trim(),p=Number(t.SMTP_PORT||e.smtpPort||465)||465,r=String(t.SMTP_USER||t.QQ_MAIL_USER||e.smtpUser||"").trim(),s=String(t.SMTP_PASS||t.QQ_MAIL_PASS||e.smtpPass||"").trim(),o=String(t.MAIL_FROM||e.from||"").trim(),i=t.SEND_EMAIL&&typeof t.SEND_EMAIL.send=="function"?t.SEND_EMAIL:null,l=o||(r&&V.test(r)?r:""),c=a?"resend":r&&s?"smtp":i?"cloudflare":"",u=String(t.ADMIN_NOTIFY_EMAIL||e.adminNotifyEmail||"").trim(),f=ve(e.subQrCodes),g=a?t.RESEND_API_KEY?"env":"kv":r&&s?t.SMTP_USER||t.SMTP_PASS||t.QQ_MAIL_USER||t.QQ_MAIL_PASS?"env":"kv":i?"binding":"none";return{provider:c,apiKey:a,from:l,fromName:d,smtpHost:m,smtpPort:p,smtpUser:r,smtpPass:s,binding:i,adminNotifyEmail:u,subExtraText:String(e.subExtraText||"").trim(),subQrCodes:f,devMode:e.devMode===!0,source:g}}function le(t){let e=new TextEncoder().encode(String(t??"")),a="";for(let d=0;d<e.length;d++)a+=String.fromCharCode(e[d]);return btoa(a)}function ze(t){let e=String(t||""),a=[];for(let d=0;d<e.length;d+=76)a.push(e.slice(d,d+76));return a.join(`\r
`)}function Ke(t){let e=String(t??"");return/^[\x20-\x7e]*$/.test(e)?e:`=?UTF-8?B?${le(e)}?=`}var wt="support@cloudnexus.cn";async function W(t){let e={};try{let a=await t.TODO_KV.get("settings");a&&(e=JSON.parse(a)||{})}catch{e={}}return{siteName:e.siteName||xe,allowRegister:e.allowRegister!==!1,supportEmail:e.supportEmail===void 0?wt:String(e.supportEmail||"").trim(),favicon:String(e.favicon||"").trim(),adCode:String(e.adCode||"").trim()}}async function yt(t,e,a){let d="";if(e){let p=T(e.role)?e:await U(t,v(e));d=p?p.teamName||p.username:""}let m=a?String(a.siteName||"").trim():"";return d||m||xe}function je(t){let e=String(t||"");return e?e.slice(0,4)+"****"+e.slice(-4):""}function Je(t,e){return{provider:t.provider,source:t.source,from:t.from,fromName:t.fromName,hasApiKey:!!t.apiKey,apiKeyMasked:je(t.apiKey),smtpHost:t.smtpHost,smtpPort:t.smtpPort,smtpUser:t.smtpUser,hasSmtpPass:!!t.smtpPass,smtpPassMasked:je(t.smtpPass),devMode:t.devMode,adminNotifyEmail:t.adminNotifyEmail||"",subExtraText:t.subExtraText||"",subQrCodes:ve(t.subQrCodes).concat("").slice(0,Z),envApiKey:!!e.RESEND_API_KEY,envFrom:!!e.MAIL_FROM,envSmtp:!!(e.SMTP_USER||e.SMTP_PASS||e.QQ_MAIL_USER||e.QQ_MAIL_PASS)}}function ht(t,e){let a="cfmail_"+_().slice(0,16),d=String(t.from||"localhost").split("@")[1]||"localhost",m=t.fromName?`${Ke(t.fromName)} <${t.from}>`:`<${t.from}>`,p=X(e),r=[`From: ${m}`,`To: <${e.to}>`];return p.length&&r.push(`Cc: ${p.map(s=>`<${s}>`).join(", ")}`),r.push(`Subject: ${Ke(e.subject||"")}`,`Date: ${new Date().toUTCString()}`,`Message-ID: <${_()}@${d}>`,"MIME-Version: 1.0",`Content-Type: multipart/alternative; boundary="${a}"`,""),r.concat([`--${a}`,"Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64","",ze(le(e.text||"")),`--${a}`,"Content-Type: text/html; charset=UTF-8","Content-Transfer-Encoding: base64","",ze(le(e.html||e.text||"")),`--${a}--`,""]).join(`\r
`)}function xt(t,e,a){let d=null;return Promise.race([t,new Promise((m,p)=>{d=setTimeout(()=>{try{a&&a()}catch{}p(new Error(`连接或响应超时（${Math.round(e/1e3)} 秒）`))},e)})]).finally(()=>clearTimeout(d))}function vt(t,e,a){let d=t&&t.message?t.message:String(t),m=(d.match(/\b(\d{3})\b/)||[])[1]||"",p="（提示：本地 `wrangler dev` 已支持 SMTP 的 TLS；如持续超时请检查网络 / 端口是否被拦截，或先用「调试模式」联调）",r="";return m==="535"||m==="534"?r="（提示：QQ 邮箱必须使用「SMTP 授权码」而不是 QQ 登录密码，并先在 QQ 邮箱「设置 → 账户」中开启 SMTP 服务）":m==="530"?r="（提示：服务器要求先建立加密连接 —— 465 用 SSL、587 用 STARTTLS）"+(a?p:""):m==="550"||m==="553"?r="（提示：QQ 邮箱要求「发件邮箱」与 SMTP 账号完全一致）":a&&/secureTransport|starttls|tls|ssl|certificate|handshake|超时|关闭/i.test(d)?r=p:/starttls must be set|secureTransport/i.test(d)?r="（提示：587 必须先以 STARTTLS 建立连接再升级；若持续失败请把端口改为 465（SSL）重试）":/certificate|tls|ssl|handshake/i.test(d)?r="（提示：端口 465 使用 SSL，端口 587 使用 STARTTLS，请检查服务器 / 端口设置）":/超时/.test(d)&&(r="（提示：连接超时通常是网络或端口被拦截所致；QQ 邮箱请用 smtp.qq.com 的 465（SSL）或 587（STARTTLS））"),`SMTP 发信失败（${e}）：${d}${r}`}async function kt(t,e,a){let d=Number(t.smtpPort)||465,m=[d];d===465?m.push(587):d===587&&m.push(465);let p=[];for(let r=0;r<m.length;r++){let s=await Tt(m[r],t,e,a);if(s.ok)return s;p.push(m.length>1?`端口 ${m[r]}：${s.error}`:s.error)}return{ok:!1,error:p.join("；")}}async function Tt(t,e,a,d){let m=e.smtpHost||"smtp.qq.com",p=!!(d&&d.local),r=Number(e.smtpTimeoutMs)||(p?ut:lt),s=new TextEncoder,o=new TextDecoder,i=null,l=null,c=null,u="",f=`连接 ${m}:${t}`;async function g(){for(;;){let k=u.indexOf(`
`);if(k!==-1){let h=u.slice(0,k);return u=u.slice(k+1),h.replace(/\r$/,"")}let{value:E,done:C}=await l.read();if(C)throw new Error("连接已被服务器关闭");u+=o.decode(E,{stream:!0})}}async function b(){let k=0,E="";for(;;){let C=await g();if(!(C.length<3)&&(k=parseInt(C.slice(0,3),10)||k,E+=(E?" ":"")+C.slice(4).trim(),C.charAt(3)!=="-"))break}return{code:k,text:E}}async function y(k,E){await c.write(s.encode(k+`\r
`));let C=await b();if(!E.includes(C.code))throw new Error(`服务器返回 ${C.code}${C.text?" "+C.text:""}`);return C}async function w(){f=`连接 ${m}:${t}`;try{await i.opened}catch(M){throw new Error(`建立连接失败：${M&&M.message?M.message:M}`)}let k=await b();if(k.code!==220)throw new Error(`服务器返回 ${k.code} ${k.text}`);let C=`EHLO ${e.smtpEhlo||String(e.from||"").split("@")[1]||"localhost"}`;if(await y(C,[250]),t===587){f="STARTTLS",await y("STARTTLS",[220]);try{l.releaseLock()}catch{}try{c.releaseLock()}catch{}i=i.startTls(),u="",l=i.readable.getReader(),c=i.writable.getWriter(),await y(C,[250])}f="身份认证（SMTP 授权码）",await y("AUTH LOGIN",[334]),await y(le(e.smtpUser),[334]),await y(le(e.smtpPass),[235]),f="发件地址",await y(`MAIL FROM:<${e.from}>`,[250]);let h=[a.to].concat(X(a));for(let M=0;M<h.length;M++)f=M===0?"收件地址":"抄送地址",await y(`RCPT TO:<${h[M]}>`,[250,251]);f="发送邮件正文",await y("DATA",[354]);let O=ht(e,a).replace(/\r\n\./g,`\r
..`);await c.write(s.encode(`${O}\r
.\r
`));let D=await b();if(D.code!==250)throw new Error(`服务器返回 ${D.code}${D.text?" "+D.text:""}`);try{await y("QUIT",[221])}catch{}return{ok:!0,id:""}}try{return i=at({hostname:m,port:t},{secureTransport:t===587?"starttls":"on"}),l=i.readable.getReader(),c=i.writable.getWriter(),await xt(w(),r,()=>{try{i.close()}catch{}})}catch(k){return{ok:!1,error:vt(k,f,p)}}finally{try{i&&i.close()}catch{}}}async function Oe(t,e,a,d){if(!e.provider)return{ok:!1,error:"邮件服务未配置：请在控制台「邮件设置」中填写 QQ 邮箱 SMTP 账号与授权码（或 Resend API Key）"};if(!e.from)return{ok:!1,error:"邮件服务缺少「发件邮箱地址」：请在控制台「邮件设置」中补全后重试"};if(e.provider==="smtp")return kt(e,a,d);if(e.provider==="resend"){let m=new AbortController,p=setTimeout(()=>m.abort(),ct);try{let r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${e.apiKey}`,"Content-Type":"application/json"},body:JSON.stringify(Object.assign({from:e.fromName?`${e.fromName} <${e.from}>`:e.from,to:[a.to],subject:a.subject,text:a.text,html:a.html},X(a).length?{cc:X(a)}:{})),signal:m.signal}),s=await r.json().catch(()=>({}));return r.ok?{ok:!0,id:s.id||""}:{ok:!1,error:`邮件服务返回错误（${r.status}）：${s.message||s.error||"请检查 API Key 与发件域名"}`}}catch(r){return{ok:!1,error:"邮件服务请求失败："+(r&&r.message?r.message:String(r))}}finally{clearTimeout(p)}}try{let m=X(a);return await e.binding.send({from:e.fromName?{name:e.fromName,email:e.from}:e.from,to:m.length?[a.to].concat(m):a.to,subject:a.subject,html:a.html,text:a.text}),{ok:!0,id:""}}catch(m){return{ok:!1,error:"邮件发送失败："+(m&&m.message?m.message:String(m))}}}async function Et(t,e,a){let d=xe;try{let o=await t.TODO_KV.get("settings");if(o){let i=JSON.parse(o);i&&i.siteName&&(d=i.siteName)}}catch{}let m=e.teamName||e.username,p=`【${d}】邮箱确认码 ${a}（10 分钟内有效）`,r=[`${m}，您好：`,"",`您正在注册「${d}」的团队账号（登录名：${e.username}）。`,`邮箱确认码：${a}`,"有效期：10 分钟。","","请在注册 / 登录页面输入上面的确认码完成验证，验证通过后即可正常登录。","若非本人操作，请忽略本邮件：验证通过前该账号无法登录。","",d].join(`
`),s=`<div style="font-family:-apple-system,'Microsoft YaHei',sans-serif;font-size:14px;color:#37352f;line-height:1.7"><p>${z(m)}，您好：</p><p>您正在注册「${z(d)}」的团队账号（登录名：<b>${z(e.username)}</b>）。</p><p>邮箱确认码：</p><p style="font-size:26px;font-weight:700;letter-spacing:6px;color:#2383e2;margin:8px 0">${a}</p><p>有效期 <b>10 分钟</b>。请在注册 / 登录页面输入该确认码完成验证，验证通过后即可正常登录。</p><p style="color:#9b9a97;font-size:12px">若非本人操作，请忽略本邮件：验证通过前该账号无法登录。</p></div>`;return{subject:p,text:r,html:s}}async function St(t,e,a,d,m){let p=xe;try{let h=await t.TODO_KV.get("settings");if(h){let O=JSON.parse(h);O&&O.siteName&&(p=O.siteName)}}catch{}let s=m==="renew"?"续费申请":"订阅申请",o=e.teamName||e.username,i=a&&a.plan?a.plan:null,l=i?`${i.term}（￥${i.price} / ${i.days} 天）`:"未选择套餐",c=gt(a&&a.at?a.at:new Date().toISOString()),u=String(d&&d.subExtraText||"").trim(),f=ve(d&&d.subQrCodes).filter(Boolean),g=`【${p}】${s}已收到：${o} · ${l}`,b=[`${o}，您好：`,"",`我们已收到您的「${s}」，信息如下（本邮件已同步抄送管理员）：`,"","【申请人信息】",`团队名称：${o}`,`登录账号：${e.username}`,`联系人：${e.contact||"（未填写）"}`,`联系邮箱：${e.email||"（未填写）"}`,`提交时间：${c}`,"","【订阅套餐】",`申请类型：${s}`,`套餐：${l}`,`留言：${a&&a.note||"（无）"}`,""];u&&b.push("【说明】",u,""),f.length&&(b.push("【收款二维码】"),f.forEach((h,O)=>b.push(`二维码 ${O+1}：${h}`)),b.push("")),b.push("提交后由超级管理员为您开通；开通成功后即可使用成员 / 生产方 / 客户管理等全部功能。","如需补充信息，可在系统内重新提交申请（会覆盖上一次）。","",p);let y=b.join(`
`),w=(h,O)=>`<tr><td style="padding:4px 12px 4px 0;color:#6b6b68;white-space:nowrap">${z(h)}</td><td style="padding:4px 0;color:#37352f">${z(O)}</td></tr>`,k=u?`<div style="margin:14px 0 6px;font-weight:600">说明</div><div style="background:#f7f7f5;border-radius:8px;padding:12px;white-space:pre-wrap">${z(u)}</div>`:"",E=f.length?'<div style="margin:16px 0 6px;font-weight:600">收款二维码</div>'+f.map((h,O)=>`<div style="display:inline-block;margin:0 12px 12px 0;text-align:center;vertical-align:top"><img src="${z(h)}" alt="收款二维码 ${O+1}" style="width:180px;height:180px;object-fit:contain;border:1px solid #e9e9e7;border-radius:8px;background:#fff"><div style="font-size:12px;color:#6b6b68;margin-top:4px">二维码 ${O+1}</div></div>`).join(""):"",C=`<div style="font-family:-apple-system,'Microsoft YaHei',sans-serif;font-size:14px;color:#37352f;line-height:1.7"><p>${z(o)}，您好：</p><p>我们已收到您的「<b>${z(s)}</b>」，信息如下（本邮件已同步抄送管理员）：</p><div style="margin:10px 0 6px;font-weight:600">申请人信息</div><table style="border-collapse:collapse;font-size:14px">`+w("团队名称",o)+w("登录账号",e.username)+w("联系人",e.contact||"（未填写）")+w("联系邮箱",e.email||"（未填写）")+w("提交时间",c)+'</table><div style="margin:14px 0 6px;font-weight:600">订阅套餐</div><table style="border-collapse:collapse;font-size:14px">'+w("申请类型",s)+w("套餐",l)+w("留言",a&&a.note||"（无）")+"</table>"+k+E+'<p style="margin-top:16px;color:#6b6b68;font-size:13px">提交后由超级管理员为您开通；开通成功后即可使用成员 / 生产方 / 客户管理等全部功能。<br>如需补充信息，可在系统内重新提交申请（会覆盖上一次）。</p></div>';return{subject:g,text:y,html:C}}async function Pe(t,e,a){let d=await ne(t),m=d.devMode||!d.provider&&ye(a);if(!d.provider&&!m)return{ok:!1,error:"邮件服务未配置：请联系超级管理员在控制台「邮件设置」中配置发件服务后再试"};if(d.provider&&!d.from)return{ok:!1,error:"邮件服务缺少「发件邮箱地址」：请先联系超级管理员补全配置"};if(!e.email)return{ok:!1,error:"该账号没有可用的注册邮箱，请重新注册"};let p=Date.now(),r=`mailrate:${e.username}`,s=null;try{let c=await t.TODO_KV.get(r);s=c?JSON.parse(c):null}catch{s=null}let o=!!(s&&p-Number(s.windowStart||0)<60*60*1e3);if(o){let c=pe*1e3-(p-Number(s.lastSentAt||0));if(c>0)return{ok:!1,error:`确认码刚发送过，请 ${Math.ceil(c/1e3)} 秒后再点「重新发送确认码」`};if(Number(s.count||0)>=dt)return{ok:!1,error:"发送过于频繁（1 小时内最多 5 次），请稍后再试"}}let i=ft();if(m)console.log(`[邮箱确认码] ${e.username} <${e.email}> 确认码：${i}（调试模式，未真实发送邮件）`);else{let c=await Et(t,e,i),u=await Oe(t,d,{to:e.email,...c},{local:ye(a)});if(!u.ok)return{ok:!1,error:u.error}}await t.TODO_KV.put(`emailcode:${e.username}`,JSON.stringify({codeHash:await A(i),email:e.email||"",sentAt:p,attempts:0}),{expirationTtl:K});let l=o?{windowStart:s.windowStart,count:Number(s.count||0)+1,lastSentAt:p}:{windowStart:p,count:1,lastSentAt:p};return await t.TODO_KV.put(r,JSON.stringify(l),{expirationTtl:Math.max(60,Math.ceil((60*60*1e3-(p-Number(l.windowStart)))/1e3))}),{ok:!0,sentAt:p,devCode:m?i:""}}async function It(t,e,a){try{let m=await t.TODO_KV.get(`emailcode:${e.username}`);if(m){let p=JSON.parse(m);if(K*1e3-(Date.now()-Number(p.sentAt||0))>0)return{ok:!0,resent:!1,sentAt:p.sentAt,devCode:""}}}catch{}let d=await Pe(t,e,a);return d.ok?{ok:!0,resent:!0,sentAt:d.sentAt,devCode:d.devCode}:{ok:!1,error:d.error}}async function Ct(t,e,a){let d=`emailcode:${e.username}`,m=String(a||"").trim();if(!m)return{ok:!1,error:"请输入邮箱确认码"};let p=await t.TODO_KV.get(d);if(!p)return{ok:!1,error:"确认码已失效，请点击「重新发送确认码」重新获取"};let r=null;try{r=JSON.parse(p)}catch{r=null}if(!r||!r.codeHash)return await t.TODO_KV.delete(d),{ok:!1,error:"确认码已失效，请点击「重新发送确认码」重新获取"};if(Date.now()-Number(r.sentAt||0)>K*1e3)return await t.TODO_KV.delete(d),{ok:!1,error:"确认码已过期（有效期 10 分钟），请点击「重新发送确认码」"};if(Number(r.attempts||0)>=Ve)return await t.TODO_KV.delete(d),{ok:!1,error:"确认码错误次数过多，请点击「重新发送确认码」重新获取"};if(await A(m)!==r.codeHash){r.attempts=Number(r.attempts||0)+1;let s=Ve-r.attempts;return s<=0?(await t.TODO_KV.delete(d),{ok:!1,error:"确认码错误次数过多，请点击「重新发送确认码」重新获取"}):(await t.TODO_KV.put(d,JSON.stringify(r),{expirationTtl:K}),{ok:!1,error:`确认码不正确，请检查后重试（还可尝试 ${s} 次）`})}return{ok:!0}}async function Ie(t,e){let a=_();return await t.TODO_KV.put(`session:${a}`,e.username,{expirationTtl:60*60*24*7}),new Response(JSON.stringify({ok:!0,username:e.username,role:e.role}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":`token=${a}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60*60*24*7}`}})}async function ue(t){let e=await t.TODO_KV.get("user:admin");if(!e){let d={username:"admin",password:await A("admin"),role:"superadmin",createdAt:new Date().toISOString()};await t.TODO_KV.put("user:admin",JSON.stringify(d));return}let a=JSON.parse(e);a.role==="admin"&&(a.role="superadmin",await t.TODO_KV.put("user:admin",JSON.stringify(a)))}async function fe(t,e){let a=await t.TODO_KV.list({prefix:"user:"}),d=[];for(let m of a.keys){let p=await t.TODO_KV.get(m.name);if(p){let r=JSON.parse(p);if(r.role==="producer"||r.role==="customer"||N(r.role)||T(r.role)||v(r)!==e)continue;await se(t,r);let s=await ee(t,r.username),o={username:r.username,role:r.role,createdAt:r.createdAt,remark:r.remark||"",position:r.position||"",dept:r.dept||"",canPlaceOrder:ke(r),canPurchase:de(r),canViewCustomerOrder:Be(r),canViewPurchaseOrder:Le(r),canUpdateStatus:ge(r),canViewAllOrders:G(r),viewCustomerCount:s.length,canPlaceMaskedOrder:be(r),canAddShipDate:we(r)};r.role==="restricted"&&(o.watched=await oe(t,r.username)),o.mentionsUnread=await At(t,r.username),d.push(o)}}return d}async function P(t,e,a){let d=await t.TODO_KV.get(`user:${e}`);if(!d)return null;let m=JSON.parse(d);return N(m.role)||v(m)!==a?null:m}async function Ot(t){let e=await t.TODO_KV.list({prefix:"user:"}),a=[];for(let d of e.keys){let m=await t.TODO_KV.get(d.name);if(!m)continue;let p=JSON.parse(m);T(p.role)&&a.push({username:p.username,teamName:p.teamName||p.username,contact:p.contact||"",email:p.email||"",remark:p.remark||"",plan:ce(p)?"pro":"trial",pro:R(p),status:ie(p),rawStatus:p.status||"active",emailVerified:p.emailVerified!==!1,emailVerifiedAt:p.emailVerifiedAt||"",trialEndsAt:p.trialEndsAt||"",expiresAt:ce(p)&&p.expiresAt||"",createdAt:p.createdAt,renewedAt:p.renewedAt||"",subscribeRequest:Ge(p)})}return a.sort((d,m)=>{let p=d.subscribeRequest&&d.subscribeRequest.at?1:0,r=m.subscribeRequest&&m.subscribeRequest.at?1:0;return p!==r?r-p:d.createdAt<m.createdAt?1:-1}),a}async function $(t,e){let a=await t.TODO_KV.get(`todos:${e}`);return a?JSON.parse(a):[]}async function Q(t,e,a){await t.TODO_KV.put(`todos:${e}`,JSON.stringify(a))}async function ae(t,e){let a=await t.TODO_KV.get(`customers:${e}`);return a?JSON.parse(a):[]}async function He(t,e,a){await t.TODO_KV.put(`customers:${e}`,JSON.stringify(a))}async function ee(t,e){let a=await t.TODO_KV.get(`viewCustomers:${e}`);return a?JSON.parse(a):[]}async function qe(t,e,a){await t.TODO_KV.put(`viewCustomers:${e}`,JSON.stringify(a))}async function se(t,e){if(!e||!I(e.role))return e;let a=await ee(t,e.username),d=Array.isArray(a)&&a.length>0;return e.canViewAllOrders!==!1===d&&(e.canViewAllOrders=!d,await t.TODO_KV.put(`user:${e.username}`,JSON.stringify(e))),e}async function H(t,e){let a=!e||e===Y?"customerList":`customerList:${e}`,d=await t.TODO_KV.get(a);return d?JSON.parse(d):[]}async function Ce(t,e,a){let d=!e||e===Y?"customerList":`customerList:${e}`;await t.TODO_KV.put(d,JSON.stringify(a))}var Ze=["self","purchased"],Pt="self";function Xe(t){let e=String(t??"").trim();return Ze.includes(e)?e:Pt}async function B(t,e){let a=!e||e===Y?"producers":`producers:${e}`,d=await t.TODO_KV.get(a);return(d?JSON.parse(d):[]).map(p=>({id:p.id,username:p.username||p.shortName||"",description:p.description||"",nature:Xe(p.nature),createdAt:p.createdAt}))}async function me(t,e,a){let d=!e||e===Y?"producers":`producers:${e}`;await t.TODO_KV.put(d,JSON.stringify(a))}async function oe(t,e){let a=await t.TODO_KV.get(`watch:${e}`);return a?JSON.parse(a):[]}async function Qe(t,e,a){await t.TODO_KV.put(`watch:${e}`,JSON.stringify(a))}var Nt=50;function Mt(t){let e=new Set,a=/@([A-Za-z0-9_.-]{3,20})/g,d=String(t||""),m;for(;(m=a.exec(d))!==null;)e.add(m[1]);return[...e]}async function Fe(t,e){let a=[],d=await fe(t,e);for(let m of d)a.push({username:m.username,role:m.role,position:m.position||"",dept:m.dept||"",isTeamAdmin:!1,label:m.username});return a}async function he(t,e){let a=await t.TODO_KV.get(`mentions:${e}`);return a?JSON.parse(a):[]}async function et(t,e,a){await t.TODO_KV.put(`mentions:${e}`,JSON.stringify(a.slice(0,Nt)))}async function tt(t,e){let a=await he(t,e);return{unread:a.filter(d=>!d.read).length,total:a.length}}async function At(t,e){return(await tt(t,e)).unread}async function Bt(t,e,a,d){if(!a||!a.length)return;let m=new Date().toISOString();for(let p of a){let r=await he(t,p);r.unshift({id:_().slice(0,12),from:e.username,todoId:d.todoId,todoTitle:d.todoTitle||"",todoOwner:d.owner||"",text:d.text||"",at:m,read:!1}),await et(t,p,r)}}var Lt={superadmin:"超级管理员",team:"团队管理员",editor:"成员",viewer:"业务主管",restricted:"生产部",producer:"生产方",customer:"客户",superviewer:"总经理",deptmanager:"部门主管"};function L(t){return t&&(t.position||t.dept||Lt[t.role]||t.role)||""}function Ne(t){return t==="viewer"||t==="restricted"||t==="producer"||t==="customer"}var Ut=["品质部","财务部"];function Ue(t){return!!t&&t.role==="restricted"&&Ut.includes(t.dept||"")}function I(t){return t==="editor"||t==="member"}function Dt(t){let e=t&&t.role;return I(e)?"添加订单":"生产单下单权限"}function ke(t){return t?T(t.role)||I(t.role)?!0:t.role==="superviewer"||te(t.role)||Ue(t)?!1:typeof t.canPlaceOrder=="boolean"?t.canPlaceOrder:!1:!1}function de(t){return t?T(t.role)?!0:Ue(t)?!1:I(t.role)?t.canUpdateStatus===!0||t.canPurchase===!0:typeof t.canPurchase=="boolean"?t.canPurchase:ke(t):!1}async function $t(t,e){let a=await ae(t,e);return Array.isArray(a)&&a.length>0}async function Me(t,e){return!e||T(e.role)?!1:I(e.role)?$t(t,e.username):ke(e)}function De(t){return T(t)||t==="superviewer"||te(t)}function ge(t){return t?T(t.role)||t.role==="superviewer"?!0:I(t.role)?t.canUpdateStatus===!0:!1:!1}function G(t){return t?I(t.role)?t.canViewAllOrders!==!1:De(t.role):!1}function Rt(t){return t?T(t.role)||t.role==="superviewer"?!0:I(t.role)&&t.canUpdateStatus===!0:!1}function Ae(t){return t?De(t.role)?!0:I(t.role)&&t.canUpdateStatus===!0:!1}function _t(t){return t?Ne(t.role)||Ae(t)?!0:I(t.role)?G(t):!1:!1}async function rt(t,e){if(!e||!I(e.role)||G(e))return[];let a=await ee(t,e.username),d=[];for(let m of Array.isArray(a)?a:[]){let p=String(m&&m.name||"").trim();p&&d.indexOf(p)===-1&&d.push(p)}return d}async function Vt(t,e,a,d){if(!e||!I(e.role)||G(e)||!a||a===e.username)return!1;let m=await rt(t,e);if(!m.length||!await P(t,a,v(e)))return!1;let s=(await $(t,a)).find(o=>o.id===d);return!!s&&m.indexOf(String(s.customer||"").trim())!==-1}function te(t){return t==="deptmanager"}function Be(t){return t?T(t.role)?!0:I(t.role)?t.canUpdateStatus===!0||t.canViewCustomerOrder===!0:te(t.role)?t.canViewCustomerOrder!==!1:t.role==="producer"||t.role==="customer":!1}function Le(t){return t?T(t.role)?!0:I(t.role)?t.canUpdateStatus===!0||t.canViewPurchaseOrder===!0:te(t.role)?t.canViewPurchaseOrder!==!1:t.role==="superviewer"?!0:de(t):!1}function be(t){return t?T(t.role)?!0:I(t.role)?t.canPlaceMaskedOrder===!0:!1:!1}function we(t){return t?T(t.role)?!0:I(t.role)?t.canAddShipDate===!0:!1:!1}async function q(t,e,a=!1,d=null){let m=await t.TODO_KV.list({prefix:"todos:"}),p=m.keys.map(o=>o.name.replace("todos:","")),r=await Promise.all(p.map(async o=>{let i=await t.TODO_KV.get(`user:${o}`);return i?JSON.parse(i):null})),s=[];for(let o=0;o<p.length;o++){let i=r[o];if(!i||v(i)!==e)continue;let l=await t.TODO_KV.get(m.keys[o].name),c=l?JSON.parse(l):[];for(let u of c){let f=u.status||(u.done?"done":"pending");a&&f==="pending"||d&&!d.includes(u.producerId)||s.push({...u,status:f,owner:p[o]})}}return s.sort((o,i)=>o.createdAt<i.createdAt?1:-1),s}async function zt(t,e){let a=await t.TODO_KV.list({prefix:"user:"}),d=[];for(let m of a.keys){let p=await t.TODO_KV.get(m.name);if(!p)continue;let r=null;try{r=JSON.parse(p)}catch{continue}!r||N(r.role)||v(r)===e&&d.push({username:r.username||m.name.replace(/^user:/,""),role:r.role})}return d}async function Kt(t,e){let a=0,d=await t.TODO_KV.get(`todos:${e}`);if(d)try{let m=JSON.parse(d);a=Array.isArray(m)?m.length:0}catch{a=0}return await t.TODO_KV.delete(`user:${e}`),await t.TODO_KV.delete(`todos:${e}`),await t.TODO_KV.delete(`customers:${e}`),await t.TODO_KV.delete(`viewCustomers:${e}`),await t.TODO_KV.delete(`watch:${e}`),await t.TODO_KV.delete(`mentions:${e}`),await t.TODO_KV.delete(`emailcode:${e}`),await t.TODO_KV.delete(`mailrate:${e}`),{todos:a}}async function jt(t,e,a){let d=t.method;if(a==="/api/login"&&d==="POST"){await ue(e);let{username:r,password:s}=await S(t);if(!r||!s)return n({error:"请输入用户名和密码"},400);let o=await e.TODO_KV.get(`user:${r}`);if(!o)return n({error:"用户名或密码错误"},401);let i=JSON.parse(o);if(await A(s)!==i.password)return n({error:"用户名或密码错误"},401);if(!N(i.role)){let c=await U(e,v(i));if(c&&ie(c)==="disabled")return n({error:"该账户已被停用，请联系超级管理员开通"},403)}if(i.role==="team"&&i.emailVerified===!1){let c=await It(e,i,t);return n({ok:!1,needVerify:!0,username:i.username,email:re(i.email||""),codeTtlSec:K,resendAfterSec:pe,devCode:c.devCode||void 0,sendError:c.ok?void 0:c.error,message:c.ok?`确认码${c.resent?"已重新发送":"已发送"}至注册邮箱，请在 ${Math.floor(K/60)} 分钟内输入完成确认`:"确认码发送失败，请稍后点「重新发送确认码」重试"})}return Ie(e,i)}if(a==="/api/register"&&d==="POST"){if(await ue(e),!(await W(e)).allowRegister)return n({error:"系统当前已关闭新用户注册，如需开通请联系超级管理员"},403);let{teamName:s,username:o,email:i,password:l,confirmPassword:c,contact:u,remark:f}=await S(t),g=(o||"").trim(),b=(s||"").trim(),y=String(i||"").trim(),w=String(l||"");if(!b)return n({error:"请输入团队名称"},400);if(!g)return n({error:"请输入登录用户名"},400);if(!/^[A-Za-z0-9_.-]{3,20}$/.test(g))return n({error:"用户名为 3~20 位字母、数字、下划线、点或短横线"},400);if(g==="admin")return n({error:"该用户名不可用，请更换"},400);if(!y)return n({error:"请输入邮箱"},400);if(y.length>60)return n({error:"邮箱长度不能超过 60 个字符"},400);if(!V.test(y))return n({error:"邮箱格式不正确，请检查后重试"},400);if(!w)return n({error:"请输入密码"},400);if(w.length<6)return n({error:"密码至少 6 位"},400);if(c!==void 0&&w!==String(c))return n({error:"两次输入的密码不一致"},400);if(await e.TODO_KV.get(`user:${g}`))return n({error:"该用户名已被占用，请更换"},400);let E=new Date,C={username:g,password:await A(w),role:"team",teamId:g,teamName:b,contact:String(u||"").trim(),email:y,remark:String(f||"").trim(),emailVerified:!1,plan:"trial",status:"active",trialEndsAt:"",expiresAt:"",createdAt:E.toISOString()};await e.TODO_KV.put(`user:${g}`,JSON.stringify(C));let h=await Pe(e,C,t);return h.ok?n({ok:!0,needVerify:!0,username:g,role:"team",teamName:b,email:re(y),codeTtlSec:K,resendAfterSec:pe,devCode:h.devCode||void 0,unlimitedTrial:!0,message:`确认码已发送至 ${re(y)}，请在 ${Math.floor(K/60)} 分钟内输入完成邮箱确认`}):(await e.TODO_KV.delete(`user:${g}`),n({error:"注册未完成："+h.error},503))}if(a==="/api/register/verify"&&d==="POST"){await ue(e);let{username:r,code:s}=await S(t),o=String(r||"").trim();if(!o)return n({error:"请输入用户名"},400);let i=await e.TODO_KV.get(`user:${o}`);if(!i)return n({error:"用户名不存在，请先注册"},404);let l=JSON.parse(i);if(l.role!=="team")return n({error:"该账号无需邮箱确认"},400);if(l.emailVerified!==!1)return Ie(e,l);let c=await Ct(e,l,s);return c.ok?(l.emailVerified=!0,l.emailVerifiedAt=new Date().toISOString(),await e.TODO_KV.put(`user:${o}`,JSON.stringify(l)),await e.TODO_KV.delete(`emailcode:${o}`),Ie(e,l)):n({error:c.error},400)}if(a==="/api/register/resend"&&d==="POST"){await ue(e);let{username:r,password:s}=await S(t),o=String(r||"").trim();if(!o)return n({error:"请输入用户名"},400);let i=await e.TODO_KV.get(`user:${o}`);if(!i)return n({error:"用户名不存在，请先注册"},404);let l=JSON.parse(i);if(l.role!=="team")return n({error:"该账号无需邮箱确认"},400);if(l.emailVerified!==!1)return n({error:"该账号已完成邮箱确认，可直接登录"},400);if(!s||await A(String(s))!==l.password)return n({error:"密码不正确，无法重新发送确认码"},401);let c=await Pe(e,l,t);return c.ok?n({ok:!0,email:re(l.email||""),codeTtlSec:K,resendAfterSec:pe,devCode:c.devCode||void 0,message:`确认码已重新发送至 ${re(l.email||"")}`}):n({error:c.error},429)}if(a==="/api/logout"&&d==="POST"){let r=We(t);return r&&await e.TODO_KV.delete(`session:${r}`),new Response(JSON.stringify({ok:!0}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":"token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"}})}if(a==="/api/me"&&d==="GET"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let s={username:r.username,role:r.role};if(s.position=r.position||"",s.canPlaceOrder=await Me(e,r),s.canPurchase=de(r),s.canViewCustomerOrder=Be(r),s.canViewPurchaseOrder=Le(r),s.canUpdateStatus=ge(r),await se(e,r),s.canViewAllOrders=G(r),s.canPlaceMaskedOrder=be(r),s.canAddShipDate=we(r),T(r.role)){if(s.teamId=r.teamId||r.username,s.teamName=r.teamName||r.username,s.contact=r.contact||"",s.plan=ce(r)?"pro":"trial",s.pro=R(r),s.trialEndsAt=r.trialEndsAt||"",s.expiresAt=r.expiresAt||"",s.status=ie(r),!R(r)){let l=v(r),[c,u,f]=await Promise.all([fe(e,l),B(e,l),H(e,l)]);s.trialLimits={members:{used:c.length,max:F.members},producers:{used:u.length,max:F.producers},customers:{used:f.length,max:F.customers}}}let i=Ge(r);s.subscribeRequest=i,s.renewRequest=i}else{let i=await U(e,v(r));s.teamId=v(r),s.teamName=i?i.teamName||i.username:"",s.teamPro=R(i)}let o=await tt(e,r.username);return s.mentionsUnread=o.unread,s.mentionsTotal=o.total,n(s)}if(a==="/api/change-password"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let{oldPassword:s,newPassword:o}=await S(t);return!s||!o?n({error:"请填写完整"},400):await A(s)!==r.password?n({error:"原密码错误"},400):(r.password=await A(o),await e.TODO_KV.put(`user:${r.username}`,JSON.stringify(r)),n({ok:!0}))}if(a==="/api/admin/password"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!N(r.role))return n({error:"无权限"},403);let{newPassword:s,confirmPassword:o}=await S(t),i=String(s||"");if(!i.trim())return n({error:"请输入新密码"},400);if(i.length<6)return n({error:"密码至少 6 位"},400);if(o!==void 0&&i!==String(o))return n({error:"两次输入的密码不一致"},400);let l=await e.TODO_KV.get(`user:${r.username}`);if(!l)return n({error:"账号不存在"},404);let c=JSON.parse(l);return c.password=await A(i),c.passwordUpdatedAt=new Date().toISOString(),await e.TODO_KV.put(`user:${r.username}`,JSON.stringify(c)),n({ok:!0,username:r.username})}if(a==="/api/settings"&&d==="GET"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let s=await W(e),o=T(r.role)?r:await U(e,v(r)),i={siteName:s.siteName,allowRegister:s.allowRegister,supportEmail:s.supportEmail,favicon:s.favicon,teamName:o?o.teamName||o.username:""};return N(r.role)&&(i.adCode=s.adCode),n({settings:i})}if(a==="/api/settings"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let{siteName:s,teamName:o,allowRegister:i,supportEmail:l,favicon:c,adCode:u}=await S(t);if(o!==void 0){if(!T(r.role))return n({error:"无权限"},403);let y=String(o).trim();return y?(r.teamName=y,await e.TODO_KV.put(`user:${r.username}`,JSON.stringify(r)),n({ok:!0,settings:{teamName:y}})):n({error:"请输入团队名称"},400)}if(s===void 0&&i===void 0&&l===void 0&&c===void 0&&u===void 0)return n({error:"请填写要保存的内容"},400);if(!N(r.role))return n({error:"无权限"},403);let f=await e.TODO_KV.get("settings"),g=f?JSON.parse(f):{};if(s!==void 0){if(!s||!s.trim())return n({error:"请输入网站名称"},400);g.siteName=s.trim()}if(i!==void 0&&(g.allowRegister=i===!0||i==="true"),l!==void 0){let y=String(l||"").trim();if(y.length>60)return n({error:"联系邮箱长度不能超过 60 个字符"},400);if(y&&!V.test(y))return n({error:"联系邮箱格式不正确，请检查后重试（留空则不显示该提示）"},400);g.supportEmail=y}if(c!==void 0){let y=String(c||"").trim();if(y.length>300)return n({error:"网站图标链接不能超过 300 个字符"},400);let w=J(y);if(w===null)return n({error:"网站图标需填写以 http:// 或 https:// 开头的图片链接（留空则使用默认图标）"},400);g.favicon=w}if(u!==void 0){let y=String(u===null?"":u).trim();if(y.length>3e3)return n({error:"广告代码不能超过 3000 个字符"},400);g.adCode=y}await e.TODO_KV.put("settings",JSON.stringify(g));let b=await W(e);return n({ok:!0,settings:{siteName:b.siteName,allowRegister:b.allowRegister,supportEmail:b.supportEmail,favicon:b.favicon,adCode:b.adCode}})}if((a==="/api/subscribe-request"||a==="/api/renew-request")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let{note:s,contact:o,plan:i}=await S(t);o!==void 0&&(r.contact=String(o||"").trim().slice(0,50));let l=i&&typeof i=="object"?i:null,c=l&&Number(l.days)>0?Math.floor(Number(l.days)):0,u={at:new Date().toISOString(),kind:R(r)?"renew":"subscribe",plan:l&&c?{id:String(l.id||"").slice(0,20),term:String(l.term||"").slice(0,20),price:Number(l.price)>=0?Number(l.price):0,days:c}:null,note:String(s||"").trim().slice(0,200),contact:r.contact||""};r.subscribeRequest=u,delete r.renewRequest,await e.TODO_KV.put(`user:${r.username}`,JSON.stringify(r));let f={ok:!1,to:r.email||"",cc:[],error:""};try{if(!r.email)f.error="该账号没有可用邮箱，无法发送申请邮件";else{let g=await ne(e),b=await W(e),y=bt(g,b);if(f.cc=X({to:r.email,cc:y?[y]:[]}),g.devMode)f.ok=!0,f.devMode=!0;else{let w=await St(e,r,u,g,u.kind),k=await Oe(e,g,{to:r.email,cc:f.cc,subject:w.subject,text:w.text,html:w.html},{local:ye(t)});f.ok=!!k.ok,k.ok||(f.error=k.error||"邮件发送失败")}}}catch(g){f.ok=!1,f.error="邮件发送异常："+(g&&g.message?g.message:String(g))}return console.log(`[订阅申请邮件] ${r.username} -> ${f.to||"-"}`+(f.cc&&f.cc.length?`（抄送 ${f.cc.join(", ")}）`:"")+` ${f.ok?"成功":"失败："+f.error}`),n({ok:!0,subscribeRequest:u,mail:f})}let m="/api/teams";if(a===m&&d==="GET"){let r=await x(t,e);return r?N(r.role)?n({teams:await Ot(e)}):n({error:"无权限"},403):n({error:"未登录"},401)}if(a.startsWith(`${m}/`)&&a.endsWith("/status")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!N(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace(`${m}/`,"").replace("/status","")),{status:o}=await S(t);if(!["active","disabled"].includes(o))return n({error:"无效的状态"},400);let i=await U(e,s);return i?(i.status=o,await e.TODO_KV.put(`user:${s}`,JSON.stringify(i)),n({ok:!0,status:ie(i),expiresAt:i.expiresAt||i.trialEndsAt||""})):n({error:"团队用户不存在"},404)}if(a.startsWith(`${m}/`)&&a.endsWith("/renew")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!N(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace(`${m}/`,"").replace("/renew","")),o=await S(t),i=Number(o.days)>0?Math.floor(Number(o.days)):30;if(i>3650)return n({error:"续费天数过大"},400);let l=await U(e,s);if(!l)return n({error:"团队用户不存在"},404);let c=Date.now(),u=new Date(l.expiresAt||"").getTime(),f=Number.isNaN(u)||u<c?c:u,g=new Date(f+i*ot).toISOString();return l.expiresAt=g,l.status="active",l.plan="pro",l.renewedAt=new Date().toISOString(),delete l.subscribeRequest,delete l.renewRequest,await e.TODO_KV.put(`user:${s}`,JSON.stringify(l)),n({ok:!0,days:i,expiresAt:g,status:"active",pro:!0})}if(a.startsWith(`${m}/`)&&a.endsWith("/reset-password")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!N(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace(`${m}/`,"").replace("/reset-password","")),{newPassword:o}=await S(t);if(!o||!String(o).trim())return n({error:"请输入新密码"},400);let i=await U(e,s);return i?(i.password=await A(String(o).trim()),await e.TODO_KV.put(`user:${s}`,JSON.stringify(i)),n({ok:!0})):n({error:"团队用户不存在"},404)}if(a.startsWith(`${m}/`)&&a.endsWith("/remark")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!N(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace(`${m}/`,"").replace("/remark","")),{remark:o}=await S(t),i=await U(e,s);return i?(i.remark=String(o||"").trim(),await e.TODO_KV.put(`user:${s}`,JSON.stringify(i)),n({ok:!0,remark:i.remark})):n({error:"团队用户不存在"},404)}if(a.startsWith(`${m}/`)&&d==="DELETE"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!N(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.slice(m.length+1));if(!s||s.indexOf("/")!==-1)return n({error:"接口不存在"},404);let o=await U(e,s);if(!o)return n({error:"团队用户不存在"},404);if(o.status!=="disabled")return n({error:"请先「停用」该团队用户，确认无误后再删除"},400);let i=await zt(e,s),l=i.reduce((g,b)=>(g[b.role]=(g[b.role]||0)+1,g),{}),c=0;for(let g of i){let b=await Kt(e,g.username);c+=b.todos}let u=await B(e,s),f=await H(e,s);return await e.TODO_KV.delete(`producers:${s}`),await e.TODO_KV.delete(`customerList:${s}`),n({ok:!0,deleted:{team:s,teamName:o.teamName||s,accounts:i.length,members:i.filter(g=>!["team","producer","customer"].includes(g.role)).length,producers:u.length,customers:f.length,todos:c,roles:l}})}if(a==="/api/admin/email-settings"&&d==="GET"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!N(r.role))return n({error:"无权限"},403);let s=await ne(e);return n({settings:Je(s,e)})}if(a==="/api/admin/email-settings"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!N(r.role))return n({error:"无权限"},403);let{from:s,fromName:o,apiKey:i,devMode:l,smtpHost:c,smtpPort:u,smtpUser:f,smtpPass:g,adminNotifyEmail:b,subExtraText:y,subQrCodes:w}=await S(t),k=await e.TODO_KV.get("emailSettings"),E=k?JSON.parse(k):{};if(s!==void 0){let h=String(s||"").trim();if(h&&!V.test(h))return n({error:"发件邮箱格式不正确，请检查后重试"},400);E.from=h}if(o!==void 0&&(E.fromName=String(o||"").trim().slice(0,30)),i!==void 0){let h=String(i||"").trim();h==="-"?delete E.apiKey:h&&(E.apiKey=h)}if(c!==void 0){let h=String(c||"").trim();if(h&&!/^[A-Za-z0-9.-]{1,60}$/.test(h))return n({error:"SMTP 服务器地址格式不正确（例如 smtp.qq.com）"},400);E.smtpHost=h||"smtp.qq.com"}if(u!==void 0){let h=String(u??"").trim(),O=Number(h)||0;if(h&&(O<1||O>65535))return n({error:"SMTP 端口需为 1~65535 的数字（QQ 邮箱用 465，或 587 + STARTTLS）"},400);E.smtpPort=O||465}if(f!==void 0){let h=String(f||"").trim();if(h&&!V.test(h))return n({error:"SMTP 账号需填写完整邮箱地址（例如 xxx@qq.com）"},400);E.smtpUser=h}if(g!==void 0){let h=String(g||"").trim();h==="-"?delete E.smtpPass:h&&(E.smtpPass=h)}if(l!==void 0&&(E.devMode=!!l),b!==void 0){let h=String(b||"").trim();if(h&&!V.test(h))return n({error:"管理员提醒邮箱格式不正确（留空则默认抄送到发件邮箱）"},400);E.adminNotifyEmail=h}if(y!==void 0){let h=String(y||"").replace(/\r\n/g,`
`).trim();if(h.length>1e3)return n({error:"自定义说明不能超过 1000 个字符"},400);E.subExtraText=h}if(w!==void 0){let h=Array.isArray(w)?w.slice(0,Z):[];if(h.length&&w.length>Z)return n({error:`收款二维码最多 ${Z} 个`},400);for(let D=0;D<h.length;D++){let M=String(h[D]||"").trim();if(M){if(M.length>300)return n({error:`收款二维码链接太长（第 ${D+1} 个，最多 300 个字符）`},400);if(J(M)===null)return n({error:`收款二维码需填写以 http:// 或 https:// 开头的图片链接（第 ${D+1} 个，留空则不显示）`},400)}}let O=ve(h);for(;O.length&&!O[O.length-1];)O.pop();E.subQrCodes=O}await e.TODO_KV.put("emailSettings",JSON.stringify(E));let C=await ne(e);return n({ok:!0,settings:Je(C,e)})}if(a==="/api/admin/email-test"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!N(r.role))return n({error:"无权限"},403);let{to:s}=await S(t),o=String(s||"").trim();if(!o)return n({error:"请输入测试收件邮箱"},400);if(!V.test(o))return n({error:"测试收件邮箱格式不正确"},400);let i=await ne(e);if(i.devMode)return n({ok:!0,devMode:!0,message:"当前为调试模式（不真实发送邮件），无需测试发信"});if(!i.provider)return n({error:"邮件服务未配置：请填写 QQ 邮箱 SMTP 账号与授权码（或 Resend API Key）并保存后，再发送测试邮件"},400);let l=i.provider==="smtp"?"QQ 邮箱 SMTP":i.provider==="resend"?"Resend":"Cloudflare 邮件绑定",c=await Oe(e,i,{to:o,subject:"【测试】邮件服务配置正常",text:"这是一封测试邮件：收到本邮件说明「注册邮箱确认码」的发件服务已配置成功。",html:"<p>这是一封测试邮件：收到本邮件说明「注册邮箱确认码」的发件服务已配置成功。</p>"},{local:ye(t)});return c.ok?n({ok:!0,message:`测试邮件已通过 ${l} 发送至 ${o}，请查收（若没收到，请检查垃圾邮件箱）`}):n({error:c.error},400)}if(a==="/api/users"&&d==="GET"){let r=await x(t,e);return r?T(r.role)?n({users:await fe(e,v(r))}):n({error:"无权限"},403):n({error:"未登录"},401)}if(a==="/api/users"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);if(!R(r)&&(await fe(e,v(r))).length>=F.members)return n({error:Se("members")},403);let{username:s,password:o,position:i}=await S(t);if(!s||!o)return n({error:"请填写用户名和密码"},400);if(await e.TODO_KV.get(`user:${s}`))return n({error:"用户名已存在"},400);let c={username:s,password:await A(o),role:"editor",teamId:v(r),createdAt:new Date().toISOString()},u=String(i??"").trim();return u&&(c.position=u.slice(0,20)),await e.TODO_KV.put(`user:${s}`,JSON.stringify(c)),n({ok:!0})}if(a.startsWith("/api/users/")&&d==="DELETE"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace("/api/users/",""));return await P(e,s,v(r))?(await e.TODO_KV.delete(`user:${s}`),await e.TODO_KV.delete(`todos:${s}`),await e.TODO_KV.delete(`customers:${s}`),await e.TODO_KV.delete(`viewCustomers:${s}`),await e.TODO_KV.delete(`watch:${s}`),await e.TODO_KV.delete(`mentions:${s}`),n({ok:!0})):n({error:"成员不存在"},404)}if(a.startsWith("/api/users/")&&a.endsWith("/reset-password")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=v(r),o=decodeURIComponent(a.replace("/api/users/","").replace("/reset-password","")),{newPassword:i}=await S(t);if(!i||!i.trim())return n({error:"请输入新密码"},400);let l=await e.TODO_KV.get(`user:${o}`);if(!l){let f=(await B(e,s)).find(y=>y.username===o);if(f)return await e.TODO_KV.put(`user:${o}`,JSON.stringify({username:o,password:await A(i),role:"producer",producerId:f.id,teamId:s,createdAt:new Date().toISOString()})),n({ok:!0,created:!0});let b=(await H(e,s)).find(y=>y.name===o);return b?(await e.TODO_KV.put(`user:${o}`,JSON.stringify({username:o,password:await A(i),role:"customer",customerId:b.id,customerName:b.name,teamId:s,createdAt:new Date().toISOString()})),n({ok:!0,created:!0})):n({error:"成员不存在"},404)}let c=JSON.parse(l);return N(c.role)||v(c)!==s?n({error:"成员不存在"},404):(c.password=await A(i),await e.TODO_KV.put(`user:${o}`,JSON.stringify(c)),n({ok:!0}))}if(a.startsWith("/api/users/")&&a.endsWith("/remark")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace("/api/users/","").replace("/remark","")),{remark:o}=await S(t),i=await P(e,s,v(r));return i?(i.remark=String(o||"").trim(),await e.TODO_KV.put(`user:${s}`,JSON.stringify(i)),n({ok:!0,remark:i.remark})):n({error:"成员不存在"},404)}if(a.startsWith("/api/users/")&&a.endsWith("/position")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace("/api/users/","").replace("/position","")),{position:o}=await S(t),i=await P(e,s,v(r));return i?(i.position=String(o||"").trim().slice(0,20),await e.TODO_KV.put(`user:${s}`,JSON.stringify(i)),n({ok:!0,position:i.position})):n({error:"成员不存在"},404)}if(a.startsWith("/api/users/")&&a.endsWith("/order-permission")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace("/api/users/","").replace("/order-permission","")),o=await S(t),i=typeof o.canPlaceOrder=="boolean",l=typeof o.canPurchase=="boolean",c=typeof o.canViewCustomerOrder=="boolean",u=typeof o.canViewPurchaseOrder=="boolean",f=typeof o.canUpdateStatus=="boolean",g=typeof o.canViewAllOrders=="boolean",b=typeof o.canPlaceMaskedOrder=="boolean",y=typeof o.canAddShipDate=="boolean";if(!i&&!l&&!c&&!u&&!f&&!g&&!b&&!y)return n({error:"请传入 true（有）或 false（无）"},400);let w=await P(e,s,v(r));return w?i&&I(w.role)?n({error:"该成员的「添加订单」权限由「可录入订单客户列表」自动决定（有客户即可添加订单），无需在此设置"},400):i&&(w.role==="superviewer"||te(w.role))?n({error:L(w)+"成员不需要「生产单下单权限」（固定不录入订单），无需设置"},400):g&&I(w.role)?n({error:"「是否可查看全部订单」由「可查看客户列表」自动决定（列表为空 = 是，可查看本团队全部订单；在下方「可查看客户列表」中选择客户后 = 否，只能查看这些客户的订单 + 自己录入的订单），无需在此设置"},400):g&&!I(w.role)?n({error:"「是否可查看全部订单」仅适用于普通成员（原业务部）（当前成员："+L(w)+"）"},400):f&&!I(w.role)?n({error:"「是否可以更新订单状态」仅适用于普通成员（原业务部）（当前成员："+L(w)+"）"},400):b&&!I(w.role)?n({error:"「是否可以下脱敏订单」仅适用于普通成员（原业务部）（当前成员："+L(w)+"）"},400):y&&!I(w.role)?n({error:"「是否可以添加出货日期」仅适用于普通成员（原业务部）（当前成员："+L(w)+"）"},400):(c||u)&&!I(w.role)&&!te(w.role)?n({error:"「是否可以查看客户订单 / 查看生产订单」仅适用于普通成员（原业务部）与「部门主管」成员（当前成员："+L(w)+"）"},400):Ue(w)&&(i||l)?n({error:L(w)+"成员不需要「"+(l?"下生产订单":"生产单下单权限")+"」（该部门无录入/下单需求），无需设置"},400):(i&&(w.canPlaceOrder=o.canPlaceOrder),l&&(w.canPurchase=o.canPurchase),c&&(w.canViewCustomerOrder=o.canViewCustomerOrder),u&&(w.canViewPurchaseOrder=o.canViewPurchaseOrder),f&&(w.canUpdateStatus=o.canUpdateStatus),b&&(w.canPlaceMaskedOrder=o.canPlaceMaskedOrder),y&&(w.canAddShipDate=o.canAddShipDate),await e.TODO_KV.put(`user:${s}`,JSON.stringify(w)),n({ok:!0,canPlaceOrder:ke(w),canPurchase:de(w),canViewCustomerOrder:Be(w),canViewPurchaseOrder:Le(w),canUpdateStatus:ge(w),canViewAllOrders:G(w),canPlaceMaskedOrder:be(w),canAddShipDate:we(w)})):n({error:"成员不存在"},404)}if(a.startsWith("/api/customers/")&&d==="GET"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let s=decodeURIComponent(a.replace("/api/customers/",""));return s!==r.username&&!(T(r.role)?await P(e,s,v(r)):null)?n({error:"无权限"},403):n({customers:await ae(e,s)})}if(a.startsWith("/api/customers/")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace("/api/customers/",""));if(!await P(e,s,v(r)))return n({error:"成员不存在"},404);let{name:i,globalId:l}=await S(t);if(!i||!i.trim())return n({error:"请输入客户名称"},400);let c=await ae(e,s),u=i.trim(),f=l?String(l).trim():"";if(c.some(b=>b.name===u||f&&b.id===f))return n({error:"客户已存在"},400);let g={id:f||_().slice(0,12),name:u,createdAt:new Date().toISOString()};return c.push(g),await He(e,s,c),n({ok:!0,customer:g})}if(a.startsWith("/api/customers/")&&d==="DELETE"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace("/api/customers/","")),o=s.lastIndexOf("/");if(o===-1)return n({error:"参数错误"},400);let i=s.slice(0,o),l=s.slice(o+1);if(!await P(e,i,v(r)))return n({error:"成员不存在"},404);let u=await ae(e,i);return u=u.filter(f=>f.id!==l),await He(e,i,u),n({ok:!0})}if(a.startsWith("/api/view-customers/")&&d==="GET"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let s=decodeURIComponent(a.replace("/api/view-customers/",""));return s!==r.username&&!(T(r.role)?await P(e,s,v(r)):null)?n({error:"无权限"},403):n({customers:await ee(e,s)})}if(a.startsWith("/api/view-customers/")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace("/api/view-customers/","")),o=await P(e,s,v(r));if(!o)return n({error:"成员不存在"},404);let{name:i,globalId:l}=await S(t);if(!i||!i.trim())return n({error:"请输入客户名称"},400);let c=i.trim(),u=l?String(l).trim():"",f=await ee(e,s);if(f.some(y=>y.name===c||u&&y.id===u))return n({error:"该客户已在「可查看客户列表」中"},400);let g={id:u||_().slice(0,12),name:c,createdAt:new Date().toISOString()};f.push(g),await qe(e,s,f);let b=await se(e,o);return n({ok:!0,customer:g,canViewAllOrders:b.canViewAllOrders!==!1,viewCustomerCount:f.length})}if(a.startsWith("/api/view-customers/")&&d==="DELETE"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace("/api/view-customers/","")),o=s.lastIndexOf("/");if(o===-1)return n({error:"参数错误"},400);let i=s.slice(0,o),l=s.slice(o+1),c=await P(e,i,v(r));if(!c)return n({error:"成员不存在"},404);let u=await ee(e,i);u=u.filter(g=>g.id!==l),await qe(e,i,u);let f=await se(e,c);return n({ok:!0,canViewAllOrders:f.canViewAllOrders!==!1,viewCustomerCount:u.length})}if(a==="/api/customer-list"&&d==="GET"){let r=await x(t,e);return r?T(r.role)?n({customers:await H(e,v(r))}):n({error:"无权限"},403):n({error:"未登录"},401)}if(a==="/api/customer-list"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=v(r);if(!R(r)&&(await H(e,s)).length>=F.customers)return n({error:Se("customers")},403);let{name:o,password:i,description:l}=await S(t);if(!o||!o.trim())return n({error:"请输入用户名"},400);if(!i||!String(i).trim())return n({error:"请输入密码"},400);let c=await H(e,s),u=o.trim();if(c.some(b=>b.name===u))return n({error:"该用户名已存在"},400);if(await e.TODO_KV.get(`user:${u}`))return n({error:"该用户名已被占用"},400);let g={id:_().slice(0,12),name:u,description:(l||"").trim(),createdAt:new Date().toISOString()};return c.push(g),await Ce(e,s,c),await e.TODO_KV.put(`user:${u}`,JSON.stringify({username:u,password:await A(String(i).trim()),role:"customer",customerId:g.id,customerName:u,teamId:s,createdAt:g.createdAt})),n({ok:!0,customer:g})}if(a.startsWith("/api/customer-list/")&&d==="DELETE"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=v(r),o=decodeURIComponent(a.replace("/api/customer-list/","")),i=await H(e,s),l=i.find(c=>c.id===o);return i=i.filter(c=>c.id!==o),await Ce(e,s,i),l&&l.name&&await e.TODO_KV.delete(`user:${l.name}`),n({ok:!0})}if(a.startsWith("/api/customer-list/")&&a.endsWith("/description")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=v(r),o=decodeURIComponent(a.replace("/api/customer-list/","").replace("/description","")),{description:i}=await S(t),l=await H(e,s),c=l.find(u=>u.id===o);return c?(c.description=String(i||"").trim(),await Ce(e,s,l),n({ok:!0,description:c.description})):n({error:"客户不存在"},404)}if(a==="/api/producers"&&d==="GET"){let r=await x(t,e);return r?n({producers:await B(e,v(r))}):n({error:"未登录"},401)}if(a==="/api/producers"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=v(r);if(!R(r)&&(await B(e,s)).length>=F.producers)return n({error:Se("producers")},403);let{username:o,password:i,description:l,nature:c}=await S(t),u=(o||"").trim();if(!u)return n({error:"请输入用户名"},400);if(!i||!String(i).trim())return n({error:"请输入密码"},400);let f=await B(e,s);if(f.some(y=>y.username===u))return n({error:"该用户名已存在"},400);if(await e.TODO_KV.get(`user:${u}`))return n({error:"该用户名已被成员占用"},400);let b={id:_().slice(0,12),username:u,description:(l||"").trim(),nature:Xe(c),createdAt:new Date().toISOString()};return f.push(b),await me(e,s,f),await e.TODO_KV.put(`user:${u}`,JSON.stringify({username:u,password:await A(String(i).trim()),role:"producer",producerId:b.id,teamId:s,createdAt:b.createdAt})),n({ok:!0,producer:b})}if(a.startsWith("/api/producers/")&&d==="DELETE"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=v(r),o=decodeURIComponent(a.replace("/api/producers/","")),i=await B(e,s),l=i.find(c=>c.id===o);return i=i.filter(c=>c.id!==o),await me(e,s,i),l&&l.username&&await e.TODO_KV.delete(`user:${l.username}`),n({ok:!0})}if(a.startsWith("/api/producers/")&&a.endsWith("/description")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=v(r),o=decodeURIComponent(a.replace("/api/producers/","").replace("/description","")),{description:i}=await S(t),l=await B(e,s),c=l.find(u=>u.id===o);return c?(c.description=String(i||"").trim(),await me(e,s,l),n({ok:!0,description:c.description})):n({error:"生产方不存在"},404)}if(a.startsWith("/api/producers/")&&a.endsWith("/nature")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=v(r),o=decodeURIComponent(a.replace("/api/producers/","").replace("/nature","")),{nature:i}=await S(t),l=String(i??"").trim();if(!Ze.includes(l))return n({error:"生产方性质只能是「自产」或「外购」"},400);let c=await B(e,s),u=c.find(f=>f.id===o);return u?(u.nature=l,await me(e,s,c),n({ok:!0,nature:u.nature})):n({error:"生产方不存在"},404)}let p="/api/watch/";if(a.startsWith(p)&&d==="GET"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let s=v(r),o=decodeURIComponent(a.replace(p,""));if(o!==r.username&&!(T(r.role)?await P(e,o,s):null))return n({error:"无权限"},403);let i=await oe(e,o),l=await B(e,s),c=i.map(u=>{let f=l.find(g=>g.id===u);return f||{id:u,username:"（已删除的生产方）",description:"",deleted:!0}});return n({producers:c})}if(a.startsWith(p)&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=v(r),o=decodeURIComponent(a.replace(p,"")),i=await P(e,o,s);if(!i)return n({error:"成员不存在"},404);let{producerId:l}=await S(t);if(!l||!String(l).trim())return n({error:"请选择生产方"},400);let c=String(l).trim();if(!(await B(e,s)).some(g=>g.id===c))return n({error:"生产方不存在，请先在「生产方管理」中添加"},400);if(i.role!=="restricted")return n({error:"该成员不是「生产部」成员，无法授权可观察的生产方"},400);let f=await oe(e,o);return f.includes(c)?n({error:"已授权该生产方"},400):(f.push(c),await Qe(e,o,f),n({ok:!0,producerIds:f}))}if(a.startsWith(p)&&d==="DELETE"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!T(r.role))return n({error:"无权限"},403);let s=decodeURIComponent(a.replace(p,"")),o=s.lastIndexOf("/");if(o===-1)return n({error:"参数错误"},400);let i=s.slice(0,o),l=s.slice(o+1);if(!await P(e,i,v(r)))return n({error:"成员不存在"},404);let u=await oe(e,i);return u=u.filter(f=>f!==l),await Qe(e,i,u),n({ok:!0,producerIds:u})}if(a==="/api/team-members"&&d==="GET"){let r=await x(t,e);return r?n({members:await Fe(e,v(r))}):n({error:"未登录"},401)}if(a==="/api/mentions"&&d==="GET"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let s=await he(e,r.username);return n({items:s,unread:s.filter(o=>!o.read).length,total:s.length})}if(a==="/api/mentions/read"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let s=await S(t),o=s&&s.id?String(s.id).trim():"",i=!(s&&s.read===!1),l=await he(e,r.username),c=0;for(let u of l)u.read!==i&&(o&&u.id!==o||(u.read=i,c++));return c&&await et(e,r.username,l),n({ok:!0,changed:c,read:i,unread:l.filter(u=>!u.read).length,total:l.length})}if(a==="/api/todos"&&d==="GET"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let s=v(r);if(I(r.role)&&ge(r))return n({todos:await q(e,s,!1),readonly:!1,allUsers:!0});if(De(r.role))return n({todos:await q(e,s,!1),readonly:!1,allUsers:!0});if(r.role==="viewer")return n({todos:await q(e,s,!0),readonly:!0,allUsers:!0});if(r.role==="restricted"){let i=await oe(e,r.username);return n({todos:await q(e,s,!0,i),readonly:!0,allUsers:!0})}if(r.role==="producer"){let l=(await B(e,s)).find(c=>c.id===r.producerId);return n({todos:await q(e,s,!0,l?[l.id]:[]),readonly:!0,allUsers:!0})}if(r.role==="customer"){let i=r.customerName||"",l=i?await q(e,s,!0):[];return n({todos:l.filter(c=>c.customer===i),readonly:!0,allUsers:!0})}if(I(r.role)&&await se(e,r),I(r.role)&&!G(r)){let l=(await $(e,r.username)).map(b=>Object.assign({},b,{owner:r.username})),c=await rt(e,r);if(!c.length)return n({todos:l,readonly:!1});let f=(await q(e,s,!1)).filter(b=>b.owner!==r.username&&c.indexOf(String(b.customer||"").trim())!==-1).map(b=>Object.assign({},b,{viewOnly:!0})),g=l.concat(f);return g.sort((b,y)=>b.createdAt<y.createdAt?1:-1),n({todos:g,readonly:!1,allUsers:!0})}if(I(r.role))return n({todos:await q(e,s,!1),readonly:!0,allUsers:!0});let o=await $(e,r.username);return n({todos:o.map(i=>Object.assign({},i,{owner:r.username})),readonly:!1})}if(a==="/api/todos"&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!await Me(e,r))return T(r.role)?n({error:"团队账号不录入订单（试用版与专业版一致）：请在「成员管理」中添加成员、在「可录入订单客户列表」中为其分配客户后，由成员登录录入订单"},403):I(r.role)?n({error:"暂无客户，请联系团队管理员在「成员管理」的「可录入订单客户列表」中为你添加客户（有客户即可添加订单）"},403):n({error:L(r)+"无「"+Dt(r)+"」，请联系团队管理员在「成员管理」中开通"},403);let{title:s,customer:o,dueDate:i,amount:l,orderUrl:c,purchaseUrl:u,currency:f}=await S(t);if(!o||!o.trim())return n({error:"选择客户"},400);if(!s||!s.trim())return n({error:"请输入主题"},400);if(!i||!String(i).trim())return n({error:"选择交期"},400);let g=J(c);if(g===null)return n({error:"订单文件链接需以 http:// 或 https:// 开头"},400);let b=J(u);if(b===null)return n({error:"采购文件链接需以 http:// 或 https:// 开头"},400);if(l==null||String(l).trim()==="")return n({error:"输入金额"},400);let y=Number(l);if(Number.isNaN(y)||y<0)return n({error:"金额必须为非负数字"},400);let w=o.trim();if(!(await ae(e,r.username)).some(h=>h.name===w))return n({error:"客户不存在，请联系管理员添加"},400);let k=await $(e,r.username),E={id:_().slice(0,12),customer:o.trim(),title:s.trim(),dueDate:String(i).trim(),amount:y,currency:pt(f),orderUrl:g,purchaseUrl:b,notes:[],status:"pending",done:!1,createdAt:new Date().toISOString()};return k.unshift(E),await Q(e,r.username,k),n({ok:!0,todo:E})}if(a.startsWith("/api/todos/")&&a.endsWith("/notes")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);let s=decodeURIComponent(a.replace("/api/todos/","").replace("/notes","")),o=await S(t),i=o.text;if(!i||!i.trim())return n({error:"请输入备注内容"},400);let l=r.username;if(_t(r)){let k=o.owner||r.username;if(k!==r.username&&!await P(e,k,v(r)))return n({error:"无权操作该用户的待办"},403);l=k}else if(o.owner&&o.owner!==r.username){if(!await Vt(e,r,o.owner,s))return n({error:"无权操作该用户的待办"},403);l=o.owner}let c=await $(e,l),u=c.findIndex(k=>k.id===s);if(u===-1)return n({error:"未找到"},404);Array.isArray(c[u].notes)||(c[u].notes=[]);let f=await Fe(e,v(r)),g=new Set(f.map(k=>k.username)),b=new Set;if(Array.isArray(o.mentions))for(let k of o.mentions){let E=String(k||"").trim();E&&g.has(E)&&b.add(E)}for(let k of Mt(i))g.has(k)&&b.add(k);b.delete(r.username);let y=[...b],w={id:_().slice(0,12),text:i.trim(),author:r.username,createdAt:new Date().toISOString(),mentions:y};return c[u].notes.push(w),await Q(e,l,c),await Bt(e,r,y,{todoId:c[u].id,todoTitle:c[u].title,owner:l,text:w.text}),n({ok:!0,note:w})}if(a.startsWith("/api/todos/")&&d==="PUT"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(Ne(r.role))return n({error:L(r)+"无编辑权限"},403);let s=decodeURIComponent(a.replace("/api/todos/","")),o=await S(t);if((typeof o.status=="string"||typeof o.done=="boolean")&&!Rt(r))return n({error:"只有团队管理员、总经理或拥有「更新订单状态」权限的成员可以改变订单状态"},403);let l=r.username;if(Ae(r)&&o.owner&&o.owner!==r.username){if(!await P(e,o.owner,v(r)))return n({error:"无权操作该用户的待办"},403);l=o.owner}let c=await $(e,l),u=c.findIndex(f=>f.id===s);if(u===-1)return n({error:"未找到"},404);if(typeof o.title=="string"){let f=o.title.trim();if(!f)return n({error:"请输入 PO# / 主题"},400);c[u].title=f}if(typeof o.dueDate=="string"||o.amount!==void 0||o.orderUrl!==void 0||o.purchaseUrl!==void 0){if((c[u].status||(c[u].done?"done":"pending"))!=="pending")return n({error:"仅「待确认」的待办可修改交期/金额/文件链接"},403);if(typeof o.dueDate=="string"){let g=o.dueDate.trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(g))return n({error:"请输入正确的交期"},400);c[u].dueDate=g}if(o.amount!==void 0&&o.amount!==null&&String(o.amount).trim()!==""){let g=Number(o.amount);if(Number.isNaN(g)||g<0)return n({error:"金额必须为非负数字"},400);c[u].amount=g}if(o.orderUrl!==void 0){let g=J(o.orderUrl);if(g===null)return n({error:"订单文件链接需以 http:// 或 https:// 开头"},400);c[u].orderUrl=g}if(o.purchaseUrl!==void 0){let g=J(o.purchaseUrl);if(g===null)return n({error:"采购文件链接需以 http:// 或 https:// 开头"},400);c[u].purchaseUrl=g}}if(typeof o.producerId=="string"&&o.producerId.trim()){let g=(await B(e,v(r))).find(b=>b.id===o.producerId.trim());if(!g)return n({error:"生产方不存在，请先在「生产方管理」中添加"},400);c[u].producerId=g.id,c[u].producerName=g.username,c[u].producerAssignedAt=new Date().toISOString()}if(typeof o.status=="string"){if(!["pending","doing","done"].includes(o.status))return n({error:"无效的状态"},400);c[u].status=o.status,c[u].done=o.status==="done"}else typeof o.done=="boolean"&&(c[u].done=o.done,c[u].status=o.done?"done":"doing");return c[u].status==="doing"&&!c[u].producerId&&await Ye(e,r)?n({error:"请为该待办指定生产方（生产方来自「生产方管理」）"},400):(await Q(e,l,c),n({ok:!0,todo:c[u]}))}if(a.startsWith("/api/todos/")&&a.endsWith("/purchase-link")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!de(r))return n({error:L(r)+"无「下生产订单」权限，请联系团队管理员在「成员管理」中开通"},403);let s=decodeURIComponent(a.replace("/api/todos/","").replace("/purchase-link","")),o=await S(t),i=r.username;if(o.owner&&o.owner!==r.username){if(!await P(e,o.owner,v(r)))return n({error:"无权操作该用户的待办"},403);i=o.owner}let l=await $(e,i),c=l.findIndex(f=>f.id===s);if(c===-1)return n({error:"未找到"},404);if(l[c].purchaseUrl)return n({error:"该订单已有采购文件链接，如需修改请联系团队管理员"},403);let u=J(o.purchaseUrl);return u===null?n({error:"采购文件链接需以 http:// 或 https:// 开头"},400):u?(l[c].purchaseUrl=u,await Q(e,i,l),n({ok:!0,purchaseUrl:u})):n({error:"请输入采购文件链接"},400)}if(a.startsWith("/api/todos/")&&a.endsWith("/masked-link")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!be(r))return n({error:L(r)+"无「下脱敏订单」权限，请联系团队管理员在「成员管理」中开通"},403);let s=decodeURIComponent(a.replace("/api/todos/","").replace("/masked-link","")),o=await S(t),i=r.username;if(o.owner&&o.owner!==r.username){if(!await P(e,o.owner,v(r)))return n({error:"无权操作该用户的待办"},403);i=o.owner}let l=await $(e,i),c=l.findIndex(f=>f.id===s);if(c===-1)return n({error:"未找到"},404);if(l[c].maskedUrl)return n({error:"该订单已有脱敏订单文件链接，填写后不可再修改"},403);let u=J(o.maskedUrl);return u===null?n({error:"脱敏订单文件链接需以 http:// 或 https:// 开头"},400):u?(l[c].maskedUrl=u,await Q(e,i,l),n({ok:!0,maskedUrl:u})):n({error:"请输入脱敏订单文件链接"},400)}if(a.startsWith("/api/todos/")&&a.endsWith("/ship-date")&&d==="POST"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(!we(r))return n({error:L(r)+"无「添加出货日期」权限，请联系团队管理员在「成员管理」中开通"},403);let s=decodeURIComponent(a.replace("/api/todos/","").replace("/ship-date","")),o=await S(t),i=r.username;if(o.owner&&o.owner!==r.username){if(!await P(e,o.owner,v(r)))return n({error:"无权操作该用户的待办"},403);i=o.owner}let l=await $(e,i),c=l.findIndex(f=>f.id===s);if(c===-1)return n({error:"未找到"},404);if(l[c].shipDate)return n({error:"该订单已添加出货日期，不能重复添加"},403);let u=String(o.shipDate||"").trim();return u?/^\d{4}-\d{2}-\d{2}$/.test(u)?(l[c].shipDate=u,await Q(e,i,l),n({ok:!0,shipDate:u})):n({error:"请输入正确的出货日期"},400):n({error:"请选择出货日期"},400)}if(a.startsWith("/api/todos/")&&d==="DELETE"){let r=await x(t,e);if(!r)return n({error:"未登录"},401);if(Ne(r.role))return n({error:L(r)+"无删除权限"},403);let s=decodeURIComponent(a.replace("/api/todos/","")),o=r.username;if(Ae(r)){let u=new URL(t.url).searchParams.get("owner");if(u&&u!==r.username){if(!await P(e,u,v(r)))return n({error:"无权操作该用户的待办"},403);o=u}}let i=await $(e,o),l=i.find(u=>u.id===s);return l?(l.status||(l.done?"done":"pending"))!=="pending"?n({error:"该事件已进入「进行中/已完成」状态，无法删除"},403):(i=i.filter(u=>u.id!==s),await Q(e,o,i),n({ok:!0})):n({error:"未找到"},404)}return n({error:"接口不存在"},404)}var Qt={async fetch(t,e,a){let d=new URL(t.url),m=d.pathname;if(m.startsWith("/api/"))try{return await jt(t,e,m)}catch(p){return n({error:"服务器错误: "+p.message},500)}if(m==="/"||m==="/login"){let p=await W(e);return new Response($e(p.siteName,p.allowRegister,p.supportEmail,p.favicon),{headers:{"Content-Type":"text/html; charset=utf-8"}})}if(m==="/todos"){let p=await W(e),r=await x(t,e),s=r?await Me(e,r):!1,o=await yt(e,r,p),l=(r?await Ye(e,r):!1)?"":p.adCode;return new Response(Re(p.favicon,s,o,l),{headers:{"Content-Type":"text/html; charset=utf-8"}})}if(m==="/admin"){let p=await x(t,e);if(!p)return Response.redirect(d.origin+"/",302);if(!N(p.role))return Response.redirect(d.origin+"/todos",302);let r=await W(e);return new Response(_e(r.favicon,r.siteName),{headers:{"Content-Type":"text/html; charset=utf-8"}})}return new Response("Not Found",{status:404})}};export{Qt as default};
