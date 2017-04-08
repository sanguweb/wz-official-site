/**
 * Created by Antares on 2016/11/16.
 */

/**
 * Created by Administrator on 2016/10/20.
 */

if (!wzJoinUs) {
  var wzJoinUs = wzJoinUs || {};
}

$(function () {
  wzJoinUs.init();
});

wzJoinUs.init = function () {
  
  //初始化表格
  wzJoinUs.creatTable();
  // 弹框
  wzJoinUs.popUp();
};

// 装载表格数据
wzJoinUs.creatTable = function () {
  var tableBody = $('.tab-content').find('tbody').eq(0);
  var $jobDetailsList = wzJoinUs.JobDetailsList;
  var addStr = '';
  $.each($jobDetailsList, function () {
    var title = this.title,
      basic = this.basic,
      department = basic.department,
      peoples = basic.peoples,
      date = basic.date;
    addStr += wzJoinUs.pushTmp(title, department, peoples, date);
  });
  tableBody.append(addStr);
};

//弹框职位详情
wzJoinUs.popUp = function () {
  var jobDetail = $('#jobDetail'), //详情
    preViewBtn = $('.tab-content').find('.preview'),// 按钮
    closedBtn = jobDetail.find('#job-close-btn'), //关闭按钮
    
    //title(DOM)
    jobTitle = jobDetail.find('.job-title'),
    //main(DOM)
    jobDescription = jobDetail.find('#content'),
    
    //header(DOM)
    basic = jobDetail.find('.job-point').find('li').find('span'),
    department = basic.eq(0),//部门
    peoples = basic.eq(1),//人数
    background = basic.eq(2),//教育背景
    area = basic.eq(3);//适用范围
  
  $.each(preViewBtn, function (i) {
    $(this).click(function () {
      jobDetail.fadeIn(200).addClass('open');
      
      //对应的json
      var JobDetailsList = eval("wzJoinUs.JobDetailsList.job" + i);
      var basic = JobDetailsList.basic; //基础信息
      
      //导入对应数据
      jobTitle.text(JobDetailsList.title);
      department.text(basic.department);
      peoples.text(basic.peoples);
      background.text(basic.background);
      area.text(basic.area);
      jobDescription.empty().append(JobDetailsList.description);
    })
  });
  closedBtn.on('click', function () {
    jobDetail.removeClass('open').fadeOut(200);
  })
};

//模版
wzJoinUs.pushTmp = function (title, department, peoples, date) {
  return '<tr>\
        <td><label>招聘职位：</label>' + title + '</td>\
        <td><label>所属部门：</label>' + department + '</td>\
        <td><label>招聘人数：</label>' + peoples + '</td>\
        <td><label>发布时间：</label>' + date + '</td>\
        <td><span class="preview">查看详情</span></td>\
    </tr>';
};

