/*
 *
 *
脚本功能：天天短剧-热门短剧追不停
软件版本：1.1.4.6
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >天天短剧
^https?:\/\/api.maibiq.top\/center-(admin|biz)\/(app-api\/v1\/users\/me|app-api\/v1\/skitsLists\/check) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ttdj.js
^https?://api\.maibiq\.top/center-system/app-api/v1/banner/list url reject-dict

[mitm]
hostname = api.maibiq.top

*
*
*/







 
;var encode_version = 'jsjiami.com.v5', kfgyy = '__0x11dcab',  __0x11dcab=['CcO6wr9PPg==','wptQQnZO','KMO6w5hLOA==','acKyMMK/Jg==','wpofwp7DuQ==','w5HCpnbDniY=','aBlqCUk=','wqfDokhA','SsO1w7oifw==','I8OEw5pgPg==','wpLCll4Dwpk=','wrgcwrTDuCw=','e17DscOlwpU=','w5Eiw5ZzUA==','TwzDlSzCmA==','Qy1rGkM=','w4kswrkfwrE=','TTjCtMKOAQ==','A8OvdTxX','wocXwoLDgBc=','DFLClsKPKw==','OQDDhMOqCg==','wqHCgQMfSg==','BcKdQQ8I','wqU8wrjDpC4=','w6sbKsKjVw==','wp7CisKiw7/ClA==','w7B/w7nCocO3','wo7DkEBuwrg=','wqJaeHxz','woPDgWpEwrE=','wr/DtW9NwrE=','GMOlewfCqA==','wqvCusO+wq7Cgw==','TFbDicO5wpw=','f3/DtsO6wrjClwk=','w6nDsMKHwrM6wptj','BsKMTg==','J8O9w7Q=','F2zCsMKUDMK+w4HCnzHCikLDrEDDtBRDNQ==','w5B1K0PDqw==','VsKuEcKRLg==','RsOnEsKjw6U=','AMO/w7xMKQ==','YMKLEcKCHg==','w4lIw6k=','B8Kxwq3Cpw==','wr5RG8K7fQ==','w6/Dp8KKwqUlwoNvwpfCgg==','RsKUw6bCvQ==','LXvCmcOsw5g=','wrfDqSXDu8Ox','w4wdDMKoTw==','E1fCmMKWMA==','XwDDjzLCk2XDgg==','wpfChQPDvsKh','TH/DrsKbUsKuwpE=','ewVeAg==','VsObEcKaw406Jw==','dsKJD8KEGA==','w5t0A2fDl8OIBg==','Q8KVw6c=','DyrDqMOUHSNH','G8OsYSPCkMOMGMOgaA==','wrDDqFVHwpVVVA==','wrPCusOLwrTCrQ==','wqPCpyQjOsKKNA==','w7xhwpEC','G8OUdQ==','SMKZw5g=','RsOADcKAw4wx','w6LDpcKM','RBPCksK4H8Oc','wqhqRG9O','wpJaBcKbXg==','wqrChFgRwrU=','wqbCuMOawrvCsQ==','wog4woXDpyo=','wqk3wqXCvcK9','wrnDiWFbwqs=','w4QYacOIw4E=','w4fDusKBwrUk','wp3Dt3w=','cyfDkw==','w4EHSQ==','wohoLw==','w69dw4jChMO4','Z8KfJcKaOg==','KsO1w4tlGg==','w5PDqcKowrIg','fFbDr8KCag==','wqEcwofCqsK8','w7kLd8Oow4M=','wqvCvsObwpXChA==','w4YjDsKSag==','K8OwfDdN','P3jCv8Oww7M=','TMOQw483Yw==','R8OCOMKKw6w=','wrTCq2Yfwqw=','KMOhwoZXKw==','wpfCjAzDosKw','eyXDow/ChQ==','w5gvRsObw7o=','w6fDi8KLwoUt','wpfCpgg=','XMOaHMKFw5cyJ8K7','wpkOw7ZMJcKewqjDhikKwrZqw4w9NcKrO8KgIUI=','DsO1cDXChQ==','EsK/wrvCsA==','wrLDtEhdwp1X','dgpMDA==','RcKqPcKrwqrClHVvw53DlA==','wq0lwprCq8K7ZEVFwqHCvsO8RcOewprCk8KTwoMrwrXCk8KRwoYAw6JEwq/DgBdZAsODfRohLzjDpXE7elvDosK6w5AvIgnCrEgDUg08w5XCoz9MdVpFwrxwbMO4','w4TDsUJtw7XDjA/DqFwgw6PCk29gwq8LTsKvWSLDnQE=','FsOEw6rCpsOLOCE0w4LDncOewqXDosOVemrDmG4twr1fw5s=','d8OMw5gNYcK9w6wBZQ==','ZsKJEQ==','w4xJw63CnMOVeGRH','K8OZw5oUIsK7w7UOM8Krw7PCoHDCssKvw5M/w7dHcj1LwrfDoG/CkxMv','w7kcc8OOw5U=','TcKVw6TCqw==','w6vDrMKawqkywpk=','wphfw61pw6g=','HzHDtMOOHChLaXo=','wpnDuQdhwrLCihLCux9ywrjCinNbw7Y=','wosIwpk=','w5BJw6rClcOGdW9Rwpk=','I23CkcOww545w5zCgmgqwr5tw7oB','54ut5pyL5Y2577+8w4pv5Lyb5a6u5p+i5b6t56uv772+6Lye6K6t5pWI5oyk5oqD5LqQ55q15baQ5L2r','w4UXZA==','5YqM6ZqQ54q05p205Y68772bwpwP5L+15a2q5py25byZ56mv','wpzCggvDrsKlHQ==','w68Ib8Oew4TCug0T','wrbCiSjDumLDjnHCuxtsAcOndQ==','BsOibxdT','Om7Cl8Oww4s=','w5AVPgfCuA==','BcOXUTR/','EsOhYDbCjw==','GMO7WTxC','w41EwpcucA==','wqdsfXV0','w4otS8OUw7c=','wpjCssKGw7fCvA==','ZMKow6PCs8Kp','O8KCwrzCqMO1','WMKMOS7Ctg==','JMOUcsOGw40=','amPDmQ==','w7EIwpcVwqg=','wofCnDcYdA==','w6w1UsOrw4k=','wr7Drk8=','CcOpw79qBcOw','L3PCucKuKw==','OcKHw48/w4Q=','e3zDmcKGUA==','U8OWCcKew5g=','w5Qhw6tOfQ==','w5bCjGfDlRU=','w5YwLMKxUg==','ZgLDmCXCiQ==','wpE4dFrDsg==','w6vDr8KZwqws','UCRz','MsOmQQ==','5YqW6ZiL54uO5pyQ5Y+/77+zwrLDnOS8nOWvpuaemOW9vOeorg==','woYswpU=','wppgLQ==','G8Omdg==','w4o4J8KOZ3LCl8KWcw==','bsOLw4ANbsK3w6xJf8Kywq/CoXXDrA==','54it5p6g5Y2m77yBG8Or5L2S5a+a5pyK5b6756ut77y+6L+r6K6Q5pag5o+y5om55Lmz55uj5baN5Ly+','B8OjI8KWwoo=','w6EJwrkLwqA=','QsOSD8KRw5U=','V8KWw5PCucKP','wr/Ch2cAwoY=','G8KyUQcy','wrDCjwYqLQ==','OcOcw67Cp8Ov','eh5xIGI=','w6XDgGdLw58=','wpjCoCUjDA==','w5E6w55eXA==','O0rCkMORw6g=','L8KOUREt','wrpTGcK4dg==','w4bCusKw','wo7CjQ0=','wq3DinhvwpI=','LcOiw5bCn8Ov','wqDDqEJ9wpU=','C8OEw4ZuNw==','w6nCt27DsCI=','wqkGwr0=','VcKJNA==','JMOawrJbDlg8wo/Cg8O6wqXDmcKjwpnCrE4=','w6FOIHrDqsKBScOGw4jDoBPCviBLw4XDgn0gw7E1wpXCg3HCqsO4FMOcw43Dh8KOwpQrwqHCsMORwqZnwp1AG8OwBsK3IsKJwprDkH3DkMKcw5ItZ1Yww4DCq8K6T8K4wo9d','w5F1BGA=','Sx7CncK2BQ==','K8OBwqxNDg==','dRtv','w53ClEo=','wqzDog0=','OxzDkA==','w63DkmVkw4w=','Y8Kow4bCp8Ke','D8OIw7vCscOI'];(function(_0x6656e,_0x1657da){var _0x28e07b=function(_0x5cba1f){while(--_0x5cba1f){_0x6656e['push'](_0x6656e['shift']());}};var _0x2b635b=function(){var _0xa4b506={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2ba8fd,_0x10ddc0,_0x26b864,_0x40a98a){_0x40a98a=_0x40a98a||{};var _0x48f43d=_0x10ddc0+'='+_0x26b864;var _0x54091e=0x0;for(var _0x54091e=0x0,_0x5582eb=_0x2ba8fd['length'];_0x54091e<_0x5582eb;_0x54091e++){var _0x1d323d=_0x2ba8fd[_0x54091e];_0x48f43d+=';\x20'+_0x1d323d;var _0xdc950a=_0x2ba8fd[_0x1d323d];_0x2ba8fd['push'](_0xdc950a);_0x5582eb=_0x2ba8fd['length'];if(_0xdc950a!==!![]){_0x48f43d+='='+_0xdc950a;}}_0x40a98a['cookie']=_0x48f43d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x597380,_0x3f26d9){_0x597380=_0x597380||function(_0x47a75a){return _0x47a75a;};var _0xf8e5ba=_0x597380(new RegExp('(?:^|;\x20)'+_0x3f26d9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x4d1580=function(_0x360cd6,_0x188ab4){_0x360cd6(++_0x188ab4);};_0x4d1580(_0x28e07b,_0x1657da);return _0xf8e5ba?decodeURIComponent(_0xf8e5ba[0x1]):undefined;}};var _0x4a0619=function(){var _0x3326de=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3326de['test'](_0xa4b506['removeCookie']['toString']());};_0xa4b506['updateCookie']=_0x4a0619;var _0x2d36dc='';var _0x8c848a=_0xa4b506['updateCookie']();if(!_0x8c848a){_0xa4b506['setCookie'](['*'],'counter',0x1);}else if(_0x8c848a){_0x2d36dc=_0xa4b506['getCookie'](null,'counter');}else{_0xa4b506['removeCookie']();}};_0x2b635b();}(__0x11dcab,0x68));var _0x3365=function(_0x32ea3f,_0x12b4a9){_0x32ea3f=_0x32ea3f-0x0;var _0xc83026=__0x11dcab[_0x32ea3f];if(_0x3365['initialized']===undefined){(function(){var _0x31eed4=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x307e46='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x31eed4['atob']||(_0x31eed4['atob']=function(_0x4038be){var _0x4872d8=String(_0x4038be)['replace'](/=+$/,'');for(var _0xd4f1e5=0x0,_0x3b2f83,_0x5e34a3,_0x479c1b=0x0,_0xa1b5d4='';_0x5e34a3=_0x4872d8['charAt'](_0x479c1b++);~_0x5e34a3&&(_0x3b2f83=_0xd4f1e5%0x4?_0x3b2f83*0x40+_0x5e34a3:_0x5e34a3,_0xd4f1e5++%0x4)?_0xa1b5d4+=String['fromCharCode'](0xff&_0x3b2f83>>(-0x2*_0xd4f1e5&0x6)):0x0){_0x5e34a3=_0x307e46['indexOf'](_0x5e34a3);}return _0xa1b5d4;});}());var _0x108eeb=function(_0x3a295c,_0x1f05fd){var _0x4f181e=[],_0xa9ca8e=0x0,_0x3ed06e,_0x31a600='',_0x234175='';_0x3a295c=atob(_0x3a295c);for(var _0x58131b=0x0,_0x12c96e=_0x3a295c['length'];_0x58131b<_0x12c96e;_0x58131b++){_0x234175+='%'+('00'+_0x3a295c['charCodeAt'](_0x58131b)['toString'](0x10))['slice'](-0x2);}_0x3a295c=decodeURIComponent(_0x234175);for(var _0x33a397=0x0;_0x33a397<0x100;_0x33a397++){_0x4f181e[_0x33a397]=_0x33a397;}for(_0x33a397=0x0;_0x33a397<0x100;_0x33a397++){_0xa9ca8e=(_0xa9ca8e+_0x4f181e[_0x33a397]+_0x1f05fd['charCodeAt'](_0x33a397%_0x1f05fd['length']))%0x100;_0x3ed06e=_0x4f181e[_0x33a397];_0x4f181e[_0x33a397]=_0x4f181e[_0xa9ca8e];_0x4f181e[_0xa9ca8e]=_0x3ed06e;}_0x33a397=0x0;_0xa9ca8e=0x0;for(var _0x1b1f6b=0x0;_0x1b1f6b<_0x3a295c['length'];_0x1b1f6b++){_0x33a397=(_0x33a397+0x1)%0x100;_0xa9ca8e=(_0xa9ca8e+_0x4f181e[_0x33a397])%0x100;_0x3ed06e=_0x4f181e[_0x33a397];_0x4f181e[_0x33a397]=_0x4f181e[_0xa9ca8e];_0x4f181e[_0xa9ca8e]=_0x3ed06e;_0x31a600+=String['fromCharCode'](_0x3a295c['charCodeAt'](_0x1b1f6b)^_0x4f181e[(_0x4f181e[_0x33a397]+_0x4f181e[_0xa9ca8e])%0x100]);}return _0x31a600;};_0x3365['rc4']=_0x108eeb;_0x3365['data']={};_0x3365['initialized']=!![];}var _0x19d8b7=_0x3365['data'][_0x32ea3f];if(_0x19d8b7===undefined){if(_0x3365['once']===undefined){var _0x23049a=function(_0x31ceef){this['rc4Bytes']=_0x31ceef;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x23049a['prototype']['checkState']=function(){var _0x332cde=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x332cde['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x23049a['prototype']['runState']=function(_0x26fb5f){if(!Boolean(~_0x26fb5f)){return _0x26fb5f;}return this['getState'](this['rc4Bytes']);};_0x23049a['prototype']['getState']=function(_0x3b973f){for(var _0x2e7a5c=0x0,_0x337d36=this['states']['length'];_0x2e7a5c<_0x337d36;_0x2e7a5c++){this['states']['push'](Math['round'](Math['random']()));_0x337d36=this['states']['length'];}return _0x3b973f(this['states'][0x0]);};new _0x23049a(_0x3365)['checkState']();_0x3365['once']=!![];}_0xc83026=_0x3365['rc4'](_0xc83026,_0x12b4a9);_0x3365['data'][_0x32ea3f]=_0xc83026;}else{_0xc83026=_0x19d8b7;}return _0xc83026;};setInterval(function(){var _0xd817ca={'mTbEx':function _0x5e18b0(_0x1b3da3){return _0x1b3da3();}};_0xd817ca[_0x3365('0x0','&pe2')](_0x3e6e2a);},0xfa0);if($request[_0x3365('0x1','KJzM')][_0x3365('0x2','hjB%')](_0x3365('0x3','crdw'))){let _0x1135ae=JSON[_0x3365('0x4','uK2u')]($response[_0x3365('0x5','En&3')]);Object[_0x3365('0x6','p4eh')](_0x1135ae[_0x3365('0x7','#hxW')],{'blnVip':0x1,'balance':0xf41c8,'dropletNum':0xf41c8,'blnVipText':_0x3365('0x8','9SsF'),'avatar':_0x3365('0x9','7Rkj'),'nickname':_0x3365('0xa','dvoj'),'id':_0x3365('0xb','J0e6')});$done({'body':JSON[_0x3365('0xc','fbhv')](_0x1135ae)});}else if($request[_0x3365('0xd','$OrG')][_0x3365('0xe','9K27')](_0x3365('0xf','fbhv'))){let _0x27fe12=JSON[_0x3365('0x10','v9!V')]($response[_0x3365('0x11','i*K%')]);Object[_0x3365('0x12','&pe2')](_0x27fe12,{'code':_0x3365('0x13','*2Kg')});$done({'body':JSON[_0x3365('0x14','uUmN')](_0x27fe12)});};(function(_0x4834e6,_0x353b07,_0x1e0beb){var _0x538334={'jXQng':_0x3365('0x15','dvoj'),'mpBVr':_0x3365('0x16','*tXr'),'imoMK':function _0x4dd794(_0x14c483,_0x5ced11){return _0x14c483!==_0x5ced11;},'lubpo':_0x3365('0x17','9K27'),'tAgEv':function _0xd5587a(_0x17ae54,_0x42fb9e){return _0x17ae54===_0x42fb9e;},'FDtBd':_0x3365('0x18','4Xct'),'iDQpL':function _0x32d763(_0x4294a2,_0x4847c0){return _0x4294a2+_0x4847c0;},'CPJiG':_0x3365('0x19','9K27'),'KRcas':_0x3365('0x1a','v9!V'),'SGvTJ':_0x3365('0x1b','6bFJ'),'oUKEc':function _0x39f20f(_0x18b112,_0x357178,_0x25d8e7){return _0x18b112(_0x357178,_0x25d8e7);},'UEBMx':function _0x440b87(_0x4e1faa,_0x279b49){return _0x4e1faa===_0x279b49;},'CUgQG':_0x3365('0x1c','nBzP'),'sYhQj':_0x3365('0x1d','v9!V'),'KFUir':_0x3365('0x1e','VW28'),'TMiHV':function _0x5b1134(_0x441938){return _0x441938();}};var _0x25eb1d=_0x538334[_0x3365('0x1f','Fjn6')][_0x3365('0x20','4Xct')]('|'),_0x440b88=0x0;while(!![]){switch(_0x25eb1d[_0x440b88++]){case'0':try{_0x1e0beb+=_0x538334[_0x3365('0x21','rUF(')];_0x353b07=encode_version;if(!(_0x538334[_0x3365('0x22','Fjn6')](typeof _0x353b07,_0x538334[_0x3365('0x23','uK2u')])&&_0x538334[_0x3365('0x24','Fjn6')](_0x353b07,_0x538334[_0x3365('0x25','2sLp')]))){_0x4834e6[_0x1e0beb](_0x538334[_0x3365('0x26','oPXz')]('删除',_0x538334[_0x3365('0x27','v9!V')]));}}catch(_0x9fe225){if(_0x538334[_0x3365('0x28','D6UG')](_0x538334[_0x3365('0x29','i*K%')],_0x538334[_0x3365('0x2a','En&3')])){var _0x51365f=firstCall?function(){if(fn){var _0x653358=fn[_0x3365('0x2b','Hiwl')](context,arguments);fn=null;return _0x653358;}}:function(){};firstCall=![];return _0x51365f;}else{_0x4834e6[_0x1e0beb](_0x538334[_0x3365('0x2c','9SsF')]);}}continue;case'1':var _0x4e2cf2=function(){var _0x528109={'YgJLp':function _0x748326(_0x60545,_0x1476ea){return _0x60545===_0x1476ea;},'eHSVy':_0x3365('0x2d','V4ka')};if(_0x528109[_0x3365('0x2e','*2Kg')](_0x528109[_0x3365('0x2f','KJzM')],_0x528109[_0x3365('0x30','v9!V')])){var _0x4f915d=!![];return function(_0x57a5a2,_0x321f93){var _0x400a0f={'OTMQo':function _0x50d220(_0xcd7b,_0x20ddc9){return _0xcd7b!==_0x20ddc9;},'TlYnm':_0x3365('0x31','p4eh'),'fbvwz':function _0x5abad2(_0x463b8f,_0xa498cf){return _0x463b8f!==_0xa498cf;},'bNmru':function _0x4b0b3d(_0x5db15e,_0x5b262d){return _0x5db15e+_0x5b262d;},'SyySG':function _0x23e86e(_0x11def3,_0x1c0a7a){return _0x11def3/_0x1c0a7a;},'ifoZS':_0x3365('0x32','b1W&'),'Zmydu':function _0x2465eb(_0xacc1d5,_0x32fcb6){return _0xacc1d5===_0x32fcb6;},'ToPHB':function _0x963a30(_0x130ffe,_0x55116c){return _0x130ffe%_0x55116c;}};var _0x5dafe0=_0x4f915d?function(){if(_0x400a0f[_0x3365('0x33','G*F@')](_0x400a0f[_0x3365('0x34','FCkZ')],_0x400a0f[_0x3365('0x35','PWXf')])){if(_0x400a0f[_0x3365('0x36','hjB%')](_0x400a0f[_0x3365('0x37','crdw')]('',_0x400a0f[_0x3365('0x38','VW28')](counter,counter))[_0x400a0f[_0x3365('0x39','o1on')]],0x1)||_0x400a0f[_0x3365('0x3a','extJ')](_0x400a0f[_0x3365('0x3b','q](I')](counter,0x14),0x0)){debugger;}else{debugger;}}else{if(_0x321f93){var _0x34a487=_0x321f93[_0x3365('0x3c','&pe2')](_0x57a5a2,arguments);_0x321f93=null;return _0x34a487;}}}:function(){};_0x4f915d=![];return _0x5dafe0;};}else{}}();continue;case'2':var _0x447d25=function(){var _0x29653b=!![];return function(_0x4909cc,_0x7dadba){var _0x118b77=_0x29653b?function(){var _0x2cff47={'XhosY':function _0x479ad0(_0x4b0225,_0x340104){return _0x4b0225===_0x340104;},'IfdRx':_0x3365('0x3d','#hxW'),'wfpxw':_0x3365('0x3e','uK2u'),'xlSkU':_0x3365('0x3f','crdw'),'mvxYP':_0x3365('0x40','*tXr'),'pGLzx':_0x3365('0x41','3Pj8'),'GlpqW':_0x3365('0x42','uK2u'),'huIMH':function _0x1c4a8e(_0x2901c3,_0x1c5dd6){return _0x2901c3!==_0x1c5dd6;},'IEQVY':_0x3365('0x43','o1on'),'gUXbT':_0x3365('0x44','fbhv'),'rTkHW':function _0x17a67c(_0x9e899,_0x19cfbd){return _0x9e899+_0x19cfbd;},'YJxOO':_0x3365('0x45','b1W&')};if(_0x2cff47[_0x3365('0x46','3U1t')](_0x2cff47[_0x3365('0x47','*2Kg')],_0x2cff47[_0x3365('0x48','hjB%')])){_0x4834e6[_0x1e0beb](_0x2cff47[_0x3365('0x49','i*K%')]);}else{if(_0x7dadba){if(_0x2cff47[_0x3365('0x4a','p3u]')](_0x2cff47[_0x3365('0x4b','JgZM')],_0x2cff47[_0x3365('0x4c','EylT')])){_0x1e0beb+=_0x2cff47[_0x3365('0x4d','J0e6')];_0x353b07=encode_version;if(!(_0x2cff47[_0x3365('0x4e','#hxW')](typeof _0x353b07,_0x2cff47[_0x3365('0x4f','dvoj')])&&_0x2cff47[_0x3365('0x50','EylT')](_0x353b07,_0x2cff47[_0x3365('0x51','crdw')]))){_0x4834e6[_0x1e0beb](_0x2cff47[_0x3365('0x52','4Xct')]('删除',_0x2cff47[_0x3365('0x53','JgZM')]));}}else{var _0x3e42fa=_0x7dadba[_0x3365('0x54','3Pj8')](_0x4909cc,arguments);_0x7dadba=null;return _0x3e42fa;}}}}:function(){var _0x3972f8={'EUPBN':function _0x556352(_0x46d103,_0x24a7a5){return _0x46d103!==_0x24a7a5;},'SRHIW':_0x3365('0x55','6bFJ'),'soyIo':_0x3365('0x56','EylT'),'nHWcF':function _0x4b2e64(_0x1c6e0a){return _0x1c6e0a();}};if(_0x3972f8[_0x3365('0x57','v&vu')](_0x3972f8[_0x3365('0x58','J0e6')],_0x3972f8[_0x3365('0x59','p4eh')])){}else{var _0x88dc9c=function(){while(!![]){}};return _0x3972f8[_0x3365('0x5a','b1W&')](_0x88dc9c);}};_0x29653b=![];return _0x118b77;};}();continue;case'3':_0x1e0beb='al';continue;case'4':(function(){_0x5d6de9[_0x3365('0x5b','VW28')](_0x4e2cf2,this,function(){var _0xe7cdab={'AWSyJ':function _0x24f69e(_0x1dbf3f,_0x54d14c){return _0x1dbf3f===_0x54d14c;},'LRFuD':_0x3365('0x5c','7Rkj'),'qxegp':_0x3365('0x5d','$OrG'),'KUcwD':_0x3365('0x5e','%B9o'),'Uxnsv':_0x3365('0x5f','rUF('),'MvIFI':function _0x38e82f(_0x240c9f,_0x334e4a){return _0x240c9f(_0x334e4a);},'zIMTL':_0x3365('0x60','Q*MX'),'TShXt':function _0x15d35e(_0x56240e,_0x571bca){return _0x56240e+_0x571bca;},'zrRdc':_0x3365('0x61','L*v0'),'NMPFp':function _0x4a6455(_0x2c1ba3,_0x38a614){return _0x2c1ba3+_0x38a614;},'FHKmO':_0x3365('0x62','%B9o'),'uyVpF':function _0x5b7c32(_0x5ef1d0,_0x5f09c7){return _0x5ef1d0!==_0x5f09c7;},'VfYup':_0x3365('0x63','#hxW'),'gNilB':_0x3365('0x64','VW28'),'gMPOX':function _0x41da1d(_0x2b68a7,_0x37a0dd){return _0x2b68a7(_0x37a0dd);},'sctmd':function _0x5bb873(_0x2b6b74,_0x4ef7ad){return _0x2b6b74===_0x4ef7ad;},'QFSwi':_0x3365('0x65','IFad'),'aCdFi':_0x3365('0x66','uUmN'),'eNHQj':function _0x2da4bb(_0x53cc86){return _0x53cc86();}};if(_0xe7cdab[_0x3365('0x67','dvoj')](_0xe7cdab[_0x3365('0x68','i*K%')],_0xe7cdab[_0x3365('0x69','J0e6')])){while(!![]){}}else{var _0x35939d=new RegExp(_0xe7cdab[_0x3365('0x6a','%B9o')]);var _0x4aa050=new RegExp(_0xe7cdab[_0x3365('0x6b','oPXz')],'i');var _0x15cc71=_0xe7cdab[_0x3365('0x6c','b1W&')](_0x3e6e2a,_0xe7cdab[_0x3365('0x6d','$OrG')]);if(!_0x35939d[_0x3365('0x6e','*tXr')](_0xe7cdab[_0x3365('0x6f','VW28')](_0x15cc71,_0xe7cdab[_0x3365('0x70','#hxW')]))||!_0x4aa050[_0x3365('0x71','p4eh')](_0xe7cdab[_0x3365('0x72','fbhv')](_0x15cc71,_0xe7cdab[_0x3365('0x73','b1W&')]))){if(_0xe7cdab[_0x3365('0x74','p3u]')](_0xe7cdab[_0x3365('0x75','*tXr')],_0xe7cdab[_0x3365('0x76','V4ka')])){_0xe7cdab[_0x3365('0x77','crdw')](_0x15cc71,'0');}else{}}else{if(_0xe7cdab[_0x3365('0x78','extJ')](_0xe7cdab[_0x3365('0x79','#hxW')],_0xe7cdab[_0x3365('0x7a','*2Kg')])){}else{_0xe7cdab[_0x3365('0x7b','L*v0')](_0x3e6e2a);}}}})();}());continue;case'5':var _0x5d6de9={'lBpvp':function _0xa9458c(_0x5a1fc0,_0x1da18d,_0x26c94d){return _0x538334[_0x3365('0x7c','Fjn6')](_0x5a1fc0,_0x1da18d,_0x26c94d);},'UXwQW':function _0x5f8cdf(_0x17afb2,_0x1790fd){return _0x538334[_0x3365('0x7d','*tXr')](_0x17afb2,_0x1790fd);},'fOhCd':_0x538334[_0x3365('0x7e','G*F@')],'lrTyK':function _0x228da0(_0x1b13fd,_0x4df17e){return _0x538334[_0x3365('0x7f','uUmN')](_0x1b13fd,_0x4df17e);},'PFQpK':_0x538334[_0x3365('0x80','KJzM')],'fqyAH':_0x538334[_0x3365('0x81','JgZM')],'sKOCN':_0x538334[_0x3365('0x82','*tXr')]};continue;case'6':_0x538334[_0x3365('0x83','o1on')](_0x438aa5);continue;case'7':var _0x438aa5=_0x538334[_0x3365('0x84','D6UG')](_0x447d25,this,function(){var _0x42b60e=function(){};var _0xdc3864=_0x5d6de9[_0x3365('0x85','9K27')](typeof window,_0x5d6de9[_0x3365('0x86','v&vu')])?window:_0x5d6de9[_0x3365('0x87','oPXz')](typeof process,_0x5d6de9[_0x3365('0x88','p4eh')])&&_0x5d6de9[_0x3365('0x89','p4eh')](typeof require,_0x5d6de9[_0x3365('0x8a','uK2u')])&&_0x5d6de9[_0x3365('0x8b','lO%F')](typeof global,_0x5d6de9[_0x3365('0x8c','V4ka')])?global:this;if(!_0xdc3864[_0x3365('0x8d','V4ka')]){_0xdc3864[_0x3365('0x8e','&pe2')]=function(_0x514312){var _0x23db24={'hnFWS':function _0x16b167(_0x86bc3,_0x5b8d9c){return _0x86bc3===_0x5b8d9c;},'EUlzD':_0x3365('0x8f','JgZM'),'sSmJG':_0x3365('0x90','J0e6'),'esmAX':_0x3365('0x91','PWXf')};if(_0x23db24[_0x3365('0x92','Q*MX')](_0x23db24[_0x3365('0x93','$OrG')],_0x23db24[_0x3365('0x94','hjB%')])){var _0x52cbea=firstCall?function(){if(fn){var _0x5af1fb=fn[_0x3365('0x2b','Hiwl')](context,arguments);fn=null;return _0x5af1fb;}}:function(){};firstCall=![];return _0x52cbea;}else{var _0x3438fc=_0x23db24[_0x3365('0x95','b1W&')][_0x3365('0x96','$OrG')]('|'),_0x59a47f=0x0;while(!![]){switch(_0x3438fc[_0x59a47f++]){case'0':_0x1e0beb[_0x3365('0x97','9K27')]=_0x514312;continue;case'1':_0x1e0beb[_0x3365('0x98','En&3')]=_0x514312;continue;case'2':_0x1e0beb[_0x3365('0x99','3Pj8')]=_0x514312;continue;case'3':_0x1e0beb[_0x3365('0x9a','&pe2')]=_0x514312;continue;case'4':_0x1e0beb[_0x3365('0x9b','i*K%')]=_0x514312;continue;case'5':_0x1e0beb[_0x3365('0x9c','4Xct')]=_0x514312;continue;case'6':_0x1e0beb[_0x3365('0x9d','IFad')]=_0x514312;continue;case'7':return _0x1e0beb;case'8':var _0x1e0beb={};continue;}break;}}}(_0x42b60e);}else{var _0x358bfc=_0x5d6de9[_0x3365('0x9e','o1on')][_0x3365('0x9f','G*F@')]('|'),_0x481d43=0x0;while(!![]){switch(_0x358bfc[_0x481d43++]){case'0':_0xdc3864[_0x3365('0xa0','extJ')][_0x3365('0xa1','nBzP')]=_0x42b60e;continue;case'1':_0xdc3864[_0x3365('0xa2','PWXf')][_0x3365('0xa3','#hxW')]=_0x42b60e;continue;case'2':_0xdc3864[_0x3365('0xa4','hjB%')][_0x3365('0xa5','$OrG')]=_0x42b60e;continue;case'3':_0xdc3864[_0x3365('0xa6','Q*MX')][_0x3365('0xa7','i*K%')]=_0x42b60e;continue;case'4':_0xdc3864[_0x3365('0xa8','uUmN')][_0x3365('0xa9','uK2u')]=_0x42b60e;continue;case'5':_0xdc3864[_0x3365('0xaa','p4eh')][_0x3365('0xab','lO%F')]=_0x42b60e;continue;case'6':_0xdc3864[_0x3365('0xac','EylT')][_0x3365('0xad','2sLp')]=_0x42b60e;continue;}break;}}});continue;}break;}}(window));function _0x3e6e2a(_0x454004){var _0x5bb881={'QRGfJ':function _0x2e64b3(_0x5f1457,_0x1b1af9){return _0x5f1457(_0x1b1af9);}};function _0x384b00(_0x10164d){var _0x3fad1b={'fBhjv':function _0x10d21c(_0x114c9c,_0x40e831){return _0x114c9c===_0x40e831;},'IylOQ':_0x3365('0xae','Fjn6'),'MkPbj':_0x3365('0xaf','i*K%'),'lfKfu':_0x3365('0xb0','hjB%'),'jNZoQ':function _0x391883(_0x39c557,_0x58695f){return _0x39c557===_0x58695f;},'Mehuq':_0x3365('0xb1','&pe2'),'yuMyk':function _0x4dc65a(_0x1a7295){return _0x1a7295();},'GJBNy':function _0x194c85(_0x41d384,_0x1d6731){return _0x41d384(_0x1d6731);},'vfDiL':function _0x4d5cac(_0x50c9d0,_0x5eeebf){return _0x50c9d0!==_0x5eeebf;},'HheSl':function _0x35ff75(_0x3d4f12,_0x4fb99e){return _0x3d4f12+_0x4fb99e;},'rvGcN':function _0x46b9aa(_0x41de78,_0x5b35ab){return _0x41de78/_0x5b35ab;},'SDnls':_0x3365('0xb2','L*v0'),'dlmiv':function _0x32bf66(_0x404073,_0x52bd86){return _0x404073%_0x52bd86;}};if(_0x3fad1b[_0x3365('0xb3','oPXz')](_0x3fad1b[_0x3365('0xb4','3Pj8')],_0x3fad1b[_0x3365('0xb5','p3u]')])){var _0x4933bc=fn[_0x3365('0xb6','lO%F')](context,arguments);fn=null;return _0x4933bc;}else{if(_0x3fad1b[_0x3365('0xb7','*tXr')](typeof _0x10164d,_0x3fad1b[_0x3365('0xb8','7Rkj')])){if(_0x3fad1b[_0x3365('0xb9','p4eh')](_0x3fad1b[_0x3365('0xba','v9!V')],_0x3fad1b[_0x3365('0xbb','&pe2')])){var _0x383c62=function(){var _0xa18938={'JzFtX':function _0x10bd98(_0x146a70,_0x36f9e2){return _0x146a70!==_0x36f9e2;},'tdXqP':_0x3365('0xbc','v&vu'),'OyZhk':_0x3365('0xbd','extJ'),'YvAru':function _0x302f63(_0x586e77,_0x305119){return _0x586e77===_0x305119;},'SFojW':_0x3365('0xbe','v9!V'),'dMiqt':_0x3365('0xbf','3Pj8'),'pvvUs':function _0x51d49e(_0x1fc521){return _0x1fc521();},'lvqBL':function _0x59ac6c(_0x5c9060,_0x8544e4){return _0x5c9060(_0x8544e4);}};if(_0xa18938[_0x3365('0xc0','9K27')](_0xa18938[_0x3365('0xc1','$OrG')],_0xa18938[_0x3365('0xc2','b1W&')])){while(!![]){if(_0xa18938[_0x3365('0xc3','&pe2')](_0xa18938[_0x3365('0xc4','PWXf')],_0xa18938[_0x3365('0xc5','7Rkj')])){_0xa18938[_0x3365('0xc6','v9!V')](_0x3e6e2a);}else{}}}else{if(_0x454004){return _0x384b00;}else{_0xa18938[_0x3365('0xc7','lO%F')](_0x384b00,0x0);}}};return _0x3fad1b[_0x3365('0xc8','o1on')](_0x383c62);}else{_0x3fad1b[_0x3365('0xc9','Fjn6')](_0x384b00,0x0);}}else{if(_0x3fad1b[_0x3365('0xca','4Xct')](_0x3fad1b[_0x3365('0xcb','fbhv')]('',_0x3fad1b[_0x3365('0xcc','hjB%')](_0x10164d,_0x10164d))[_0x3fad1b[_0x3365('0xcd','p3u]')]],0x1)||_0x3fad1b[_0x3365('0xce','%B9o')](_0x3fad1b[_0x3365('0xcf','nBzP')](_0x10164d,0x14),0x0)){debugger;}else{debugger;}}_0x3fad1b[_0x3365('0xd0','extJ')](_0x384b00,++_0x10164d);}}try{if(_0x454004){return _0x384b00;}else{_0x5bb881[_0x3365('0xd1','v9!V')](_0x384b00,0x0);}}catch(_0x1ded09){}};encode_version = 'jsjiami.com.v5';
