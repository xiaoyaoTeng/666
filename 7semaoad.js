/*
 *
 *
脚本功能：18+七色猫 视频、小说、漫画、去广告、凤楼、电台、
软件版本：h5&轻量版
下载地址：
脚本作者：
更新时间：2024+
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# >18+七色猫 视频、小说、漫画、去广告、凤楼、电台、直播

^https?:\/\/jiekou.antciti.cn\/api\/(login\/mobile_login|index\/loufeng_info|home\/video_info|user\/info) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/7semao.js
^https?:\/\/jiekou.antciti.cn\/api\/(index|home)\/(cate_list|zuire|zuixin|index|loufeng|new_zuanti|cate_list) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/7semaoad.js
^https?://jiekou\.antciti\.cn/api/home/my_ad url reject-dict
[mitm]
hostname = jiekou.antciti.cn

*
*
*/






var _0xbf=["117.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51."];function _0x3fc(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0x1ga3f(_c){var _0xbd3d="3|2|1|0|4".split(_0x3fc(_0xbf[0])),_0x1dad7c=0;while(!![]){switch(+_0xbd3d[_0x1dad7c++]){case 0:var _4=-1;continue;case 1:var _3=-1;continue;case 2:var _2=[];continue;case 3:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;case 4:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,42,32,104));}(op_1,op_2);_2.push(value);_4++;break;}case _.div:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,47,32,104));}(op_1,op_2);_2.push(value);_4++;break;}case _.xor:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,94,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.pop:{return _2[_4];}}}continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0x1ga3f([32,164434,32,164434,38,37]);}();i<program['\x62\x6f\x64\x79']['\x6c\x65\x6e\x67\x74\x68'];i++){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(eval(String.fromCharCode(110,111,100,101,91,39,92,120,54,51,92,120,54,49,92,120,54,99,92,120,54,99,92,120,54,53,92,120,54,53,39,93,91,39,92,120,55,52,92,120,55,57,92,120,55,48,92,120,54,53,39,93,32,61,61,61,32,39,77,101,109,98,101,114,69,120,112,114,101,115,115,105,111,110,39))){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0x15a55g="0|1|2".split(_0x3fc(_0xbf[1])),_0x796eea=0;while(!![]){switch(+_0x15a55g[_0x796eea++]){case 0:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 1:if(!evalute){throw new Error(_0x3fc(_0xbf[2]),node['\x74\x79\x70\x65']);}continue;case 2:return evalute(node,scope);continue;}break;}}var _0x1eb1b;var _0x84dge=$response['\x62\x6f\x64\x79'];_0x1eb1b=eval(String.fromCharCode(95,48,120,49,103,97,51,102,40,91,51,50,44,32,49,53,49,53,51,50,44,32,51,50,44,32,49,53,49,53,51,51,44,32,51,56,44,32,51,55,93,41,32,43,32,95,48,120,49,103,97,51,102,40,91,51,50,44,32,52,50,52,51,55,56,44,32,51,50,44,32,52,50,52,51,55,57,44,32,51,56,44,32,51,55,93,41));let _0x=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);delete _0x['\x72\x65\x73\x75\x6c\x74']['\x62\x61\x6e\x6e\x65\x72'];$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x)});