//职位要求详情数据
wzJoinUs.JobDetailsList = {
  job0: {
    title: '管理培训生',
    basic: {
      department: '综合岗',
      peoples: '15名',
      background: '本科及以上',
      area: '211、985学院毕业，毕业一年（含）以内',
      date: '2016-08-12'
    },
    description: '<figure><ul><li><label>总裁培训班：</label>集团总裁亲自培训，传授职场生存法则以及企业经营智慧，在实战中提升业务技能以及思维模式；</li><li><label>成长周期：</label>培养周期6-12个月不等，如果能力突出，提前分配至各分公司任职管理岗；</li><li><label>任职条件：</label>211/985大学学历，如果你工作经验不到一年，但又不满足于现状，欢迎加入维正，突破职业瓶颈；如果你是应届毕业生， 但是勇于挑战，欢迎你的加入！如果你渴望成功，希望靠自己的努力改变现状，改变命运，恭喜你，你就是我们最佳的创业伙伴人选！ </li></ul></figure><figure><h5>你需要做的:</h5><ol><li>1.根据本客户群/区域市场策略要求，通过面谈、网络以及电话沟通等手段进行所在客户群/区域的客户成交和客户服务，帮助客户 实现商业成功。 </li><li>2.通过行业形势、竞争对手、客户情况、市场机会等途径搜集资料，强有力地执行团队目标，实现自我价值。</li><li>3.掌握各行业一手资源，调动集团内部优势资源，加强客户体验，帮助客户实现利益最大化。</li></ol></figure><figure><h5>我们能提供的:</h5><ol><li>1.工资待遇：一经录取，培训期间年薪10W以上，后期根据个人经验以及能力逐年增长，可享受集团在职股权激励政策（年终分红 10W以上）；培训期结束，直接晋升分公司管理层，参与公司重大决策的制定； </li><li>2.员工宿舍：免费提供员工宿舍，两房一厅，小区绿化环境好，离公司不超过200M距离；</li><li>3.培训机会：入职一个月之内，总裁亲自培训，教授业务技能；</li><li>4.聚餐福利：重大节日外加不定期团队聚餐，发放节日礼品；</li><li>5.生日福利：员工生日礼金发放；</li><li>6.团队出游：公司每年至少组织1-2次团队出游；（国内外均可）</li><li>7.岗位晋升：完善的KPI考核制度，为优秀人才提供公平开放的晋升平台；维正不仅以人为本，更是以奋斗者为本；</li><li>8.在职股权激励机制：入职三个月以上员工均可享受一定比例在职股权发放，股权逐年累加，每年年底现金分红（年终分红10W以上）；</li></ol></figure><figure><ul><li><label>工作地址：</label>深圳市南山区科技路1号桑达科技大厦3楼</li><li><label>联系方式：</label>可咨询维正集团所有分公司电话</li></ul></figure>'
  },
  job1: {
    title: '流程专员',
    basic: {
      department: '流程部',
      peoples: '5名',
      background: '本科及以上',
      area: '相关工作2年以上',
      date: '2016-08-12'
    },
    description: '<figure><h5>岗位描述:</h5><ol><li>1.准备、审核及提交各类专利文件；</li><li>2.统筹和协调对国内专利流程涉及的各种文件、费用及时限等日常流程管理工作；</li><li>3.对各种流程信函进行审核及辅导;</li><li>4.根据专利流程相关规定对递交官方的各种文件进行核查;</li><li>5.协助代理人处理专利流程中涉及的各种申请手续;</li><li>6.使用系统软件完成相关录入及客户监控工作;</li><li>7.负责收发、处理官方和客户往来文件，并对文件进行录入、分发</li><li>8.服务解决老客户问题，促进二次合作。</li></ol></figure><figure><h5>岗位要求:</h5><ol><li>1.大专以上学历、女性；</li><li>2.熟练使用photoshop、CorelDRAW ，Auto-CAD、OFFICE等软件；</li><li>3.愿意从事专利流程工作，良好的沟通能力、工作认真细心，责任心强，具有较强的团队协作意识；</li></ol></figure><figure><ul><li><label>工作地址：</label>深圳市南山区科技路1号桑达科技大厦3楼</li><li><label>联系方式：</label>可咨询维正集团所有分公司电话</li></ul></figure>'
  },
  job2: {
    title: '商标代理人',
    basic: {
      department: '商标部',
      peoples: '5名',
      background: '本科及以上',
      area: '相关工作2年以上',
      date: '2016-08-12'
    },
    description: '<figure><h5>岗位职责：</h5><ol><li>1.为客户提供商标注册、分析和咨询服务，引导和挖掘客户的商标深层次业务需求；</li><li>2.为客户拟制商标品牌保护报告，提供保护方案；</li><li>3.协助市场人员开拓商标业务，提供商标专业支持，以及客户培训。</li></ol></figure><figure><h5>任职要求：</h5><ol><li>1.大学本科以上学历，具备良好的学习能力、沟通能力、客户服务能力，以及业务挖掘能力；</li><li>2.对知识产权行业充满憧憬和向往，对商标和知识产权具有一定的理解；</li><li>3.积极上进，愿意为中国企业的转型升级贡献一份力量。</li></ol></figure>'
  },
  job3: {
    title: '商务专员',
    basic: {
      department: '商务部',
      peoples: '5名',
      background: '本科及以上',
      area: '相关工作2年以上',
      date: '2016-08-12'
    },
    description: '<figure><ol><li>1.不管你来自哪里，我们希望你正直，待人真诚。</li> <li>2.无论你年龄大小，我们希望你有强烈的成功欲望，证明自己存在的价值。</li> <li>3.你一定要能吃苦，要勤奋，否则别到这里来。因为勤奋+思考才容易更快的成长。维正才能更好地成长。</li> <li>4.你一定要有团队意识，一个人可以走的很快，但不可能走得很远。</li> <li>5.你要敢于突破自己，不逼自己一把，你永远不知道自己有多强。</li> <li>6.你要懂得自律，如果现在还不能自律，那就让团队和环境来帮助你。</li> <li>7.拥有超强的执行力， 一流的创意+三流的执行永远比不上三流创意+一流的执行，加入我们！</li> </ol> </figure> <figure><h5>岗位职责：</h5> <ol> <li>1.通过多种渠道挖掘潜在客户，将其转为意向客户；</li> <li>2.为客户制定知识产权规划方案，帮助企业客户通过维护知识产权获得利益；</li> <li>3.与客户建立长期良好合作关系，提供全面的售后服务；</li> <li>4.不断扩大自己的客户圈，凭借每月绩效获得报酬。</li> </ol> </figure> <figure><h5>任职资格：</h5> <ol> <li>1.20-30岁，口齿清晰，灵活性强，抗压能力出众；</li> <li>2.热爱并看好知识产权行业的发展前景，有志于在本行业长期发展；</li> <li>3.对销售工作有较高的热情；</li> <li>4.有上进心，富有不断进取的精神和良好团队合作意识；</li> <li>5.有敏锐的市场洞察力，有强烈的事业心、责任心和积极的工作态度，有相关电话销售工作经验者优先。</li> </ol> </figure> <figure><h5>人才培养计划</h5> <p>晋升渠道：商务专员---商务经理---商务总监---商务大区总监---分公司股东</p></figure> '
  },
  job4: {
    title: '项目工程师',
    basic: {
      department: '项目部',
      peoples: '5名',
      background: '本科及以上',
      area: '机械、电子、化工、机电一体化等理工科专业或者法学专业',
      date: '2016-08-12'
    },
    description: '<figure><h5>岗位职责：</h5><ol><li>1.根据项目实际情况制定项目进度计划，协助项目经理编写项目可行性研究报告，控制项目进度；</li><li>2.负责各类政府资质项目申报、鉴定、验收；</li><li>3.与客户方项目负责人进行不定期沟通，定期汇报项目进度；</li><li>4.组织项目管理培训，规范项目管理；</li></ol></figure><figure><h5>岗位要求：</h5><ol><li>1.具有较强专业理论基础及写作能力，对项目材料有较好的逻辑分析及组织能力；</li><li>2.熟悉科技项目申报流程者优先；</li><li>3.熟悉会计相关科目者优先。</li></ol></figure>'
  },
  job5: {
    title: '知识产权管理咨询（贯标）顾问 ',
    basic: {
      department: '项目部',
      peoples: '1名',
      background: '本科及以上',
      area: '相关工作2年以上',
      date: '2016-08-12'
    },
    description: '<figure><h5>职位描述：</h5><ol><li>1. 热爱知识产权或管理咨询行业，并有自己独到的见解；</li><li>2.熟悉企业知识产权管理，对构建企业知识产权管理体系有一定经验；</li><li>3. 成熟、稳重，乐于分享沟通，对目标执着；</li><li>4.假如，你有《企业知识产权管理规范》（贯标）辅导经验或知识产权管理体系审核员资质那就更好了，我们找的就是你！</li></ol></figure><figure><h5>工作能力和要求：</h5><ol><li>1.必须具备熟悉和了解GB/T29490-2013体系（贯标）的能力和相关知识，两年以上从业经验；</li><li>2.能够辅导企业通过体系认证产品实现；</li><li>3.至少完成（主持或参与）过一次GB/T29490-2013体系认证工作；</li><li>4.接受过专业的GB/T29490-2013体系培训，甚至取得审核员资质的；</li></ol></figure><figure><h5>欢迎您加入维正集团</h5><p>工作地点：杭州</p></figure>'
  },
  job6: {
    title: '资深项目申报导师',
    basic: {
      department: '项目部',
      peoples: '2名',
      background: '大专及以上',
      area: '40周岁以内',
      date: '2016-08-12'
    },
    description: '<figure><h5>岗位职责：</h5><ol><li>1.负责政府政策研究、系统性分析及各项目需求分析，能准确分析政府补贴方向，有能力撰写及调整资料，以符合相关要求；</li><li>2.组织团队进行项目学习，培养团队后备队伍，定向担任成员导师，协助团队成员提高专业能力。</li><li>3.拥有良好的沟通能力和逻辑思维能力，工作细心，踏实稳重；</li><li>4.为客户提供科技项目申报方案的支持。</li></ol></figure><figure><h5>任职资格：</h5><ol><li>1.本领域相关知识较全面，熟悉国家及相关部门政策，，组织策划沟通能力强；</li><li>2.对项目可行性能做出准确分析与判断，扎实的文字功底，熟悉政府申报文件以及项目策划书的撰写，能够独立完成项目申报工作；</li><li>3.具有5年以上政府资金申报工作经验，有高科技公司、相关代理咨询公司政府项目申报工作经验，并具有成功申报项目案例者优先考虑；</li><li>4.精通政府相关部门的信息发布途径、办事流程等情况；精通项目申报流程，并对关键点进行跟踪；</li></ol></figure>'
  },
  job7: {
    title: '专利代理人',
    basic: {
      department: '专利部',
      peoples: '10名',
      background: '本科及以上',
      area: '相关工作2年以上',
      date: '2016-08-12'
    },
    description: '<figure><h5>岗位职责：</h5><ol><li>1.撰写专利申请文件；</li><li>2.答复官方审查意见；</li><li>3.参与专利检索、专利无效、复审、侵权分析、专利诉讼等工作。</li><li>4.参与相关知识产权知识培训。</li></ol></figure><figure><h5>任职资格：</h5><ol><li>1.全日制院校本科以上学历；</li><li>2.英语四级以上水平；</li><li>3.具有良好的文字表达能力和技术理解力，学习能力强、逻辑分析能力强、思维缜密；</li><li>4.认真、敬业、有责任心、有良好的沟通能力和团队精神；</li><li>5.有专利代理人执业证者优先。</li></ol></figure>'
  },
  job8: {
    title: '专利代理人助理',
    basic: {
      department: '专利部',
      peoples: '2名',
      background: '本科及以上',
      area: '化学、电气、通讯、机械等理工科专业',
      date: '2016-08-12'
    },
    description: '<figure><h5>岗位职责：</h5><ol><li>1.撰写专利申请文件；</li><li>2.答复官方审查意见；</li><li>3.与研发人员沟通进行技术挖掘、专利技术的专利性分析。</li></ol></figure><figure><h5>任职资格：</h5><ol><li>1.全日制院校本科以上学历；</li><li>2.英语四级以上水平；</li><li>3.具有良好的文字表达能力和技术理解力，学习能力强；</li><li>4.认真、敬业、有责任心、有良好的沟通能力和团队精神；</li><li>5.具有1年以上专利代理工作经验，有专利代理人资格证优先。</li></ol></figure>'
  },
  job9: {
    title: '总裁秘书',
    basic: {
      department: '总裁办',
      peoples: '1名',
      background: '本科及以上',
      area: '相关工作2年以上',
      date: '2016-08-12'
    },
    description: '<figure><h5>岗位职责：</h5><ol><li>1.协助总裁处理日常工作，根据总裁要求，跟踪决议事项的推进；</li><li>2.负责总裁的日常行程安排；会议的统筹安排； </li><li>3.负责总裁文件，信件，函电的接收与转达； </li><li>4.负责总裁日常经营工作中文件的起草；  </li><li>5.负责上传下达总裁的指令，并可独当一面解决非战略决策性的问题； </li><li>6.完成总裁交办的其他事项。 </li></ol></figure><figure><h5>任职资格：</h5><ol><li>1.全日制本科及以上学历，英语四级以上，形象气质好，曾在大型集团公司任职相关岗位，两年以上相关工作经验；</li><li>2.性格开朗、直率；责任心、事业心强，能承受工作压力，团队协作能力佳；</li><li>3.具备良好的沟通协调能力，公文写作功底扎实； </li><li>4.工作能力强，有严密的逻辑思维能力和全面的分析判断能力，较强的统筹外联协调能力，成熟稳重，商业逻辑性强；</li><li>5.驾龄五年以上。</li></ol></figure>'
  }
};


