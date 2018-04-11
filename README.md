# cloudMusic
基于angular5，ionic3的网易云音乐客户端仿照版
# 运行步骤
npm install -g ionic cordova   
git clone https://github.com/YDJSZY/cloudMusic.git  
cd cloudMusic  
npm install  
下载网易云音乐API git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git  
cd NeteaseCloudMusicApi-master  
npm install  
运行后台接口 PORT=8101 node app.js  
修改cloudMusic>src>providers>httpServce下的apifiex为自己本地ip  
在项目跟目录运行ionic serve
