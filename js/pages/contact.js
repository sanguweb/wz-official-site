/**
 * Created by Administrator on 2017/3/29.
 * Depending on the jquery-1.11.3.min.js.
 * Depending on the css/contact.less.
 * To cite this document, always state the source as shown above.
 */
if (!wzOffice) {
    var wzOffice = {};
}
$(function() {
    wzOffice.init();
});

wzOffice.init = function() {
    wzOffice.initCity();
    wzOffice.mapHandle();
    wzOffice.panelHandle();
};

wzOffice.cmpData = {
    city: [],
    photo: [],
    name: [],
    address: [],
    tel: [],
    tax: [],
    email: []
};



//数据初始化排序处理
wzOffice.initCity = function() {
    var mapTags = document.querySelector('.map-tags'),
        provinceList = '';

    for (var i = 0, dataLength = branchOfficeData.length; i < dataLength; i++) {
        var _self = branchOfficeData[i],
            getProvince = _self.province, //获取省份
            getId = _self.id, //获取省份ID
            getCity = _self.child, //获取城市列表
            city = "", //城市名初始化
            photo = "", //公司前台照片初始化
            name = "", //公司名初始化
            address = "", //地址初始化
            tel = "", //电话初始化
            tax = "", //传真初始化
            email = "", //邮箱初始化
            cityList = "";

        wzOffice.setList = function(obj) { //设置
            city = obj.city || obj.province;
            photo = obj.photo; //公司前台照片初始化
            name = obj.name;
            address = obj.address;
            tel = obj.tel;
            tax = obj.tax;
            email = obj.email;
        };

        wzOffice.getList = function(obj) { //获取
            wzOffice.cmpData.city.push(obj.city);
            wzOffice.cmpData.photo.push(obj.photo);
            wzOffice.cmpData.name.push(obj.name);
            wzOffice.cmpData.address.push(obj.address);
            wzOffice.cmpData.tel.push(obj.tel);
            wzOffice.cmpData.tax.push(obj.tax);
            wzOffice.cmpData.email.push(obj.email);
        };

        if (getCity) { //如果省内有分公司
            for (var j = 0, cityLength = getCity.length; j < cityLength; j++) {
                var _this = getCity[j]; //当前城市列表
                if (_this.constructor === Array) { //同地址多个公司
                    for (var k = 0, moreLength = _this.length; k < moreLength; k++) {
                        var _that = _this[k];
                        wzOffice.setList(_that);
                        wzOffice.getList(_that);
                    }
                } else {
                    wzOffice.setList(_this);
                    wzOffice.getList(_this);
                }
                cityList += " <a href='#' class='city'>" + city + "</a>";
            }
            provinceList += "<li data-id='" + getId + "'>" + getProvince + "<span class='cityList'>" + cityList + "</span></li>";
        } else {
            wzOffice.getList(_self);
            provinceList += "<li data-id='" + getId + "'  class='city'>" + getProvince + "</li>";
        }
    }


    //填充
    mapTags.innerHTML = provinceList;
};


// 地图划过交互处理
wzOffice.mapHandle = function() {
    var provinceList = $('.map-tags').find('li');
    provinceList.first().addClass('active'); //默认省份初始化
    provinceList.first().find('a').first().addClass('active'); //默认省份初始化

    provinceList.each(function() {
        var _self = $(this), // 当前省份
            currentCity = _self.find('a'), //当前省份下城市
            firstCity = currentCity.eq(0), //当前省份下第一个城市
            otherPro = _self.siblings(), //省份
            otherCity = _self.siblings().find('a'); //其它城市

        if (currentCity) {
            _self.on('mouseover', function() { //省份交互
                _self.addClass('active').siblings().removeClass('active');
                if (!currentCity.hasClass('active')) {
                    firstCity.addClass('active');
                }
                otherCity.removeClass('active');
            });

            currentCity.each(function() { //城市交互
                $(this).on('mouseover', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    otherCity.removeClass('active');
                    otherPro.removeClass('active');
                    return false;
                });
            });
        }
    });
};

// 右侧面板交互处理
wzOffice.panelHandle = function() {
    var all = $('.map-tags').find('.city'),
        mapInfo = $('.map-info'),
        prevBtn = mapInfo.find('.prev'), // 上一个
        nextBtn = mapInfo.find('.next'), // 下一个
        img = mapInfo.find('img'), //图片展示
        name = mapInfo.find('.name'),
        address = mapInfo.find('.address'),
        tel = mapInfo.find('.tel'),
        tax = mapInfo.find('.tax'),
        email = mapInfo.find('.email'),
        num = 0;

    var length = wzOffice.cmpData.name.length - 1;


    wzOffice.panelInit = function(index) {
        img.attr('src', wzOffice.cmpData.photo[index]);
        name.text(wzOffice.cmpData.name[index]);
        address.text(wzOffice.cmpData.address[index]);
        tel.text(wzOffice.cmpData.tel[index]);
        tax.text(wzOffice.cmpData.tax[index]);
        email.text(wzOffice.cmpData.email[index]);
    };
    wzOffice.panelInit(num); //初始化

    prevBtn.on('click', function() {
        num--;
        if (num === -1) {
            num = length;
        }
        all.eq(num).trigger('mouseover');
        debugger;
        wzOffice.panelInit(num);
    });


    nextBtn.on('click', function() {
        num++;
        if (num === length) {
            num = 0;
        }
        all.eq(num).trigger('mouseover');
        debugger;
        wzOffice.panelInit(num);
    });

    document.onkeydown = function(ev) {
        ev = ev || event;
        var keyCode = ev.keyCode;
        if (keyCode === 37) {
            num--;
            if (num === -1) {
                num = length;
            }
            wzOffice.panelInit(num);
        } else if (keyCode === 39) {
            num++;
            if (num === length) {
                num = 0;
            }
            wzOffice.panelInit(num);
        }
    };
};

// 待封装
// wzOffice.cityHandle = function (_this, _other) {
//     _this.on('mouseover', function () {
//         _this.addClass('active').siblings().removeClass('active');
//         _other.removeClass('active');
//         return false;
//     });
// };