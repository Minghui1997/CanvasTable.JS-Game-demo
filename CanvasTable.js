"use strict";

var CT_dialog; //对话框
var CT_ContainerDraw = []; //draw容器
var CT_ContainerDrawIndex = 0; //draw容器索引
var CT_DrawLayer = 0; //draw层级
var CT_Canvas; //主画布
var CT_BufferCanvas; //缓冲画布
var CT_ClientW; //客户端宽度
var CT_ClientH; //客户端高度
var CT_CanvasW = 0; //画布宽度
var CT_CanvasH = 0; //画布高度
var CT_CanvasCRX = 1; //画布相对客户端的宽度倍数
var CT_CanvasCRY = 1; //画布相对客户端的高度倍数
var CT_Ctx; //画布绘图环境
var CT_BCtx; //缓冲画布绘图环境
var CT_Main; //Main函数
var CT_Loop; //Loop函数
var CT_LoadBarWidgetLoad = 0; //加载条块加载数
var CT_LoadBarWidgetIndex = 0; //加载条块索引
var CT_RectabName = "default"; //记录表名称
var CT_DEBUG_MODE = 1; //调试模式
var CT_RUN_CONTEXT = 0; //运行环境
var CT_SPLASH_SHOW = 0; //SPLASH显示
var CT_LOADBAR_SHOW = 1; //加载条显示
var CT_BROWSER = 0; //浏览器
var CT_DEVICE = 0; //设备
var CT_ContainerKeyState = []; //按键状态容器
var CT_ContainerKeyDown = []; //按键按下容器
var CT_ContainerKeyDownBreak = []; //按键按下中断容器
var CT_ContainerKeyUp = []; //按键松开容器
var CT_ContainerMKeyState = []; //鼠标按键状态容器
var CT_ContainerMKeyDown = []; //鼠标按键按下状态容器
var CT_ContainerMKeyUp = []; //鼠标按键松开容器
var CT_ContainerMWheel = []; //鼠标滚轮容器
var CT_ContainerTouchIndex = 0; //触摸键索引
var CT_MousePosX = 0; //鼠标位置x
var CT_MousePosY = 0; //鼠标位置y
var CT_TouchSlipp = 0; //触摸滑动
var CT_KeyChar = ""; //按键字符
var CT_ContainerTouchKey = []; //触摸键容器
var CT_TouchKeyList = []; //触摸键列表
var CT_ResourceList = []; //资源列表
var CT_ContainerResource = []; //资源容器
var CT_ResIndex = 0; //资源容器索引
var CT_SplashImage; //splash图片
var CT_Repaint = 0; //请求重绘
var CT_ContainerTask = []; //子程序容器
var CT_ContainerTaskNum = []; //子程序数字变量容器
var CT_ContainerTaskStr = []; //子程序字符串变量容器
var CT_ContainerTaskIndex = 0; //子程序容器索引
var CT_TaskStateList = []; //子程序状态列表
var CT_TaskRunIndex = 0; //子程序运行索引
var CT_ViewX = 0; //视野位置x
var CT_ViewY = 0; //视野位置y
var CT_ViewLastX = 0; //上次视野位置x
var CT_ViewLastY = 0; //上次视野位置y
var CT_RunnerStatus = 1; //运行器状态
var CT_sceneWidth = 0; //场景宽度
var CT_sceneHeight = 0; //场景高度
var CT_GridWidth = 30; //场景网格宽度
var CT_GridHeight = 30; //场景网格高度
var CT_ContainerTile = []; //瓦片容器
var CT_ContainerTileIndex = 0; //Tile容器索引
var CT_ContainerSprite = []; //Sprite容器
var CT_ContainerSpriteIndex = 0; //Sprite索引
var CT_SpriteId = 0; //Sprite对象ID
var CT_ContainerTimer = []; //定时器容器  格式:[[定时器名称,定时器时间,定时器时长,定时器状态],......]
var CT_ContainerTimerIndex = 0; //定时器索引
var CT_ContainerGlobalTimer = []; //全局定时器容器  格式:[[定时器名称,定时器时间,定时器时长,定时器状态],......]
var CT_ContainerGlobalTimerIndex = 0; //全局定时器索引
var CT_UIId = 0;
var CT_ContainerWindow = [];
var CT_ContainerWindowIndex = 0;
var CT_ContainerUI = [];
var CT_ContainerUIIndex = 0;
var CT_Button_Index = -1; //按下按钮的索引
var CT_Textbox_Index = -1; //点击文本框的索引
var CT_DownX = -1; //鼠标按下的位置x
var CT_DownY = -1; //鼠标按下的位置y
var CT_DialogShow = 0; //对话框显示
var CT_Dialog_Index = -1; //对话框对应文本框的索引
var key_a = 65;
var key_b = 66;
var key_c = 67;
var key_d = 68;
var key_e = 69;
var key_f = 70;
var key_g = 71;
var key_h = 72;
var key_i = 73;
var key_j = 74;
var key_k = 75;
var key_l = 76;
var key_m = 77;
var key_n = 78;
var key_o = 79;
var key_p = 80;
var key_q = 81;
var key_r = 82;
var key_s = 83;
var key_t = 84;
var key_u = 85;
var key_v = 86;
var key_w = 87;
var key_x = 88;
var key_y = 89;
var key_z = 90;
var key_1 = 49;
var key_2 = 50;
var key_3 = 51;
var key_4 = 52;
var key_5 = 53;
var key_6 = 54;
var key_7 = 55;
var key_8 = 56;
var key_9 = 57;
var key_0 = 48;
var key_f1 = 112;
var key_f2 = 113;
var key_f3 = 114;
var key_f4 = 115;
var key_f5 = 116;
var key_f6 = 117;
var key_f7 = 118;
var key_f8 = 119;
var key_f9 = 120;
var key_f10 = 121;
var key_f11 = 122;
var key_f12 = 123;
var key_up = 38;
var key_down = 40;
var key_left = 37;
var key_right = 39;
var key_esc = 27;
var key_tab = 9;
var key_cap = 20;
var key_shift = 16;
var key_ctrl = 17;
var key_alt = 18;
var key_space = 32;
var key_enter = 13;
var key_back = 8;
var key_num1 = 97;
var key_num2 = 98;
var key_num3 = 99;
var key_num4 = 100;
var key_num5 = 101;
var key_num6 = 102;
var key_num7 = 103;
var key_num8 = 104;
var key_num9 = 105;
var key_num0 = 96;
var mkey_left = 0;
var mkey_middle = 1;
var mkey_right = 2;
var mkey_up = 0;
var mkey_down = 1;

//--------------------------------------------------------------------
// 创建对话框
//--------------------------------------------------------------------
function CT_DialogCreate(val,name,max,pass,numb)
{
    if(CT_DialogShow === 0) //如果对话框没有显示
    {
        //div
        CT_dialog = document.createElement("div");
        CT_dialog.style.position = "absolute";
        CT_dialog.style.width = "50%";
        CT_dialog.style.height = "150px";
        CT_dialog.style.left = "0px";
        CT_dialog.style.right = "0px";
        CT_dialog.style.top = "20%";
        CT_dialog.style.margin = "auto";
        CT_dialog.style.backgroundColor = "#ece9d8";
        CT_dialog.style.border = "solid";
        CT_dialog.style.borderColor = "#aca899";
        CT_dialog.align = "center";
        document.body.appendChild(CT_dialog);
        //标题
        var title = document.createElement("p");
        title.textContent = name;
        title.style.font = "16px Arial";
        CT_dialog.appendChild(title);
        //文本框
        var textbox = document.createElement("input");
        if(pass === 1)
        {
            textbox.type = "password";
        }
        else
        {
            textbox.type = "text";
        }
        textbox.style.width = "90%";
        textbox.style.font = "16px Arial";
        textbox.value = val;
        textbox.maxLength = max;
        textbox.oninput = function() //文本框输入
        {
            if(numb === 1) //如果是数字文本框
            {
                var diabox_l = textbox.value.length; //文本框当前字符数
                var char = textbox.value[diabox_l-1]; //文本框当前输入的字符
                if(char !== "0" && char !== "1" && char !== "2" && char !== "3" && char !== "4" && char !== "5" && char !== "6" && char !== "7" && char !== "8" && char !== "9") //如果当前输入的字符不是数字
                {
                    var new_str = textbox.value.slice(0,diabox_l-2); //复制文本框前面所有的字符
                    textbox.value = new_str;
                }
            }
        };
        CT_dialog.appendChild(textbox);
        //分隔
        var div_compart = document.createElement("div");
        div_compart.style.height = "20px";
        CT_dialog.appendChild(div_compart);
        //确定按钮
        var button = document.createElement("input");
        button.type = "button";
        button.style.width = "30%";
        button.style.font = "22px Arial";
        button.value = "✔";
        CT_dialog.appendChild(button);
        button.onclick = function() //按钮点击
        {
            CT_DialogReturn(textbox.value); //返回对话框
        };
        CT_DialogShow = 1;
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 销毁对话框
//--------------------------------------------------------------------
function CT_DialogDestroy()
{
    if(CT_DialogShow === 1) //如果对话框显示
    {
        document.body.removeChild(CT_dialog); //移除对话框
        CT_dialog = null; //销毁对话框
        CT_DialogShow = 0; //对话框不显示
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 对话框返回
//--------------------------------------------------------------------
function CT_DialogReturn(val)
{
    if(CT_ContainerUI[CT_Dialog_Index] != null) //如果对话框对应文本框的窗口不为空
    {
        CT_ContainerUI[CT_Dialog_Index][14] = val; //将对话框输入的内容返回给文本框
    }
    CT_DialogDestroy(); //销毁对话框
    CT_InterfaceRepaint(); //请求重绘
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 清除画布
//--------------------------------------------------------------------
function CT_CanvasClear()
{
    CT_Ctx.clearRect(0,0,CT_CanvasW,CT_CanvasH); //清除整个画布
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 清除缓冲画布
//--------------------------------------------------------------------
function CT_BufferCanvasClear()
{
    CT_BCtx.beginPath(); //开始路径
    CT_BCtx.fillStyle = "#000000"; //填充颜色
    CT_BCtx.fillRect(0,0,CT_CanvasW,CT_CanvasH); //在缓冲画布上绘制黑色矩形
    CT_BCtx.closePath(); //结束路径
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 缓冲画布输出
//--------------------------------------------------------------------
function CT_BufferCanvasOut()
{
    CT_Ctx.drawImage(CT_BufferCanvas,0,0); //将缓冲画布输出到主画布
    CT_BufferCanvasClear(); //清除缓冲画布
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制矩形(缓冲)
//--------------------------------------------------------------------
function CT_BufferRect(x,y,w,h,c,f)
{
    CT_BCtx.beginPath(); //开始路径
    if(f === 1) //如果是实心
    {
        CT_BCtx.fillStyle = c; //填充颜色
        CT_BCtx.fillRect(x,y,w,h); //在缓冲画布上绘制矩形
    }
    if(f === 0) //如果是空心
    {
        CT_BCtx.strokeStyle = c; //描边颜色
        CT_BCtx.lineWidth = 1; //线宽度
        CT_BCtx.strokeRect(x+0.5,y+0.5,w-1,h-1); //在缓冲画布上绘制矩形边框
    }
    CT_BCtx.closePath(); //结束路径
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制线(缓冲)
//--------------------------------------------------------------------
function CT_BufferLine(x1,y1,x2,y2,w,c)
{
    CT_BCtx.beginPath(); //开始路径
    CT_BCtx.strokeStyle = c; //描边颜色
    CT_BCtx.lineWidth = w; //线宽度
    var line_move = w * 0.5; //线偏移
    if(x1 === x2) //如果是竖线
    {
        CT_BCtx.moveTo(x1+line_move,y1); //设置线的起点位置
        CT_BCtx.lineTo(x2+line_move,y2); //设置线的终点位置
    }
    if(y1 === y2) //如果是横线
    {
        CT_BCtx.moveTo(x1,y1+line_move); //设置线的起点位置
        CT_BCtx.lineTo(x2,y2+line_move); //设置线的终点位置
    }
    if(x1 !== x2 && y1 !== y2) //如果是斜线
    {
        CT_BCtx.moveTo(x1,y1); //设置线的起点位置
        CT_BCtx.lineTo(x2,y2); //设置线的终点位置
    }
    CT_BCtx.stroke(); //在缓冲画布上绘制线
    CT_BCtx.closePath(); //结束路径
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制圆(缓冲)
//--------------------------------------------------------------------
function CT_BufferCircle(x,y,r,c,f)
{
    CT_BCtx.beginPath(); //开始路径
    if(f === 1) //如果是实心
    {
        CT_BCtx.fillStyle = c; //填充颜色
        CT_BCtx.arc(x,y,r,0,Math.PI*2); //设置圆
        CT_BCtx.fill(); //在缓冲画布上绘制圆
    }
    if(f === 0) //如果是空心
    {
        CT_BCtx.beginPath(); //开始路径
        CT_BCtx.strokeStyle = c; //描边颜色
        CT_BCtx.lineWidth = 1; //线宽度
        CT_BCtx.arc(x,y,r,0,Math.PI*2); //设置圆
        CT_BCtx.arc(x,y,r,0,Math.PI*2); //设置圆
        CT_BCtx.stroke(); //在缓冲画布上绘制圆边框
    }
    CT_BCtx.closePath(); //结束路径
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制文本(缓冲)
//--------------------------------------------------------------------
function CT_BufferString(x,y,s,c,t)
{
    CT_BCtx.font = String(s) + "px Arial"; //字体大小
    CT_BCtx.fillStyle = c; //字体颜色
    CT_BCtx.fillText(t,x,y+s); //在缓冲画布上绘制文本
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制图像(缓冲)
//--------------------------------------------------------------------
function CT_BufferImage(x,y,i)
{
    if(i !== -1) //如果资源不为空
    {
        var res_type = CT_ResourceList[i][1]; //资源类型
        if(res_type === 0) //如果资源是图像
        {
            CT_BCtx.drawImage(CT_ContainerResource[i],x,y); //绘制资源容器中指定的图像
        }
        else //如果资源不是图像
        {
            cprint("ERROR 4 : The resource index corresponding to the resource file is not a image. ResIndex : " + String(i));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制图像部分(缓冲)
//--------------------------------------------------------------------
function CT_BufferImagePart(x,y,i,ix,iy,iw,ih)
{
    if(i !== -1) //如果资源不为空
    {
        var res_type = CT_ResourceList[i][1]; //资源类型
        if(res_type === 0) //如果资源是图像
        {
            CT_BCtx.drawImage(CT_ContainerResource[i],ix,iy,iw,ih,x,y,iw,ih); //绘制资源容器中指定的图像部分
        }
        else //如果资源不是图像
        {
            cprint("ERROR 4 : The resource index corresponding to the resource file is not a image. ResIndex : " + String(i));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制曲线(缓冲)
//--------------------------------------------------------------------
function CT_BufferCurve(x1,y1,x2,y2,x3,y3,w,c)
{
    CT_BCtx.beginPath(); //开始路径
    CT_BCtx.strokeStyle = c; //描边颜色
    CT_BCtx.lineWidth = w; //曲线宽度
    CT_BCtx.moveTo(x1,y1); //曲线起点
    CT_BCtx.quadraticCurveTo(x2,y2,x3,y3); //曲线的控制点和终点
    CT_BCtx.stroke(); //在缓冲画布上绘制曲线
    CT_BCtx.closePath(); //结束路径
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制三角形(缓冲)
//--------------------------------------------------------------------
function CT_BufferTri(x1,y1,x2,y2,x3,y3,c,f)
{
    if(f === 0) //如果是空心
    {
        CT_BCtx.beginPath(); //开始路径
        CT_BCtx.strokeStyle = c; //填充颜色
        CT_BCtx.moveTo(x1+0.5,y1+0.5); //设置三角形的起点位置
        CT_BCtx.lineTo(x2+0.5,y2+0.5); //设置三角形第二点的位置
        CT_BCtx.lineTo(x3+0.5,y3+0.5); //设置三角形第三点的位置
        CT_BCtx.lineTo(x1+0.5,y1+0.5); //设置三角形终点的位置
        CT_BCtx.stroke(); //填充三角形
        CT_BCtx.closePath(); //结束路径
    }
    if(f === 1) //如果是实心
    {
        CT_BCtx.beginPath(); //开始路径
        CT_BCtx.fillStyle = c; //填充颜色
        CT_BCtx.moveTo(x1,y1); //设置三角形的起点位置
        CT_BCtx.lineTo(x2,y2); //设置三角形第二点的位置
        CT_BCtx.lineTo(x3,y3); //设置三角形第三点的位置
        CT_BCtx.lineTo(x1,y1); //设置三角形终点的位置
        CT_BCtx.fill(); //填充三角形
        CT_BCtx.closePath(); //结束路径
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Draw渲染
//--------------------------------------------------------------------
function CT_DrawRender(l)
{
    var _x = view_x(); //视野位置x
    var _y = view_y(); //视野位置y
    var i;
    for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
    {
        if(CT_ContainerDraw[i] != null) //如果当前draw不为空
        {
            var draw_l = CT_ContainerDraw[i][1]; //当前draw层
            if(draw_l === l) //如果当前draw层等于当前渲染层
            {
                var draw_type = CT_ContainerDraw[i][0]; //当前draw类型
                if(draw_type === 1) //如果当前draw是矩形
                {
                    var x = CT_ContainerDraw[i][2]; //矩形位置x
                    var y = CT_ContainerDraw[i][3]; //矩形位置y
                    var w = CT_ContainerDraw[i][4]; //矩形宽度
                    var h = CT_ContainerDraw[i][5]; //矩形高度
                    var c = CT_ContainerDraw[i][6]; //矩形颜色
                    var f = CT_ContainerDraw[i][7]; //矩形填充
                    CT_BufferRect(x-_x,y-_y,w,h,c,f); //绘制矩形
                }
                if(draw_type === 2) //如果draw类型是线
                {
                    var x1 = CT_ContainerDraw[i][2]; //线起点位置x
                    var y1 = CT_ContainerDraw[i][3]; //线起点位置y
                    var x2 = CT_ContainerDraw[i][4]; //线终点位置x
                    var y2 = CT_ContainerDraw[i][5]; //线终点位置y
                    var w = CT_ContainerDraw[i][6]; //线宽度
                    var c = CT_ContainerDraw[i][7]; //线颜色
                    CT_BufferLine(x1-_x,y1-_y,x2-_x,y2-_y,w,c); //绘制线
                }
                if(draw_type === 3) //如果draw类型是圆
                {
                    var x = CT_ContainerDraw[i][2]; //圆位置x
                    var y = CT_ContainerDraw[i][3]; //圆位置y
                    var r = CT_ContainerDraw[i][4]; //圆半径
                    var c = CT_ContainerDraw[i][5]; //圆颜色
                    var f = CT_ContainerDraw[i][6]; //圆填充
                    CT_BufferCircle(x-_x,y-_y,r,c,f); //绘制圆
                }
                if(draw_type === 4) //如果draw类型是字符串
                {
                    var x = CT_ContainerDraw[i][2]; //字符串位置x
                    var y = CT_ContainerDraw[i][3]; //字符串位置y
                    var s = CT_ContainerDraw[i][4]; //字符串字体大小
                    var c = CT_ContainerDraw[i][5]; //字符串颜色
                    var str = CT_ContainerDraw[i][6]; //字符串
                    CT_BufferString(x-_x,y-_y,s,c,str); //绘制字符串
                }
                if(draw_type === 5) //如果draw类型是图像
                {
                    var x = CT_ContainerDraw[i][2]; //图像位置x
                    var y = CT_ContainerDraw[i][3]; //图像位置y
                    var img = CT_ContainerDraw[i][4]; //图像
                    CT_BufferImage(x-_x,y-_y,img); //绘制图像
                }
                if(draw_type === 6) //如果draw类型是图像部分
                {
                    var x = CT_ContainerDraw[i][2]; //图像位置x
                    var y = CT_ContainerDraw[i][3]; //图像位置y
                    var img = CT_ContainerDraw[i][4]; //图像
                    var ix = CT_ContainerDraw[i][5]; //图像内位置x
                    var iy = CT_ContainerDraw[i][6]; //图像内位置y
                    var iw = CT_ContainerDraw[i][7]; //图像内宽度
                    var ih = CT_ContainerDraw[i][8]; //图像内高度
                    CT_BufferImagePart(x-_x,y-_y,img,ix,iy,iw,ih); //绘制图像部分
                }
                if(draw_type === 7) //如果draw类型是曲线
                {
                    var x1 = CT_ContainerDraw[i][2]; //曲线起点位置x
                    var y1 = CT_ContainerDraw[i][3]; //曲线起点位置y
                    var x2 = CT_ContainerDraw[i][4]; //曲线控制点位置x
                    var y2 = CT_ContainerDraw[i][5]; //曲线控制点位置y
                    var x3 = CT_ContainerDraw[i][6]; //曲线终点位置x
                    var y3 = CT_ContainerDraw[i][7]; //曲线终点位置y
                    var w = CT_ContainerDraw[i][8]; //曲线宽度
                    var c = CT_ContainerDraw[i][9]; //曲线颜色
                    CT_BufferCurve(x1-_x,y1-_y,x2-_x,y2-_y,x3-_x,y3-_y,w,c); //绘制曲线
                }
                if(draw_type === 8) //如果draw类型是三角形
                {
                    var x1 = CT_ContainerDraw[i][2];
                    var y1 = CT_ContainerDraw[i][3];
                    var x2 = CT_ContainerDraw[i][4];
                    var y2 = CT_ContainerDraw[i][5];
                    var x3 = CT_ContainerDraw[i][6];
                    var y3 = CT_ContainerDraw[i][7];
                    var c = CT_ContainerDraw[i][8];
                    var f = CT_ContainerDraw[i][9];
                    CT_BufferTri(x1-_x,y1-_y,x2,y2,x3,y3,c,f);
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 初始化函数
//--------------------------------------------------------------------
function CT_init(cw,ch,rl,main,loop,dm,sph,lbh,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16)
{
    CT_CanvasW = cw; //画布宽度
    CT_CanvasH = ch; //画布高度
    CT_DEBUG_MODE = dm; //设置调试模式
    CT_SPLASH_SHOW = sph; //设置SPLASH显示
    CT_LOADBAR_SHOW = lbh; //设置加载条显示
    CT_Main = main; //Main函数
    CT_Loop = loop; //Loop函数
    cprint("Version : 1.2.37");
    cprint("Build : 2022/06/08");
    cprint("----------Init----------");
    CT_PreferSet(); //设置偏好
    CT_CanvasCreate(); //创建主画布
    CT_BufferCanvasCreate(); //创建缓冲画布
    cprint("------------------------");
    var rl_l = rl.length; //资源列表参数长度
    var i;
    for(i=0;i<rl_l;i++) //遍历资源列表参数
    {
        CT_ResourceList[i] = [rl[i]]; //将资源列表参数传递到资源列表
    }
    CT_ResourceLoadStart(); //开始加载资源
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置偏好
//--------------------------------------------------------------------
function CT_PreferSet()
{
    if(CT_DEBUG_MODE === 1) //如果debug模式开启
    {
        cprint("Debug mode : Enable");
    }
    CT_BrowserCheck(); //浏览器判断
    CT_DeviceCheck(); //设备判断
    CT_RunContextCheck(); //运行环境判断
    if(CT_RUN_CONTEXT === 0) //如果运行环境是本地
    {
        cprint("Run context : Local");
    }
    if(CT_RUN_CONTEXT === 1) //如果运行环境是Web
    {
        cprint("Run context : Web");
    }
    if(CT_BROWSER === 1) //如果浏览器是Firefox
    {
        cprint("Browser : Firefox");
    }
    if(CT_BROWSER === 2) //如果浏览器是Chrome
    {
        cprint("Browser : Chrome");
    }
    if(CT_BROWSER === 3) //如果浏览器是Safari
    {
        cprint("Browser : Safari");
    }
    if(CT_BROWSER === 4) //如果浏览器是IE
    {
        cprint("Browser : IE");
    }
    if(CT_BROWSER === 0) //如果浏览器是其它
    {
        cprint("Browser : Other");
    }
    if(CT_DEVICE === 0) //如果设备是桌面平台
    {
        cprint("Device : Table");
    }
    if(CT_DEVICE === 1) //如果设备是移动平台
    {
        cprint("Device : Mobile");
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 浏览器判断
//--------------------------------------------------------------------
function CT_BrowserCheck()
{
    var agent = navigator.userAgent; //浏览器agent
    var firefox_check = agent.indexOf("Firefox",0); //agent中Firefox字段的位置
    var chrome_check = agent.indexOf("Chrome",0); //agent中Chrome字段的位置
    var safari_check = agent.indexOf("Safari",0); //agent中Safari字段的位置
    var ie_check = agent.indexOf("MSIE",0); //agent中MSIE字段的位置
    if(firefox_check >= 0) //如果agent中有Firefox字段
    {
        CT_BROWSER = 1; //是Firefox
    }
    if(chrome_check >= 0 && safari_check >= 0) //如果agent中有Chrome，Safari字段
    {
        if(chrome_check < safari_check) //如果Chrome字段的位置小于Safari字段的位置
        {
            CT_BROWSER = 2; //是Chrome
        }
    }
    else
    {
        if(chrome_check >= 0) //如果agent中有Chrome字段
        {
            CT_BROWSER = 2; //是Chrome
        }
        if(safari_check >= 0) //如果agent中有Safari字段
        {
            CT_BROWSER = 3; //是Safari
        }
    }
    if(ie_check >= 0) //如果agent中有MSIE字段
    {
        CT_BROWSER = 4; //是IE
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 运行设备判断
//--------------------------------------------------------------------
function CT_DeviceCheck()
{
    var agent = navigator.userAgent; //浏览器agent
    var mobile_check = agent.indexOf("Mobile",0); //agent中Mobile字段的位置
    if(mobile_check >= 0) //如果agent中有Mobile字段
    {
        CT_DEVICE = 1; //是移动平台
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 运行环境判断
//--------------------------------------------------------------------
function CT_RunContextCheck()
{
    var url = window.location.href; //访问地址
    var url_file = url.lastIndexOf("file://"); //访问地址中file字段的位置
    if(url_file === -1) //如果访问地址没有file字段
    {
        CT_RUN_CONTEXT = 1; //是Web环境
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 创建画布
//--------------------------------------------------------------------
function CT_CanvasCreate()
{
    CT_Canvas = document.createElement("canvas"); //创建主画布
    if(CT_CanvasW > 0 && CT_CanvasH > 0) //如果画布宽度和高度都大于0
    {
        CT_Canvas.style.background = "#000000"; //设置应用程序画布背景色为黑色
        CT_Canvas.width = CT_CanvasW; //设置应用程序画布宽度
        CT_Canvas.height = CT_CanvasH; //设置应用程序画布高度
        CT_Canvas.style.position = "absolute"; //设置应用程序画布位置模式
        CT_Canvas.style.left = "0px"; //画布左贴边
        CT_Canvas.style.top = "0px"; //画布上贴边
        CT_ClientW = document.documentElement.clientWidth; //客户端宽度
        CT_ClientH = document.documentElement.clientHeight; //客户端高度
        CT_Canvas.style.width = String(CT_ClientW) + "px"; //设置画布宽度为客户端宽度
        CT_Canvas.style.height = String(CT_ClientH) + "px"; //设置画布高度为客户端高度
        CT_CanvasCRX = CT_CanvasW / CT_ClientW; //画布相对客户端宽度的倍数
        CT_CanvasCRY = CT_CanvasH / CT_ClientH; //画布相对客户端高度的倍数
        CT_Resize(); //调整画布
        document.body.appendChild(CT_Canvas); //显示主画布
        cprint("Created canvas : width=" + String(CT_CanvasW) + " height=" + String(CT_CanvasH));
    }
    else
    {
        cprint("ERROR 6 : Unable to create canvas");
    }
    CT_Ctx = CT_Canvas.getContext("2d"); //主画布绘图环境
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 画布调整
//--------------------------------------------------------------------
function CT_Resize()
{
    window.addEventListener("resize",function(event) //监听客户端窗口调整
    {
        CT_ClientW = document.documentElement.clientWidth; //客户端宽度
        CT_ClientH = document.documentElement.clientHeight; //客户端高度
        CT_Canvas.style.width = String(CT_ClientW) + "px"; //设置画布宽度为客户端宽度
        CT_Canvas.style.height = String(CT_ClientH) + "px"; //设置画布高度为客户端高度
        CT_CanvasCRX = CT_CanvasW / CT_ClientW; //画布相对客户端宽度的倍数
        CT_CanvasCRY = CT_CanvasH / CT_ClientH; //画布相对客户端高度的倍数
    },false);
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 创建缓冲画布
//--------------------------------------------------------------------
function CT_BufferCanvasCreate()
{
    CT_BufferCanvas = document.createElement("canvas"); //创建缓冲画布
    if(CT_CanvasW > 0 && CT_CanvasH > 0) //如果缓冲画布宽度和高度都大于0
    {
        CT_BufferCanvas.width = CT_CanvasW; //设置缓冲画布宽度
        CT_BufferCanvas.height = CT_CanvasH; //设置缓冲画布高度
    }
    CT_BCtx = CT_BufferCanvas.getContext("2d"); //缓冲画布绘图环境
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 键盘鼠标输入
//--------------------------------------------------------------------
document.addEventListener("keydown",function(event) //监听按键按下
{
    CT_ContainerKeyState[event.keyCode] = 1; //将按键状态容器中按下的键标记为1
    if(CT_ContainerKeyDownBreak[event.keyCode] !== 1) //如果按键中断容器中按下的键不为1
    {
        CT_ContainerKeyDown[event.keyCode] = 1; //将按键按下容器中按下的键标记为1
        CT_ContainerKeyDownBreak[event.keyCode] = 1; //将按键中断容器中按下的键标记为1
    }
    if(CT_BROWSER === 2 || CT_BROWSER === 3 || CT_BROWSER === 0) //如果浏览器是Chrome / Safari / other
    {
        if(event.keyCode === 8) //如果按下的键是BACK
        {
            CT_KeyChar = "_BACK"; //按键字符为BACK
        }
    }
},false);
document.addEventListener("keyup",function(event) //监听按键松开
{
    CT_ContainerKeyState[event.keyCode] = 0; //将按键状态容器中松开的键标记为0
    CT_ContainerKeyDownBreak[event.keyCode] = 0; //将按键中断容器中松开的键标记为0
    CT_ContainerKeyUp[event.keyCode] = 1; //将按键松开容器中松开的键标记为1
},false);
document.addEventListener("mousedown",function(event) //监听鼠标按下
{
    CT_ContainerMKeyState[event.button] = 1; //将鼠标按键状态容器中按下的键标记为1
    CT_ContainerMKeyDown[event.button] = 1; //将鼠标按键按下容器中按下的键标记为1
},false);
document.addEventListener("mouseup",function(event) //监听鼠标松开
{
    CT_ContainerMKeyState[event.button] = 0; //将鼠标按键状态容器中松开的键标记为0
    CT_ContainerMKeyUp[event.button] = 1; //将鼠标按键松开容器中松开的键标记为1
},false);
document.addEventListener("mousemove",function(event) //监听鼠标移动
{
    CT_MousePosX = parseInt(event.pageX * CT_CanvasCRX); //鼠标位置x
    CT_MousePosY = parseInt(event.pageY * CT_CanvasCRY); //鼠标位置y
},false);
document.addEventListener("DOMMouseScroll",function(event) //监听鼠标滚轮
{
    if(event.detail < 0) //如果滚轮向上
    {
        CT_ContainerMWheel[0] = 1; //将鼠标滚轮容器中上滚动标记为1
    }
    if(event.detail > 0) //如果滚轮向下
    {
        CT_ContainerMWheel[1] = 1; //将鼠标滚轮容器中下滚动标记为1
    }
},false);
document.addEventListener("mousewheel",function(event) //监听鼠标滚轮(chrome /safari /other)
{
    if(event.wheelDelta > 0) //如果滚轮向上
    {
        CT_ContainerMWheel[0] = 1; //将鼠标滚轮容器中上滚动标记为1
    }
    if(event.wheelDelta < 0) //如果滚轮向下
    {
        CT_ContainerMWheel[1] = 1; //将鼠标滚轮容器中下滚动标记为1
    }
},false);
document.addEventListener("contextmenu",function(event) //监听右键菜单
{
    event.preventDefault(); //禁用右键菜单
},false);
document.addEventListener("keypress",function(event) //监听按键输入
{
    if(event.which !== 0) //如果字码不为0
    {
        CT_KeyChar = String.fromCharCode(event.which); //当前按键输入的字符
    }
    if(event.which === 8) //如果字码为8
    {
        CT_KeyChar = "_BACK"; //输入退格
    }
},false);
document.addEventListener("touchstart",function(event) //监听触摸点按下
{
    var toulist_e = event.touches.length - 1; //当前触摸点索引
    var touches_l = event.touches.length; //touches length
    var t_x = event.touches[toulist_e].pageX; //当前触摸点位置x
    var t_y = event.touches[toulist_e].pageY; //当前触摸点位置y
    CT_MousePosX = parseInt(t_x * CT_CanvasCRX); //鼠标位置x
    CT_MousePosY = parseInt(t_y * CT_CanvasCRY); //鼠标位置y
    CT_TouchSlipp = CT_MousePosY; //滑动触摸位置y
    CT_ContainerMKeyState[0] = 1; //将鼠标按键状态容器中按下的键标记为1
    CT_ContainerMKeyDown[0] = 1; //将鼠标按键按下容器中按下的键标记为1
    var i = 0;
    for(i;i<touches_l;i++) //遍历触摸列表
    {
        var touch_id = event.touches[i].identifier; //当前触摸点id
        var touch_x = event.touches[i].pageX; //当前触摸点位置x
        var touch_y = event.touches[i].pageY; //当前触摸点位置y
        CT_TouchKeyList[touch_id] = [touch_x,touch_y]; //将当前触摸点存入触摸键列表
    }
},false);
document.addEventListener("touchend",function(event) //监听触摸点松开
{
    var toulist_e = event.changedTouches.length - 1; //当前触摸点索引
    var changed_l = event.changedTouches.length; //changedTouches length
    var t_x = event.changedTouches[toulist_e].pageX; //当前触摸点位置x
    var t_y = event.changedTouches[toulist_e].pageY; //当前触摸点位置y
    CT_MousePosX = parseInt(t_x * CT_CanvasCRX); //鼠标位置x
    CT_MousePosY = parseInt(t_y * CT_CanvasCRY); //鼠标位置y
    CT_ContainerMKeyState[0] = 0; //将鼠标按键状态容器中按下的键标记为0
    CT_ContainerMKeyUp[0] = 1; //将鼠标按键松开容器中松开的键标记为1
    var i = 0;
    for(i;i<changed_l;i++) //遍历触摸列表
    {
        var touch_id = event.changedTouches[i].identifier; //当前触摸点id
        CT_TouchKeyList[touch_id] = [-1,-1]; //在触摸键列表中将当前触摸点标记为松开
    }
},false);
document.addEventListener("touchmove",function(event) //监听触摸点移动
{
    var toulist_e = event.changedTouches.length - 1; //当前触摸点索引
    var changed_l = event.changedTouches.length; //changedTouches length
    var t_x = event.touches[toulist_e].pageX; //当前触摸点位置x
    var t_y = event.touches[toulist_e].pageY; //当前触摸点位置y
    CT_MousePosX = parseInt(t_x * CT_CanvasCRX); //鼠标位置x
    CT_MousePosY = parseInt(t_y * CT_CanvasCRY); //鼠标位置y
    if(CT_MousePosY < CT_TouchSlipp) //如果当前触摸位置y小于滑动触摸位置y
    {
        CT_ContainerMWheel[0] = 1; //将鼠标滚轮容器中上滚动标记为1
        CT_TouchSlipp = CT_MousePosY; //刷新滑动触摸位置y
    }
    if(CT_MousePosY > CT_TouchSlipp) //如果当前触摸位置y大于滑动触摸位置y
    {
        CT_ContainerMWheel[1] = 1; //将鼠标滚轮容器中下滚动标记为1
        CT_TouchSlipp = CT_MousePosY; //刷新滑动触摸位置y
    }
    var i = 0;
    for(i;i<changed_l;i++) //遍历触摸列表
    {
        var touch_id = event.changedTouches[i].identifier; //当前触摸点id
        var touch_x = event.changedTouches[i].pageX; //当前触摸点位置x
        var touch_y = event.changedTouches[i].pageY; //当前触摸点位置y
        CT_TouchKeyList[touch_id] = [touch_x,touch_y]; //将当前触摸点存入触摸键列表
    }
},false);
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 触摸键运行
//--------------------------------------------------------------------
function CT_TouchKeyRun()
{
    var i;
    for(i=0;i<CT_ContainerTouchIndex;i++) //遍历触摸键容器
    {
        if(CT_ContainerTouchKey[i] != null) //如果当前触摸键不为空
        {
            var toukey_x = CT_ContainerTouchKey[i][0]; //当前触摸键位置x
            var toukey_y = CT_ContainerTouchKey[i][1]; //当前触摸键位置y
            var toukey_w = CT_ContainerTouchKey[i][2]; //当前触摸键宽度
            var toukey_h = CT_ContainerTouchKey[i][3]; //当前触摸键高度
            var toukey_k = CT_ContainerTouchKey[i][4]; //当前触摸键键值
            var i2;
            var press = 0;
            for(i2=0;i2<32;i2++) //遍历触摸列表
            {
                if(CT_TouchKeyList[i2] != null)
                {
                    var tou_x = parseInt(CT_TouchKeyList[i2][0] * CT_CanvasCRX); //当前触摸点位置x
                    var tou_y = parseInt(CT_TouchKeyList[i2][1] * CT_CanvasCRY); //当前触摸点位置y
                    if(tou_x >= toukey_x && tou_y >= toukey_y && tou_x <= toukey_x + toukey_w && tou_y <= toukey_y + toukey_h) //如果当前触摸点在当前触摸键内
                    {
                        press = 1;
                        CT_ContainerTouchKey[i][6] = 1; //将当前触摸键状态标记为已按下
                        CT_ContainerKeyState[toukey_k] = 1; //将按键状态容器中按下的键标记为1
                        if(CT_ContainerKeyDownBreak[toukey_k] !== 1) //如果按键中断容器中按下的键不为1
                        {
                            CT_ContainerKeyDown[toukey_k] = 1; //将按键按下容器中按下的键标记为1
                            CT_ContainerKeyDownBreak[toukey_k] = 1; //将按键中断容器中按下的键标记为1
                        }
                    }
                }
            }
            if(press === 0) //如果当前触摸键未被触摸
            {
                var tk_state = CT_ContainerTouchKey[i][6]; //获取当前触摸键状态
                if(tk_state === 1) //如果当前触摸键已按下
                {
                    CT_ContainerKeyState[toukey_k] = 0; //将按键状态容器中松开的键标记为0
                    CT_ContainerKeyDownBreak[toukey_k] = 0; //将按键中断容器中松开的键标记为0
                    CT_ContainerKeyUp[toukey_k] = 1; //将按键松开容器中松开的键标记为1
                    CT_ContainerTouchKey[i][6] = 0; //将当前触摸键状态标记为未按下
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 渲染触摸键图片
//--------------------------------------------------------------------
function CT_TouchKeyRender()
{
    if(CT_ContainerTouchIndex !== 0) //如果触摸键容器长度不为0
    {
        var i;
        for(i=0;i<CT_ContainerTouchIndex;i++) //遍历触摸键容器
        {
            if(CT_ContainerTouchKey[i] != null) //如果当前触摸键不为空
            {
                var tx = CT_ContainerTouchKey[i][0]; //当前触摸键位置x
                var ty = CT_ContainerTouchKey[i][1]; //当前触摸键位置y
                var ti = CT_ContainerTouchKey[i][5]; //当前触摸键图像
                CT_BufferImage(tx,ty,ti); //绘制触摸键图像
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按键重置
//--------------------------------------------------------------------
function CT_KeyboardReset()
{
    CT_ContainerKeyDown = []; //重置按键按下容器
    CT_ContainerKeyUp = []; //重置按键松开容器
    CT_ContainerMKeyDown = []; //重置鼠标按键按下容器
    CT_ContainerMKeyUp = []; //重置鼠标按键松开容器
    CT_ContainerMWheel = []; //重置鼠标滚轮容器
    CT_KeyChar = ""; //重置按键字符
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按键字符
//--------------------------------------------------------------------
function CT_KeyboardChar()
{
    var ret = CT_KeyChar; //当前按键字符
    CT_KeyChar = "";
    return ret;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 开始加载资源
//--------------------------------------------------------------------
function CT_ResourceLoadStart()
{
    cprint("-----Load resource------");
    if(CT_SPLASH_SHOW === 1) //如果SPLASH显示
    {
        CT_SplashImage = new Image(); //新建splash图片
        CT_SplashImage.src = "splash.png"; //splash图片路径
        CT_SplashImage.onload = function() //如果splash图片加载完成
        {
            CT_LoadBarShow(0); //显示加载条
            CT_ResourceLoad(); //加载资源
        };
        CT_SplashImage.onerror = function() //如果splash图片未找到
        {
            CT_LoadBarShowError(0,"splash.png"); //显示错误信息
        };
    }
    else //如果SPLASH不显示
    {
        CT_LoadBarShow(0); //显示加载条
        CT_ResourceLoad(); //加载资源
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 加载资源
//--------------------------------------------------------------------
function CT_ResourceLoad()
{
    if(CT_ResourceList.length !== 0) //如果资源列表参数长度不为0
    {
        var res_name = CT_PathGetName(CT_ResourceList[CT_ResIndex][0]); //资源文件名
        if(res_name.lastIndexOf(".") !== -1) //如果资源文件名中有"."
        {
            if(res_name.lastIndexOf(".") !== 0) //如果资源文件名中"."的位置不为0
            {
                var extname_pos = res_name.lastIndexOf(".")+1; //资源文件扩展名位置
                var res_extname = res_name.slice(extname_pos); //资源文件扩展名
                if(res_extname === "png" || res_extname === "jpg" || res_extname === "jpeg" || res_extname === "bmp" || res_extname === "mp3" || res_extname === "ogg") //如果资源文件类型是图像和音频
                {
                    if(res_extname === "png" || res_extname === "jpg" || res_extname === "jpeg"|| res_extname === "bmp") //如果资源文件是图像
                    {
                        var image = new Image(); //新建图像
                        image.src = CT_ResourceList[CT_ResIndex][0]; //资源列表中的文件路径
                        image.onload = function() //如果图像加载完成
                        {
                            CT_ContainerResource[CT_ResIndex] = image; //将图像存入资源容器
                            var image_w = image.width; //图像宽度
                            var image_h = image.height; //图像高度
                            //将图像参数存入资源列表
                            CT_ResourceList[CT_ResIndex][1] = 0;
                            CT_ResourceList[CT_ResIndex][2] = image_w;
                            CT_ResourceList[CT_ResIndex][3] = image_h;
                            cprint("Resource load : " + CT_ResourceList[CT_ResIndex][0]);
                            CT_loadBarWidget(); //加载条循环
                            CT_ResIndex ++; //资源索引 +1
                            if(CT_ResIndex === CT_ResourceList.length) //如果资源加载完成
                            {
                                CT_ResourceLoadEnd(); //结束加载资源
                            }
                            else //如果资源没有加载完
                            {
                                CT_ResourceLoad(); //回调，加载下一个资源
                            }
                        };
                        image.onerror = function() //如果图像未找到
                        {
                            CT_LoadBarShowError(0,CT_ResourceList[CT_ResIndex][0]); //显示错误信息
                        };
                    }
                    if(res_extname === "mp3" || res_extname === "ogg") //如果资源文件是音频
                    {
                        var audio = new Audio(); //新建音频
                        audio.src = CT_ResourceList[CT_ResIndex][0]; //资源列表中当前音频路径
                        CT_ContainerResource[CT_ResIndex] = audio; //将音频存入资源容器
                        CT_ResourceList[CT_ResIndex][1] = 1; //将音频参数存入资源列表
                        cprint("Resource load : " + CT_ResourceList[CT_ResIndex][0]);
                        CT_loadBarWidget(); //加载条循环
                        CT_ResIndex ++; //资源索引 +1
                        if(CT_ResIndex === CT_ResourceList.length) //如果资源加载完成
                        {
                            CT_ResourceLoadEnd(); //结束加载资源
                        }
                        else //如果资源没有加载完
                        {
                            CT_ResourceLoad(); //回调，加载下一个资源
                        }
                        audio.onerror = function() //如果音频未找到
                        {
                            CT_LoadBarShowError(0,CT_ResourceList[CT_ResIndex][0]); //显示错误信息
                        };
                    }
                }
                else //如果资源文件类型不是图像和音频
                {
                    var file_path = CT_ResourceList[CT_ResIndex][0]; //资源列表中当前文本路径
                    if(CT_RUN_CONTEXT === 1) //如果运行环境是Web
                    {
                        var xmlhttp = new XMLHttpRequest(); //新建ajax请求
                        xmlhttp.open("GET",file_path,true); //ajax命令
                        xmlhttp.send(); //ajax发送请求
                        xmlhttp.onreadystatechange = function() //ajax状态
                        {
                            if(xmlhttp.readyState === 4)
                            {
                                if(xmlhttp.status === 200) //如果成功读取文本文件
                                {
                                    CT_ContainerResource[CT_ResIndex] = xmlhttp.responseText; //将文本数据存入资源容器
                                    var line = 1; //文本数据行数
                                    var td_len = CT_ContainerResource[CT_ResIndex].length; //文本数据长度
                                    var i;
                                    for(i=0;i<td_len;i++) //遍历文本数据
                                    {
                                        var tc = CT_ContainerResource[CT_ResIndex][i]; //获取文本数据当前字符
                                        if(tc === "\n") //如果当前字符是换行符
                                        {
                                            line ++; //行数 +1
                                        }
                                    }
                                    //将文本参数存入资源列表
                                    CT_ResourceList[CT_ResIndex][1] = 2;
                                    CT_ResourceList[CT_ResIndex][2] = line;
                                    cprint("Resource load : " + CT_ResourceList[CT_ResIndex][0]);
                                    CT_loadBarWidget(); //加载条循环
                                    CT_ResIndex ++; //资源索引 +1
                                    if(CT_ResIndex === CT_ResourceList.length) //如果资源加载完成
                                    {
                                        CT_ResourceLoadEnd(); //结束加载资源
                                    }
                                    else //如果资源没有加载完
                                    {
                                        CT_ResourceLoad(); //回调，加载下一个资源
                                    }
                                }
                            }
                            if(xmlhttp.status === 404) //如果读取文本文件失败
                            {
                                CT_LoadBarShowError(0,CT_ResourceList[CT_ResIndex][0]); //显示错误信息
                            }
                        };
                    }
                    else //如果运行环境是本地
                    {
                        CT_LoadBarShowError(-1,CT_ResourceList[CT_ResIndex][0]); //显示错误信息
                    }
                }
            }
            else
            {
                cprint("ERROR 2 : The resource file name is error : " + CT_ResourceList[CT_ResIndex][0]);
            }
        }
        else
        {
            cprint("ERROR 1 : The resource file name is not support : " + CT_ResourceList[CT_ResIndex][0]);
        }
    }
    else //如果资源列表长度为0
    {
        CT_ResourceLoadEnd(); //结束加载资源
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 结束加载资源
//--------------------------------------------------------------------
function CT_ResourceLoadEnd()
{
    cprint("------------------------");
    cprint("CanvasTable Running...");
    CT_CanvasClear(); //清除画布
    CT_Main(); //执行Main函数
    requestAnimationFrame(CT_RunnerLoop); //运行器循环
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 路径中的文件名
//--------------------------------------------------------------------
function CT_PathGetName(path)
{
    var path_l = path.length; //路径长度
    var i;
    for(i=path_l-1;i>=0;i--) //反向遍历文件路径
    {
        var a = path[i]; //文件路径当前字符
        if(a === "/") //如果字符是"/"
        {
            var name = path.slice(i+1,path.length); //文件名
            return name; //返回文件名
        }
        if(i === 0) //如果文件路径中没有字符"/"
        {
            var name = path.slice(i,path.length); //文件名
            return name; //返回文件名
        }
    }
    return "";
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 加载条循环
//--------------------------------------------------------------------
function CT_loadBarWidget()
{
    CT_LoadBarWidgetLoad ++; //加载条块加载数 +1
    if(CT_LoadBarWidgetLoad === 10) //如果加载条块加载数等于10
    {
        CT_LoadBarWidgetIndex ++; //加载条块索引+1
        if(CT_LoadBarWidgetIndex > 14) //如果加载条块索引大于14
        {
            CT_LoadBarWidgetIndex = 0; //加载条块索引
        }
        CT_LoadBarShow(CT_LoadBarWidgetIndex); //显示加载条
        CT_LoadBarWidgetLoad = 0; //加载条块加载数
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 显示splash图片
//--------------------------------------------------------------------
function CT_BufferSplash()
{
    CT_BCtx.drawImage(CT_SplashImage,0,0); //绘制splash图片
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 加载条显示
//--------------------------------------------------------------------
function CT_LoadBarShow(n)
{
    var bar_w = 400; //加载条宽度
    var bar_h = 30; //加载条高度
    var title = "Loading..."; //加载条标题
    var lump_w = 28; //加载条块宽度
    var lump_h = 22; //加载条高度
    var bar_x = parseInt((CT_CanvasW - bar_w) / 2); //加载条位置x
    var bar_y = parseInt((CT_CanvasH - bar_h) / 2); //加载条位置y
    var title_w = string_pxwidth(title,20); //加载条标题宽度
    var title_h = 20; //加载条标题高度
    var title_x = parseInt((CT_CanvasW - title_w) / 2); //加载条标题位置x
    var title_y = bar_y - 40; //加载条标题位置y
    var bar_c = color(210,193,153,255); //加载条颜色
    if(CT_SPLASH_SHOW === 1) //如果SPLASH显示
    {
        CT_BufferSplash(); //绘制splash图片
    }
    if(CT_LOADBAR_SHOW === 1) //如果加载条显示
    {
        CT_BufferString(title_x,title_y,20,bar_c,title); //绘制加载条标题
        CT_BufferRect(bar_x,bar_y,400,30,bar_c,0); //绘制加载条
        CT_BufferRect(bar_x+1,bar_y+1,398,28,bar_c,0); //绘制加载条
        if(n >= 1 && n <= 14) //如果加载条块索引在指定范围内
        {
            var lump_x = bar_x + 4 + (n - 1) * lump_w; //加载条块位置x
            var lump_y = bar_y + 4; //加载条块位置y
            CT_BufferRect(lump_x,lump_y,lump_w,lump_h,bar_c,1); //绘制加载条块
        }
    }
    CT_BufferCanvasOut(); //输出缓冲画布
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 加载条显示错误
//--------------------------------------------------------------------
function CT_LoadBarShowError(c,s)
{
    var err_x = parseInt((CT_CanvasW - 400) / 2); //错误信息位置x
    var err_y = parseInt((CT_CanvasH - 30) / 2) + 40; //错误信息位置y
    var err_c = color(210,193,153,255); //错误信息颜色
    if(CT_LOADBAR_SHOW === 1) //如果加载条显示
    {
        if(c === 0) //如果错误代码是0
        {
            CT_BufferString(err_x,err_y,16,err_c,"ERROR 0 : The resource file is not found : " + s); //显示错误信息
            CT_BufferCanvasOut(); //输出缓冲画布
        }
        if(c === -1) //如果错误代码是-1
        {
            CT_BufferString(err_x,err_y,16,err_c,"ERROR -1 : Run context is local,can't load text file : " + s); //显示错误信息
            CT_BufferCanvasOut(); //输出缓冲画布
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 运行器循环
//--------------------------------------------------------------------
function CT_RunnerLoop()
{
    if(CT_RunnerStatus === 0) //如果运行器停止
    {
        CT_RunnerStatus = 1; //恢复运行器
    }
    CT_GlobalTimerRun(); //运行全局定时器
    CT_TimerRun(); //运行定时器
    CT_TouchKeyRun(); //运行触摸键
    CT_UIRun(); //运行UI
    CT_SpritePosRecord(); //记录每个sprite位置
    CT_TaskReady(); //准备子程序
    CT_TaskRunMain(); //运行子程序main函数
    CT_TaskRunLoop(); //运行子程序循环函数
    CT_Loop(); //执行循环函数
    CT_RunnerBufferRender(); //双重缓冲渲染
    CT_ButtonReset(); //按钮重置
    CT_KeyboardReset(); //按键重置
    requestAnimationFrame(CT_RunnerLoop); //请求回调
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 重绘
//--------------------------------------------------------------------
function CT_InterfaceRepaint()
{
    CT_Repaint = 1; //请求重绘
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 双重缓冲渲染
//--------------------------------------------------------------------
function CT_RunnerBufferRender()
{
    if(CT_Repaint === 1) //如果请求重绘
    {
        var i;
        for(i=0;i<31;i++) //遍历层
        {
            CT_TileRender(i); //渲染瓦片
            CT_SpriteRender(i); //渲染sprite
            CT_UIRender(i); //渲染UI
            CT_DrawRender(i); //渲染draw
        }
        CT_TouchKeyRender(); //渲染触摸键图片
        CT_BufferCanvasOut(); //输出缓冲画布
        CT_Repaint = 0; //结束请求重绘
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 创建程序
//--------------------------------------------------------------------
function CT_TaskCreated(task_i,task_m,task_l)
{
    CT_ContainerTask[task_i] = [task_m,task_l]; //将子程序存入容器
    CT_TaskStateList[task_i] = 0; //将子程序状态设置为等待
    CT_ContainerTaskNum[task_i] = []; //创建子程序数字变量数组
    CT_ContainerTaskStr[task_i] = []; //创建子程序字符串变量数组
    if(task_i >= CT_ContainerTaskIndex) //如果子程序索引大于等于子程序容器索引
    {
        CT_ContainerTaskIndex = task_i + 1; //程序容器索引
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 销毁程序
//--------------------------------------------------------------------
function CT_TaskDestroy(task_i)
{
    CT_ContainerTask[task_i] = null; //清除子程序函数
    CT_TaskStateList[task_i] = null; //清除子程序状态
    CT_ContainerTaskNum[task_i] = null; //清除子程序数字变量数组
    CT_ContainerTaskStr[task_i] = null; //清除子程序字符串变量数组
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 程序变量赋值 数字
//--------------------------------------------------------------------
function CT_TaskSetNum(ti,i,n)
{
    CT_ContainerTaskNum[ti][i] = n; //设置子程序数字变量
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 程序变量 数字
//--------------------------------------------------------------------
function CT_TaskNum(ti,i)
{
    if(CT_ContainerTaskNum[ti][i] != null) //如果子程序数字变量不为空
    {
        var num = CT_ContainerTaskNum[ti][i]; //获取子程序数字变量
        return num;
    }
    else
    {
        cprint("ERROR 19 : The task variable is not found. TaskIndex : " + String(i)); //输出错误
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 程序变量赋值 字符串
//--------------------------------------------------------------------
function CT_TaskSetStr(ti,i,s)
{
    CT_ContainerTaskStr[ti][i] = s; //设置子程序字符串变量
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 程序变量 字符串
//--------------------------------------------------------------------
function CT_TaskStr(ti,i)
{
    if(CT_ContainerTaskStr[ti][i] != null) //如果子程序字符串变量不为空
    {
        var str = CT_ContainerTaskStr[ti][i]; //获取子程序字符串变量
        return str;
    }
    else
    {
        cprint("ERROR 19 : The task variable is not found. TaskIndex : " + String(i)); //输出错误
    }
    return "";
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 子程序准备
//--------------------------------------------------------------------
function CT_TaskReady()
{
    if(CT_ContainerTaskIndex !== 0) //如果子程序容器长度不为0
    {
        var i;
        for(i=0;i<CT_ContainerTaskIndex;i++) //遍历子程序容器
        {
            if(CT_TaskStateList[i] != null) //如果当前子程序状态不为空
            {
                if(CT_TaskStateList[i] === 0) //如果当前子程序状态为准备
                {
                    CT_TaskStateList[i] = 1; //将当前子程序标记为运行
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 运行添加的程序main函数
//--------------------------------------------------------------------
function CT_TaskRunMain()
{
    if(CT_ContainerTaskIndex !== 0) //如果子程序容器长度不为0
    {
        var i;
        for(i=0;i<CT_ContainerTaskIndex;i++) //遍历子程序容器
        {
            if(CT_ContainerTask[i] != null) //如果当前子程序不为空
            {
                if(CT_TaskStateList[i] != null) //如果当前子程序状态不为空
                {
                    if(CT_TaskStateList[i] === 1) //如果当前子程序状态为准备
                    {
                        CT_TaskRunIndex = i; //子程序运行索引
                        CT_ContainerTask[i][0](); //执行子程序main函数
                        CT_TaskStateList[i] = 2; //将当前子程序状态设置为循环
                    }
                }
            }
        }
    }
    CT_TaskRunIndex = 0; //子程序运行索引
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 运行程序loop函数
//--------------------------------------------------------------------
function CT_TaskRunLoop()
{
    if(CT_ContainerTaskIndex !== 0) //如果子程序容器长度不为0 
    {
        var i;
        for(i=0;i<CT_ContainerTaskIndex;i++) //遍历子程序容器
        {
            if(CT_ContainerTask[i] != null) //如果当前子程序不为空
            {
                if(CT_TaskStateList[i] != null) //如果当前子程序状态不为空
                {
                    if(CT_TaskStateList[i] === 2) //如果当前子程序状态为循环
                    {
                        CT_TaskRunIndex = i; //子程序运行索引
                        CT_ContainerTask[i][1](); //执行子程序循环函数
                    }
                }
            }
        }
    }
    CT_TaskRunIndex = 0; //子程序运行索引
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 运行器重置
//--------------------------------------------------------------------
function CT_RunnerReset()
{
    CT_ContainerDraw = []; //draw容器
    CT_ContainerDrawIndex = 0;
    CT_DrawLayer = 0; //draw层级
    CT_ContainerWindow = [];
    CT_ContainerWindowIndex = 0;
    CT_ContainerUI = []; //UI容器
    CT_ContainerUIIndex = 0;
    CT_ContainerSprite = []; //Sprite容器
    CT_ContainerSpriteIndex = 0;
    CT_ContainerTile = []; //瓦片容器
    CT_ContainerTileIndex = 0;
    CT_ContainerTask = []; //子程序容器
    CT_TaskStateList = []; //子程序状态列表
    CT_ContainerTaskNum = []; //子程序数字变量容器
    CT_ContainerTaskStr = []; //子程序字符串变量容器
    CT_ContainerTaskIndex = 0; //子程序容器索引
    CT_TaskRunIndex = 0; //子程序运行索引
    CT_ContainerTimer = []; //定时器容器
    CT_ContainerTimerIndex = 0; //定时器索引
    CT_ViewX = 0; //视野位置x
    CT_ViewY = 0; //视野位置y
    CT_ViewLastX = 0; //上次视野位置x
    CT_ViewLastY = 0; //上次视野位置y
    CT_DialogDestroy(); //销毁对话框
    CT_Button_Index = -1; //按下按钮的索引
    CT_Textbox_Index = -1; //点击UI的索引
    CT_DownX = -1; //鼠标按下的位置x
    CT_DownY = -1; //鼠标按下的位置y
    CT_DialogShow = 0; //
    CT_Dialog_Index = -1;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 渲染瓦片
//--------------------------------------------------------------------
function CT_TileRender(l)
{
    var _x = view_x(); //视野位置x
    var _y = view_y(); //视野位置y
    var i;
    for(i=0;i<CT_ContainerTileIndex;i++) //遍历瓦片容器当前
    {
        if(CT_ContainerTile[i] != null) //如果当前瓦片不为空
        {
            var tl = CT_ContainerTile[i][0]; //当前瓦片层
            if(tl === l) //如果当前瓦片层等于渲染层
            {
                var tx = CT_ContainerTile[i][1]; //当前瓦片位置x
                var ty = CT_ContainerTile[i][2]; //当前瓦片位置y
                var ti = CT_ContainerTile[i][3]; //当前瓦片图片索引
                var tix = CT_ContainerTile[i][4]; //当前瓦片图片位置x
                var tiy = CT_ContainerTile[i][5]; //当前瓦片图片位置y
                CT_BufferImagePart(tx-_x,ty-_y,ti,tix,tiy,CT_GridWidth,CT_GridHeight); //绘制瓦片
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 瓦片生成
//--------------------------------------------------------------------
function CT_TileBuild(l,x,y,res,gx,gy)
{
    var tix = gx * CT_GridWidth; //瓦片图片位置x
    var tiy = gy * CT_GridHeight; //瓦片图片位置y
    var tile_i = CT_ContainerTileIndex; //tile容器索引
    CT_ContainerTile[tile_i] = [l,x,y,res,tix,tiy]; //将Tile数据写入Tile容器
    CT_ContainerTileIndex ++; //Tile容器索引 +1
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Sprite对象ID
//--------------------------------------------------------------------
function CT_SpriteGetId()
{
    var id = CT_SpriteId; //当前Sprite Id
    CT_SpriteId ++; //Sprite Id +1
    return id; //返回 Sprite Id
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 渲染Sprite
//--------------------------------------------------------------------
function CT_SpriteRender(l)
{     
    var i;
    for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历Sprite容器
    {
        if(CT_ContainerSprite[i] != null) //如果当前Sprite不为空
        {
            var sl = CT_ContainerSprite[i][1]; //当前Sprite层
            if(sl === l) //如果当前Sprite层等于渲染层
            {
                var x = CT_ContainerSprite[i][2]; //sprite位置x
                var y = CT_ContainerSprite[i][3]; //sprite位置y
                var image = CT_ContainerSprite[i][4]; //sprite图像索引
                var subimg = CT_ContainerSprite[i][5]; //sprite子图像索引
                var subimg_w = CT_ContainerSprite[i][7]; //子图像宽度
                var subimg_h = CT_ContainerSprite[i][8]; //子图像高度
                if(image !== -1) //如果sprite图像不为空
                {
                    var _x = view_x(); //视野位置x
                    var _y = view_y(); //视野位置y
                    var si_x = subimg * subimg_w; //sprite子图像位置x
                    CT_BufferImagePart(x-_x,y-_y,image,si_x,0,subimg_w,subimg_h); //绘制sprite
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Sprite位置记录
//--------------------------------------------------------------------
function CT_SpritePosRecord()
{
    var i;
    for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历Sprite容器
    {
        if(CT_ContainerSprite[i] != null) //如果当前Sprite不为空
        {
            var spr_x = CT_ContainerSprite[i][2]; //当前sprite位置x
            var spr_y = CT_ContainerSprite[i][3]; //当前sprite位置y
            CT_ContainerSprite[i][9] = spr_x; //设置sprite上次位置x
            CT_ContainerSprite[i][10] = spr_y; //设置sprite上次位置y
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 定时器运行
//--------------------------------------------------------------------
function CT_TimerRun()
{
    var i;
    if(CT_ContainerTimerIndex !== 0) //如果定时器时间列表长度不为0
    {
        for(i=0;i<CT_ContainerTimerIndex;i++) //遍历定时器容器
        {
            if(CT_ContainerTimer[i] != null) //如果当前定时器不为空
            {
                if(CT_ContainerTimer[i][3] === 1) //如果当前定时器状态为1
                {
                    CT_ContainerTimer[i][1] -= 1; //当前定时器的时间帧 -1
                    if(CT_ContainerTimer[i][1] === 0) //如果当前定时器定时结束
                    {
                        CT_ContainerTimer[i][3] = 2; //将当前定时器的状态标记为结束
                        var timer_duration = CT_ContainerTimer[i][2]; //定时器时长
                        CT_ContainerTimer[i][1] = timer_duration; //重置定时器
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 全局定时器运行
//--------------------------------------------------------------------
function CT_GlobalTimerRun()
{
    var i;
    if(CT_ContainerGlobalTimerIndex !== 0) //如果全局定时器时间列表长度不为0
    {
        for(i=0;i<CT_ContainerGlobalTimerIndex;i++) //遍历全局定时器容器
        {
            if(CT_ContainerGlobalTimer[i] != null) //如果当前全局定时器不为空
            {
                if(CT_ContainerGlobalTimer[i][3] === 1) //如果当前全局定时器状态为1
                {
                    CT_ContainerGlobalTimer[i][1] -= 1; //当前全局定时器的时间帧 -1
                    if(CT_ContainerGlobalTimer[i][1] === 0) //如果当前全局定时器定时结束
                    {
                        CT_ContainerGlobalTimer[i][3] = 2; //将当前全局定时器的状态标记为结束
                        var timer_duration = CT_ContainerGlobalTimer[i][2]; //全局定时器时长
                        CT_ContainerGlobalTimer[i][1] = timer_duration; //重置全局定时器
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// UI对象ID
//--------------------------------------------------------------------
function CT_UIGetId()
{
    var id = CT_UIId; //当前UI Id
    CT_UIId ++; //UI Id +1
    return id; //返回 UI Id
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// UI运行
//--------------------------------------------------------------------
function CT_UIRun()
{
    if(mouse_down(mkey_left)) //如果鼠标按下
    {
        CT_DownX = mouse_x(); //鼠标按下的位置x
        CT_DownY = mouse_y(); //鼠标按下的位置y
        var i;
        for(i=0;i<CT_ContainerWindowIndex;i++) //遍历窗口容器
        {
            if(CT_ContainerWindow[i] != null) //如果当前窗口不为空
            {
                var win_x = CT_ContainerWindow[i][2]; //窗口位置x
                var win_y = CT_ContainerWindow[i][3]; //窗口位置y
                var win_w = CT_ContainerWindow[i][4]; //窗口宽度
                var win_h = CT_ContainerWindow[i][5]; //窗口高度
                if(CT_DownX >= win_x && CT_DownY >= win_y && CT_DownX <= win_x + win_w && CT_DownY <= win_y + win_h) //如果鼠标按下的位置在窗口范围内
                {
                    var i2;
                    for(i2=0;i2<CT_ContainerUIIndex;i2++) //遍历UI容器
                    {
                        if(CT_ContainerUI[i2] != null) //如果当前UI对象不为空
                        {
                            var ui_win_index = CT_ContainerUI[i2][1]; //当前UI对象对应窗口索引
                            if(ui_win_index === i) //如果前UI对象对应窗口索引等于当前窗口索引
                            {
                                var ui_x = win_x + CT_ContainerUI[i2][3]; //UI位置x
                                var ui_y = win_y + CT_ContainerUI[i2][4]; //UI位置y
                                var ui_w = CT_ContainerUI[i2][5]; //UI宽度
                                var ui_h = CT_ContainerUI[i2][6]; //UI高度
                                if(CT_DownX >= ui_x && CT_DownY >= ui_y && CT_DownX <= ui_x + ui_w && CT_DownY <= ui_y + ui_h) //如果鼠标按下的位置在UI范围内
                                {
                                    if(CT_DialogShow === 0) //如果对话框没有显示
                                    {
                                        var ui_type = CT_ContainerUI[i2][2]; //所点击UI的类型
                                        if(ui_type === 1) //如果点击UI对象是按钮
                                        {
                                            CT_Button_Index = i2; //按钮索引
                                            CT_ContainerUI[i2][18] = 1; //设置当前按钮的始终按下状态
                                            CT_ContainerUI[i2][19] = 1; //设置当前按钮的按下状态
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if(mouse_up(mkey_left)) //如果鼠标松开
    {
        if(CT_Button_Index !== -1) //如果按了按钮
        {
            if(CT_ContainerUI[CT_Button_Index] != null) //如果按了按钮的按钮不为空
            {
                CT_ContainerUI[CT_Button_Index][18] = 0; //设置当前按钮的始终按下状态
            }
        }
        var up_x = mouse_x(); //鼠标松开的位置x
        var up_y = mouse_y(); //鼠标松开的位置y
        var i;
        for(i=0;i<CT_ContainerWindowIndex;i++) //遍历窗口容器
        {
            if(CT_ContainerWindow[i] != null) //如果当前窗口不为空
            {
                var win_x = CT_ContainerWindow[i][2]; //窗口位置x
                var win_y = CT_ContainerWindow[i][3]; //窗口位置y
                var win_w = CT_ContainerWindow[i][4]; //窗口宽度
                var win_h = CT_ContainerWindow[i][5]; //窗口高度
                if(CT_DownX >= win_x && CT_DownY >= win_y && CT_DownX <= win_x + win_w && CT_DownY <= win_y + win_h && up_x >= win_x && up_y >= win_y && up_x <= win_x + win_w && up_y <= win_y + win_h) //如果鼠标按下的位置和松开的位置都在窗口范围内
                {
                    var i2;
                    for(i2=0;i2<CT_ContainerUIIndex;i2++) //遍历UI容器
                    {
                        if(CT_ContainerUI[i2] != null) //如果当前UI对象不为空
                        {
                            var ui_win_index = CT_ContainerUI[i2][1]; //当前UI对象对应窗口索引
                            if(ui_win_index === i) //如果前UI对象对应窗口索引等于当前窗口索引
                            {
                                var ui_x = win_x + CT_ContainerUI[i2][3]; //UI位置x
                                var ui_y = win_y + CT_ContainerUI[i2][4]; //UI位置y
                                var ui_w = CT_ContainerUI[i2][5]; //UI宽度
                                var ui_h = CT_ContainerUI[i2][6]; //UI高度
                                if(CT_DownX >= ui_x && CT_DownY >= ui_y && CT_DownX <= ui_x + ui_w && CT_DownY <= ui_y + ui_h && up_x >= ui_x && up_y >= ui_y && up_x <= ui_x + ui_w && up_y <= ui_y + ui_h) //如果鼠标按下的位置和松开的位置都在UI范围内
                                {
                                    if(CT_DialogShow === 0) //如果对话框没有显示
                                    {
                                        CT_Textbox_Index = -1; //点击文本框的索引
                                        var ui_type = CT_ContainerUI[i2][2]; //所点击UI的类型
                                        if(ui_type === 1) //如果点击UI对象是按钮
                                        {
                                            CT_ContainerUI[i2][17] = 1; //设置当前按钮的点击状态
                                            CT_ContainerUI[i2][20] = 1; //设置当前按钮的松开状态
                                            CT_InterfaceRepaint(); //请求重绘
                                            return; //中断
                                        }
                                        if(ui_type === 3) //如果点击UI对象是复选框
                                        {
                                            var c_s = CT_ContainerUI[i2][10]; //复选框状态
                                            if(c_s === 0) //如果复选框没有勾选
                                            {
                                                CT_ContainerUI[i2][10] = 1; //设置复选框状态
                                                CT_InterfaceRepaint(); //请求重绘
                                                return; //中断
                                            }
                                            if(c_s === 1) //如果复选框勾选
                                            {
                                                CT_ContainerUI[i2][10] = 0; //设置复选框状态
                                                CT_InterfaceRepaint(); //请求重绘
                                                return; //中断
                                            }
                                        }
                                        if(ui_type === 4) //如果点击UI对象是单选框
                                        {
                                            var radio_g = CT_ContainerUI[i2][10]; //当前单选框组
                                            var i3;
                                            for(i3=0;i3<CT_ContainerUIIndex;i3++) //遍历UI容器
                                            {
                                                var c_ui_type = CT_ContainerUI[i3][2]; //UI容器当前UI对象类型
                                                if(c_ui_type === 4) //如果UI容器当前UI对象类型是单选框
                                                {
                                                    var c_radio_g = CT_ContainerUI[i3][10]; //UI容器当前单选框组
                                                    if(c_radio_g === radio_g) //如果UI容器当前单选框组等于当前单选框组
                                                    {
                                                       CT_ContainerUI[i3][11] = 0; //将UI容器当前单选框状态设置为0
                                                    }
                                                }
                                            }
                                            CT_ContainerUI[i2][11] = 1; //将当前单选框状态设置为1
                                            CT_InterfaceRepaint(); //请求重绘
                                        }
                                        if(ui_type === 6) //如果点击UI对象是文本框
                                        {
                                            var subbox = CT_ContainerUI[i2][19]; //子文本框
                                            if(subbox === 0) //如果不使用子文本框
                                            {
                                                CT_Textbox_Index = i2; //点击的文本框在窗口中的索引
                                            }
                                            if(subbox === 1 || CT_DEVICE === 1) //如果使用子文本框或设备是移动平台
                                            {
                                                var readonly = CT_ContainerUI[i2][18]; //文本框只读参数
                                                if(readonly === 0) //如果文本框不是只读
                                                {
                                                    var t_val = CT_ContainerUI[i2][14]; //文本框值
                                                    var t_name = CT_ContainerUI[i2][20]; //文本框名称
                                                    var t_max = CT_ContainerUI[i2][17]; //文本框最大字符数
                                                    var t_pass = CT_ContainerUI[i2][15]; //文本框密码
                                                    var t_numb = CT_ContainerUI[i2][16]; //文本框数字
                                                    CT_Dialog_Index = i2; //对话框对应文本框的索引
                                                    CT_DialogCreate(t_val,t_name,t_max,t_pass,t_numb); //创建子文本框
                                                }
                                            }
                                            CT_InterfaceRepaint(); //请求重绘
                                            return; //中断
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if(CT_Textbox_Index !== -1) //如果点击了文本框
    {
        if(CT_ContainerUI[CT_Textbox_Index] != null) //如果点击的文本框不为空
        {
            var readonly = CT_ContainerUI[CT_Textbox_Index][18]; //文本框只读参数
            if(readonly === 0) //如果文本框不是只读
            {
                var kc = CT_KeyboardChar(); //当前输入的字符
                if(kc !== "" && kc !== "_BACK") //如果输入了字符
                {
                    var tbox_length = CT_ContainerUI[CT_Textbox_Index][14].length; //文本框字符串长度
                    var tbox_max = CT_ContainerUI[CT_Textbox_Index][17]; //文本框最大字符数
                    var tbox_number = CT_ContainerUI[CT_Textbox_Index][16]; //数字文本框参数
                    if(tbox_length < tbox_max) //如果文本框字符串长度小于文本框最大字符数
                    {
                        if(tbox_number !== 1) //如果文本框不是数字文本框
                        {
                            CT_ContainerUI[CT_Textbox_Index][14] += kc; //文本框增加字符
                            CT_InterfaceRepaint(); //请求重绘
                        }
                        else //如果文本框是数字文本框
                        {
                            if(kc === "0" || kc === "1" || kc === "2" || kc === "3" || kc === "4" || kc === "5" || kc === "6" || kc === "7" || kc === "8" || kc === "9") //如果当前输入的字符是数字
                            {
                                CT_ContainerUI[CT_Textbox_Index][14] += kc; //文本框增加字符
                                CT_InterfaceRepaint(); //请求重绘
                            }
                        }
                    }
                }
                if(kc === "_BACK") //如果输入了退格
                {
                    var tbox_length = CT_ContainerUI[CT_Textbox_Index][14].length; //文本框字符串长度
                    if(tbox_length > 0) //如果文本框字符串长度大于0
                    {
                        var tbox_str = CT_ContainerUI[CT_Textbox_Index][14]; //文本框字符串
                        tbox_str = tbox_str.slice(0,tbox_length-1); //文本框字符串减少一个字符的字符串
                        CT_ContainerUI[CT_Textbox_Index][14] = tbox_str; //文本框字符串减少一个字符
                        CT_InterfaceRepaint(); //请求重绘
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// UI渲染
//--------------------------------------------------------------------
function CT_UIRender(l)
{
    var i;
    var win_index = 0; //当前窗口索引
    for(i=0;i<CT_ContainerWindowIndex;i++) //遍历窗口容器
    {
        win_index = i; //当前窗口索引
        if(CT_ContainerWindow[i] != null) //如果当前窗口不为空
        {
            var window_layer = CT_ContainerWindow[i][1]; //当前窗口层
            if(window_layer === l) //如果当前窗口层等于渲染层
            {
                var win_x = CT_ContainerWindow[i][2]; //窗口位置x
                var win_y = CT_ContainerWindow[i][3]; //窗口位置y
                var win_w = CT_ContainerWindow[i][4]; //窗口宽度
                var win_h = CT_ContainerWindow[i][5]; //窗口高度
                var win_cbg = CT_ContainerWindow[i][6]; //窗口背景颜色
                var win_cbu = CT_ContainerWindow[i][7]; //窗口上边框颜色
                var win_cbd = CT_ContainerWindow[i][8]; //窗口下边框颜色
                var win_cbl = CT_ContainerWindow[i][9]; //窗口左边框颜色
                var win_cbr = CT_ContainerWindow[i][10]; //窗口右边框颜色
                var win_img = CT_ContainerWindow[i][11]; //窗口背景图片
                if(win_img !== -1) //如果窗口背景图片不为空
                {
                    CT_BufferImage(win_x,win_y,win_img); //绘制窗口背景图片
                }
                else //如果窗口背景图片为空
                {
                    CT_BufferRect(win_x,win_y,win_w,win_h,win_cbg,1); //绘制窗口背景
                    CT_BufferRect(win_x,win_y-2,win_w,2,win_cbu,1); //绘制窗口上边框
                    CT_BufferRect(win_x,win_y+win_h,win_w,2,win_cbd,1); //绘制窗口下边框
                    CT_BufferRect(win_x-2,win_y-2,2,win_h+4,win_cbl,1); //绘制窗口左边框
                    CT_BufferRect(win_x+win_w,win_y-2,2,win_h+4,win_cbr,1); //绘制窗口右边框
                }
                var i2;
                for(i2=0;i2<CT_ContainerUIIndex;i2++) //遍历UI容器
                {
                    if(CT_ContainerUI[i2] != null) //如果当前UI对象不为空
                    {
                        var ui_win_index = CT_ContainerUI[i2][1]; //当前UI对象对应窗口索引
                        if(ui_win_index === win_index) //如果当前UI对象对应窗口索引等于当前窗口索引
                        {
                            var ui_type = CT_ContainerUI[i2][2]; //当前UI对象类型
                            if(ui_type === 1) //如果当前UI对象是按钮
                            {
                                var b_x = win_x + CT_ContainerUI[i2][3]; //按钮位置x
                                var b_y = win_y + CT_ContainerUI[i2][4]; //按钮位置y
                                var b_w = CT_ContainerUI[i2][5]; //按钮宽度
                                var b_h = CT_ContainerUI[i2][6]; //按钮高度
                                var b_cbg = CT_ContainerUI[i2][7]; //按钮背景颜色
                                var b_cbu = CT_ContainerUI[i2][8]; //按钮上边框颜色
                                var b_cbd = CT_ContainerUI[i2][9]; //按钮下边框颜色
                                var b_cbl = CT_ContainerUI[i2][10]; //按钮左边框颜色
                                var b_cbr = CT_ContainerUI[i2][11]; //按钮右边框颜色
                                var b_ct = CT_ContainerUI[i2][12]; //按钮文本颜色
                                var b_img = CT_ContainerUI[i2][13]; //按钮背景图片
                                var b_t = CT_ContainerUI[i2][14]; //按钮显示文本
                                var b_tw = CT_ContainerUI[i2][15]; //按钮文本宽度
                                var b_th = CT_ContainerUI[i2][16]; //按钮文本高度
                                var b_tx = parseInt(b_x + ((b_w - b_tw) / 2)); //按钮显示文本位置x
                                var b_ty = parseInt(b_y + ((b_h - b_th) / 2)); //按钮显示文本位置y
                                if(b_img !== -1) //如果按钮背景图片不为空
                                {
                                    CT_BufferImage(b_x,b_y,b_img); //绘制按钮背景图片
                                }
                                else //如果按钮背景图片为空
                                {
                                    CT_BufferRect(b_x,b_y,b_w,b_h,b_cbg,1); //绘制按钮背景
                                    CT_BufferRect(b_x,b_y,b_w,2,b_cbu,1); //绘制按钮上边框
                                    CT_BufferRect(b_x,b_y+b_h-2,b_w,2,b_cbd,1); //绘制按钮下边框
                                    CT_BufferRect(b_x,b_y,2,b_h-2,b_cbl,1); //绘制按钮左边框
                                    CT_BufferRect(b_x+b_w-2,b_y,2,b_h-2,b_cbr,1); //绘制按钮右边框
                                }
                                CT_BufferString(b_tx,b_ty,16,b_ct,b_t); //绘制按钮文本
                            }
                            if(ui_type === 2)
                            {
                                var t_x = win_x + CT_ContainerUI[i2][3]; //文本位置x
                                var t_y = win_y + CT_ContainerUI[i2][4]; //文本位置y
                                var t_c = CT_ContainerUI[i2][5]; //文本颜色
                                var t_t = CT_ContainerUI[i2][6]; //文本
                                var t_s = CT_ContainerUI[i2][7]; //文本字体大小
                                CT_BufferString(t_x,t_y,t_s,t_c,t_t); //绘制文本
                            }
                            if(ui_type === 3)
                            {
                                var c_x = win_x + CT_ContainerUI[i2][3]; //复选框位置x
                                var c_y = win_y + CT_ContainerUI[i2][4]; //复选框位置y
                                var c_w = CT_ContainerUI[i2][5]; //复选框宽度
                                var c_h = CT_ContainerUI[i2][6]; //复选框高度
                                var c_cbg = CT_ContainerUI[i2][7]; //复选框背景颜色
                                var c_cb = CT_ContainerUI[i2][8]; //复选框边框颜色
                                var c_cw = CT_ContainerUI[i2][9]; //复选框部件颜色
                                var c_s = CT_ContainerUI[i2][10]; //复选框状态
                                CT_BufferRect(c_x,c_y,c_w,c_h,c_cbg,1); //绘制复选框背景
                                CT_BufferRect(c_x,c_y,c_w,c_h,c_cb,0); //绘制复选框外边框
                                CT_BufferRect(c_x+1,c_y+1,c_w-2,c_h-2,c_cb,0); //绘制复选框内边框
                                if(c_s === 1) //如果复选框状态为１
                                {
                                    CT_BufferLine(c_x+4,c_y+9,c_x+8,c_y+13,2,c_cw); //绘制复选框部件1
                                    CT_BufferLine(c_x+8,c_y+13,c_x+13,c_y+4,2,c_cw); //绘制复选框部件2
                                }
                            }
                            if(ui_type === 4)
                            {
                                var r_x = win_x + CT_ContainerUI[i2][3]; //单选框位置x
                                var r_y = win_y + CT_ContainerUI[i2][4]; //单选框位置y
                                var r_w = CT_ContainerUI[i2][5]; //单选框宽度
                                var r_cgb = CT_ContainerUI[i2][7]; //单选框背景颜色
                                var r_cb = CT_ContainerUI[i2][8]; //单选框边框颜色
                                var r_cw = CT_ContainerUI[i2][9]; //单选框部件颜色
                                var r_s = CT_ContainerUI[i2][11]; //单选框状态
                                CT_BufferCircle(r_x+8,r_y+8,r_w/2,r_cb,1); //绘制单选框边框
                                CT_BufferCircle(r_x+8,r_y+8,r_w/2-2,r_cgb,1); //绘制单选框边框
                                if(r_s === 1) //如果单选框状态为１
                                {
                                    CT_BufferCircle(r_x+8,r_y+8,r_w/2-4,r_cw,1); //绘制单选框部件
                                }
                            }
                            if(ui_type === 5)
                            {
                                var p_x = win_x + CT_ContainerUI[i2][3]; //进度条位置x
                                var p_y = win_y + CT_ContainerUI[i2][4]; //进度条位置y
                                var p_w = CT_ContainerUI[i2][5]; //进度条宽度
                                var p_h = CT_ContainerUI[i2][6]; //进度条高度
                                var p_cgb = CT_ContainerUI[i2][7]; //进度条背景颜色
                                var p_cbu = CT_ContainerUI[i2][8]; //进度条上边框颜色
                                var p_cbd = CT_ContainerUI[i2][9]; //进度条下边框颜色
                                var p_cbl = CT_ContainerUI[i2][10]; //进度条左边框颜色
                                var p_cbr = CT_ContainerUI[i2][11]; //进度条右边框颜色
                                var p_cw = CT_ContainerUI[i2][12]; //进度条部件颜色
                                var p_img = CT_ContainerUI[i2][13]; //进度条背景图片
                                var p_ww = CT_ContainerUI[i2][14]; //进度条部件宽度
                                if(p_img !== -1) //如果进度条背景图片不为空
                                {
                                    CT_BufferImage(p_x,p_y,p_img); //绘制进度条背景图片
                                }
                                else //如果进度条背景图片为空
                                {
                                    CT_BufferRect(p_x,p_y,p_w,p_h,p_cgb,1); //绘制进度条背景
                                    CT_BufferRect(p_x,p_y,p_w,2,p_cbu,1); //绘制进度条上边框
                                    CT_BufferRect(p_x,p_y+p_h-2,p_w,2,p_cbd,1); //绘制进度条下边框
                                    CT_BufferRect(p_x,p_y,2,p_h-2,p_cbl,1); //绘制进度条左边框
                                    CT_BufferRect(p_x+p_w-2,p_y,2,p_h-2,p_cbr,1); //绘制进度条右边框
                                }
                                CT_BufferRect(p_x+4,p_y+4,p_ww,p_h-8,p_cw,1); //绘制进度条部件
                            }
                            if(ui_type === 6)
                            {
                                var t_x = win_x + CT_ContainerUI[i2][3]; //文本框位置x
                                var t_y = win_y + CT_ContainerUI[i2][4]; //文本框位置y
                                var t_w = CT_ContainerUI[i2][5]; //文本框宽度
                                var t_h = CT_ContainerUI[i2][6]; //文本框高度
                                var t_cbg = CT_ContainerUI[i2][7]; //文本框背景颜色
                                var t_cbu = CT_ContainerUI[i2][8]; //文本框上边框颜色
                                var t_cbd = CT_ContainerUI[i2][9]; //文本框下边框颜色
                                var t_cbl = CT_ContainerUI[i2][10]; //文本框左边框颜色
                                var t_cbr = CT_ContainerUI[i2][11]; //文本框右边框颜色
                                var t_ct = CT_ContainerUI[i2][12]; //文本框字体颜色
                                var t_img = CT_ContainerUI[i2][13]; //文本框背景图片
                                var t_val = CT_ContainerUI[i2][14]; //文本框字符串
                                var t_pass = CT_ContainerUI[i2][15]; //密码文本框参数
                                var t_readonly = CT_ContainerUI[i2][18]; //文本框只读参数
                                var t_fsize = 16; //文本框字体大小
                                var p = ""; //文本框密码串
                                if(t_img !== -1) //如果文本框背景图片不为空
                                {
                                    CT_BufferImage(t_x,t_y,t_img); //绘制文本框背景图片
                                }
                                else //文本框背景图片为空
                                {
                                    CT_BufferRect(t_x,t_y,t_w,t_h,t_cbg,1); //绘制文本框背景
                                    CT_BufferRect(t_x,t_y,t_w,2,t_cbu,1); //绘制文本框上边框
                                    CT_BufferRect(t_x,t_y+t_h-2,t_w,2,t_cbd,1); //绘制文本框下边框
                                    CT_BufferRect(t_x,t_y,2,t_h-2,t_cbl,1); //绘制文本框左边框
                                    CT_BufferRect(t_x+t_w-2,t_y,2,t_h-2,t_cbr,1); //绘制文本框右边框
                                }
                                if(t_pass !== 1) //如果文本框不是密码文本框
                                {
                                    var text_y = t_y + (t_h - t_fsize) / 2; //文本框字符串位置y
                                    CT_BufferString(t_x+5,text_y,t_fsize,t_ct,t_val); //绘制文本框字符串
                                }
                                else //如果文本框是密码文本框
                                {
                                    var t_val_l = t_val.length;
                                    var passi;
                                    for(passi=0;passi<t_val_l;passi++) //遍历文本框字符串
                                    {
                                        p += "●"; //增加密码符
                                    }
                                    CT_BufferString(t_x+5,t_y+3,t_fsize,t_ct,p); //绘制文本框密码串
                                }
                                if(i2 === CT_Textbox_Index) //如果选择的文本框是当前文本框
                                {
                                    if(t_pass !== 1) //如果文本框不是密码文本框
                                    {
                                        var val_width = string_pxwidth(t_val,t_fsize); //文本框字符串宽度
                                    }    
                                    else //如果文本框是密码文本框
                                    {
                                        var val_width = string_pxwidth(p,t_fsize); //文本框密码串宽度
                                    }
                                    if(t_readonly === 0) //如果文本框不是只读
                                    {
                                        CT_BufferLine(t_x+4+val_width+1,t_y+3,t_x+4+val_width+1,t_y+t_h-4,1,color(0,0,0,255)); //绘制文本框输入线
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按钮重置
//--------------------------------------------------------------------
function CT_ButtonReset()
{
    var i;
    for(i=0;i<CT_ContainerUIIndex;i++) //遍历UI容器
    {
        if(CT_ContainerUI[i] != null) //如果当前UI不为空
        {
            var ui_type = CT_ContainerUI[i][2]; //获取当前UI类型
            if(ui_type === 1) //如果当前UI是按钮
            {
                CT_ContainerUI[i][17] = 0; //设置当前按钮的点击状态
                CT_ContainerUI[i][19] = 0; //设置当前按钮的按下状态
                CT_ContainerUI[i][20] = 0; //设置当前按钮的松开状态
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 播放音频
//--------------------------------------------------------------------
function audio_play(a,l)
{
    if(a !== -1) //如果资源不为空
    {
        var res_type = CT_ResourceList[a][1]; //资源类型
        if(res_type === 1) //如果资源类型是音频
        {
            CT_ContainerResource[a].play(); //播放资源容器中指定的音频
            CT_ContainerResource[a].currentTime = 0; //音频位置0
            CT_ContainerResource[a].loop = l; //设置播放循环
    	}
        else //如果资源类型不是音频
        {
            cprint("ERROR 5 : The resource index corresponding to the resource file is not a audio. ResIndex : " + String(a));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 停止播放音频
//--------------------------------------------------------------------
function audio_stop(a)
{
    if(a !== -1) //如果资源不为空
    {
        var res_type = CT_ResourceList[a][1]; //资源类型
        if(res_type === 1) //如果资源类型是音频
        {
            CT_ContainerResource[a].pause(); //停止播放资源容器中指定的音频
    	}
        else //如果资源类型不是音频
        {
            cprint("ERROR 5 : The resource index corresponding to the resource file is not a audio. ResIndex : " + String(a));
        }
    }

}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置Draw层
//--------------------------------------------------------------------
function draw_set_layer(l)
{
    CT_DrawLayer = l; //draw层
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 清除draw
//--------------------------------------------------------------------
function draw_clear()
{
    var i;
    for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
    {
        if(CT_ContainerDraw[i] != null) //如果当前draw不为空
        {
            var draw_l = CT_ContainerDraw[i][1]; //当前draw层
            if(draw_l === CT_DrawLayer) //如果当前draw层等于draw层
            {
                CT_ContainerDraw[i] = null; //清除当前draw
            }
        }
    }
    CT_InterfaceRepaint(); //请求重绘
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制矩形(容器)
//--------------------------------------------------------------------
function draw_rect(x,y,w,h,c,f)
{
    var type = 1; //draw类型
    if(CT_ContainerDrawIndex > 0) //如果draw容器长度大于0
    {
        var i;
        for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
        {
            if(CT_ContainerDraw[i] == null) //如果当前draw为空
            {
                CT_ContainerDraw[i] = [type,CT_DrawLayer,x,y,w,h,c,f]; //将draw数据写入draw容器
                CT_InterfaceRepaint(); //请求重绘
                return;
            }
        }
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,w,h,c,f]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
    else
    {
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,w,h,c,f]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制线(容器)
//--------------------------------------------------------------------
function draw_line(x1,y1,x2,y2,w,c)
{
    var type = 2; //draw类型
    if(CT_ContainerDrawIndex > 0) //如果draw容器长度大于0
    {
        var i;
        for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
        {
            if(CT_ContainerDraw[i] == null) //如果当前draw为空
            {
                CT_ContainerDraw[i] = [type,CT_DrawLayer,x1,y1,x2,y2,w,c]; //将draw数据写入draw容器
                CT_InterfaceRepaint(); //请求重绘
                return;
            }
        }
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x1,y1,x2,y2,w,c]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
    else
    {
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x1,y1,x2,y2,w,c]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制圆(容器)
//--------------------------------------------------------------------
function draw_circle(x,y,r,c,f)
{
    var type = 3; //draw类型
    if(CT_ContainerDrawIndex > 0) //如果draw容器长度大于0
    {
        var i;
        for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
        {
            if(CT_ContainerDraw[i] == null) //如果当前draw为空
            {
                CT_ContainerDraw[i] = [type,CT_DrawLayer,x,y,r,c,f]; //将draw数据写入draw容器
                CT_InterfaceRepaint(); //请求重绘
                return;
            }
        }
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,r,c,f]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
    else
    {
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,r,c,f]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制字符串(容器)
//--------------------------------------------------------------------
function draw_string(x,y,s,c,t)
{
    var type = 4; //draw类型
    if(CT_ContainerDrawIndex > 0) //如果draw容器长度大于0
    {
        var i;
        for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
        {
            if(CT_ContainerDraw[i] == null) //如果当前draw为空
            {
                CT_ContainerDraw[i] = [type,CT_DrawLayer,x,y,s,c,t]; //将draw数据写入draw容器
                CT_InterfaceRepaint(); //请求重绘
                return;
            }
        }
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,s,c,t]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
    else
    {
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,s,c,t]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制图像(容器)
//--------------------------------------------------------------------
function draw_image(x,y,ii)
{
    var type = 5; //draw类型
    if(CT_ContainerDrawIndex > 0) //如果draw容器长度大于0
    {
        var i;
        for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
        {
            if(CT_ContainerDraw[i] == null) //如果当前draw为空
            {
                CT_ContainerDraw[i] = [type,CT_DrawLayer,x,y,ii]; //将draw数据写入draw容器
                CT_InterfaceRepaint(); //请求重绘
                return;
            }
        }
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,ii]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
    else
    {
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,ii]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
    CT_InterfaceRepaint(); //请求重绘
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制图像部分(容器)
//--------------------------------------------------------------------
function draw_image_part(x,y,ii,ix,iy,iw,ih)
{
    var type = 6; //draw类型
    if(CT_ContainerDrawIndex > 0) //如果draw容器长度大于0
    {
        var i;
        for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
        {
            if(CT_ContainerDraw[i] == null) //如果当前draw为空
            {
                CT_ContainerDraw[i] = [type,CT_DrawLayer,x,y,ii,ix,iy,iw,ih]; //将draw数据写入draw容器
                CT_InterfaceRepaint(); //请求重绘
                return;
            }
        }
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,ii,ix,iy,iw,ih]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
    else
    {
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x,y,ii,ix,iy,iw,ih]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制曲线(容器)
//--------------------------------------------------------------------
function draw_curve(x1,y1,x2,y2,x3,y3,w,c)
{
    var type = 7; //draw类型
    if(CT_ContainerDrawIndex > 0) //如果draw容器长度大于0
    {
        var i;
        for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
        {
            if(CT_ContainerDraw[i] == null) //如果当前draw为空
            {
                CT_ContainerDraw[i] = [type,CT_DrawLayer,x1,y1,x2,y2,x3,y3,w,c]; //将draw数据写入draw容器
                CT_InterfaceRepaint(); //请求重绘
                return;
            }
        }
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x1,y1,x2,y2,x3,y3,w,c]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
    else
    {
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x1,y1,x2,y2,x3,y3,w,c]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 绘制三角形(容器)
//--------------------------------------------------------------------
function draw_tri(x1,y1,x2,y2,x3,y3,c,f)
{
    var type = 8; //draw类型
    if(CT_ContainerDrawIndex > 0) //如果draw容器长度大于0
    {
        var i;
        for(i=0;i<CT_ContainerDrawIndex;i++) //遍历draw容器
        {
            if(CT_ContainerDraw[i] == null) //如果当前draw为空
            {
                CT_ContainerDraw[i] = [type,CT_DrawLayer,x1,y1,x2,y2,x3,y3,c,f]; //将draw数据写入draw容器
                CT_InterfaceRepaint(); //请求重绘
                return;
            }
        }
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x1,y1,x2,y2,x3,y3,c,f]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
    else
    {
        CT_ContainerDraw[CT_ContainerDrawIndex] = [type,CT_DrawLayer,x1,y1,x2,y2,x3,y3,c,f]; //将draw数据写入draw容器
        CT_ContainerDrawIndex ++; //draw容器索引 +1
        CT_InterfaceRepaint(); //请求重绘
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按键按住检查
//--------------------------------------------------------------------
function keyboard_press(key)
{
    if(key >= 0 && key <= 255) //如果按键键值在范围内
    {
        if(CT_ContainerKeyState[key] === 1) //如果按键状态容器中指定的按键标记为1
        {
            return 1;
	}
    }
    else //如果按键键值不在范围内
    {
        cprint("ERROR 7 : Key value beyond range. KeyCode : " + String(key));
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按键按下检查
//--------------------------------------------------------------------
function keyboard_down(key)
{
    if(key >= 0 && key <= 255) //如果按键键值在范围内
    {
        if(CT_ContainerKeyDown[key] === 1)  //如果按键按下容器中指定的按键标记为1
        {
    	    return 1;
        }
    }
    else //如果按键键值不在范围内
    {
        cprint("ERROR 7 : Key value beyond range. KeyCode : " + String(key));
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按键松开检查
//--------------------------------------------------------------------
function keyboard_up(key)
{
    if(key >= 0 && key <= 255) //如果按键键值在范围内
    {
        if(CT_ContainerKeyUp[key] === 1) //如果按键松开状态容器中指定的按键标记为1
        {
    	    return 1;
        }
    }
    else //如果按键键值不在范围内
    {
        cprint("ERROR 7 : Key value beyond range. KeyCode : " + String(key));
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 鼠标按住检查
//--------------------------------------------------------------------
function mouse_press(mkey)
{
    if(mkey >= 0 && mkey <= 2) //如果鼠标键值在范围内
    {
        if(CT_ContainerMKeyState[mkey] === 1) //如果鼠标按键状态容器中指定的按键标记为1
        {
            return 1;
        }
    }
    else //如果鼠标键值不在范围内
    {
        cprint("ERROR 8 : Mouse key value beyond range. KeyCode : " + String(mkey));
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 鼠标按下检查
//--------------------------------------------------------------------
function mouse_down(mkey)
{
    if(mkey >= 0 && mkey <= 2) //如果鼠标键值在范围内
    {
        if(CT_ContainerMKeyDown[mkey] === 1) //如果鼠标按键按下容器中指定的按键标记为1
        {
    	    return 1;
        }
    }
    else //如果鼠标键值不在范围内
    {
        cprint("ERROR 8 : Mouse key value beyond range. KeyCode : " + String(mkey));
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 鼠标松开检查
//--------------------------------------------------------------------
function mouse_up(mkey)
{
    if(mkey >= 0 && mkey <= 2) //如果鼠标键值在范围内
    {
        if(CT_ContainerMKeyUp[mkey] === 1) //如果鼠标按键松开容器中指定的按键标记为1
        {
    	    return 1;
        }
    }
    else //如果鼠标键值不在范围内
    {
        cprint("ERROR 8 : Mouse key value beyond range. KeyCode : " + String(mkey));
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 鼠标位置x
//--------------------------------------------------------------------
function mouse_x()
{
    if(CT_MousePosX > CT_CanvasW) //如果鼠标位置x大于画布宽度
    {
        CT_MousePosX = CT_CanvasW; //鼠标位置x等于画布宽度
    }
    return CT_MousePosX; //返回鼠标位置x
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 鼠标位置y
//--------------------------------------------------------------------
function mouse_y()
{
    if(CT_MousePosY > CT_CanvasH) //如果鼠标位置y大于画布高度
    {
        CT_MousePosY = CT_CanvasH; //鼠标位置y等于画布高度
    }
    return CT_MousePosY; //返回鼠标位置y
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 鼠标滚轮检查
//--------------------------------------------------------------------
function mouse_wheel(mkey)
{
    if(mkey === 0 || mkey === 1) //如果鼠标滚轮参数正确
    {
        if(CT_ContainerMWheel[mkey] === 1) //如果鼠标滚轮容器中指定的滚动标记为1
        {
    	    return 1;
        }
    }
    else //如果鼠标滚轮参数不正确
    {
        cprint("ERROR 9 : The mouse wheel direction is error. KeyCode : " + String(mkey));
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 创建触摸按键
//--------------------------------------------------------------------
function touchkey_create(id,x,y,w,h,key)
{
    if(CT_ContainerTouchKey[id] == null) //如果触摸键容器指定索引为空
    {
        if(w > 0 && h > 0) //如果触摸键宽高大于0
        {
            if(key >= 0 && key <= 255) //如果按键键值在范围内
            {
                CT_ContainerTouchKey[id] = [x,y,w,h,key,-1,0]; //将触摸键数据存入触摸键容器指定索引中
                if(id >= CT_ContainerTouchIndex) //如果触摸键索引大于等于触摸键容器索引
                {
                    CT_ContainerTouchIndex = id + 1; //触摸键容器索引
                }
            }
            else //如果按键键值不在范围内
            {
                cprint("ERROR 7 : Key value beyond range. KeyCode : " + String(key));
            }
        }
        else
        {
            cprint("ERROR 17 : Unable to create virtual key. TouchKeyID : " + String(id));
        }
    }
    else //如果触摸键容器指定索引不为空
    {
        cprint("ERROR 16 : Virtual key have been created. TouchKeyID : " + String(id));
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 删除触摸按键
//--------------------------------------------------------------------
function touchkey_delete(id)
{
    if(CT_ContainerTouchKey[id] != null) //如果触摸键容器指定索引不为空
    {
        CT_ContainerTouchKey[id] = null; //清除触摸键数据
    }
    else //如果触摸键容器指定索引为空
    {
        cprint("ERROR 18 : The virtual key is not created. TouchKeyID : " + String(id));
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 触摸按键图片
//--------------------------------------------------------------------
function touchkey_image(id,img)
{
    if(CT_ContainerTouchKey[id] != null) //如果触摸键容器指定索引不为空
    {
        CT_ContainerTouchKey[id][5] = img; //设置触摸键图像
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 控制台输出
//--------------------------------------------------------------------
function cprint(str)
{
    if(CT_DEBUG_MODE === 1) //如果调试模式开启
    {
        console.log(str); //将字符串输出到控制台
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 获取资源
//--------------------------------------------------------------------
function res(n)
{
    var res_name = CT_PathGetName(n); //从路径中获取文件名
    if(res_name.lastIndexOf(".") !== -1) //如果文件名中有.
    {
        if(res_name.lastIndexOf(".") !== 0) //如果文件名中有扩展名
        {
            var i;
            for(i=0;i<CT_ResourceList.length;i++) //查找整个资源列表
            {
                if(CT_ResourceList[i] != null) //如果当前资源路径不为空
                {
                    if(CT_ResourceList[i][0] === n) //如果找到指定资源
                    {
                        return i; //返回资源索引
                    }
                }
            }
            cprint("ERROR 0 : The resource file is not found : " + n);
        }
        else
        {
            cprint("ERROR 2 : The resource file name is error : " + n);
        }
    }
    else
    {
        cprint("ERROR 3 : The resource file type is not supoort : " + n);
    }
    return -1;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// rgb颜色
//--------------------------------------------------------------------
function color(r,g,b,a)
{
    var red = "00"; //red值
    var green = "00"; //green值
    var blue = "00"; //blue值
    var alpha = "00";
    if(r >= 0 && r <= 255) //如果参数r的范围在0 - 255之间
    {
        if(r >= 0 && r <= 15) //如果参数r的范围在0 - 15之间
        {
            red = "0" + r.toString(16); //在十六进制red值前加0
        }
        else //如果参数r的范围不在0 - 16之间
        {
            red = r.toString(16); //在十六进制red值
        }
    }
    else
    {
        cprint("ERROR 15 : The color value is error. ColorValue : " + String(r));
    }
    if(g >= 0 && g <= 255) //如果参数g的范围在0 - 255之间
    {
        if(g >= 0 && g <= 15) //如果参数g的范围在0 - 15之间
        {
            green = "0" + g.toString(16); //在十六进制green值前加0
        }
        else //如果参数g的范围不在0 - 16之间
        {
            green = g.toString(16); //在十六进制green值
        }
    }
    else
    {
        cprint("ERROR 15 : The color value is error. ColorValue : " + String(g));
    }
    if(b >= 0 && b <= 255) //如果参数b的范围在0 - 255之间
    {
        if(b >= 0 && b <= 15) //如果参数b的范围在0 - 15之间
        {
            blue = "0" + b.toString(16); //在十六进制blue值
        }
        else //如果参数b的范围不在0 - 16之间
        {
            blue = b.toString(16); //在十六进制blue值
        }
    }
    else
    {
        cprint("ERROR 15 : The color value is error. ColorValue : " + String(b));
    }
    if(a >= 0 && a <= 255) //如果参数a的范围在0 - 255之间
    {
        if(a >= 0 && a <= 15) //如果参数a的范围在0 - 15之间
        {
            alpha = "0" + a.toString(16); //在十六进制alpha值前加0
        }
        else //如果参数a的范围不在0 - 16之间
        {
            alpha = a.toString(16); //在十六进制alpha值
        }
    }
    else
    {
        cprint("ERROR 15 : The color value is error.ColorValue : " + String(a));
    }
    var color_code = "#" + red + green + blue + alpha; //颜色值
    return color_code; //返回颜色值
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 文本像素宽度
//--------------------------------------------------------------------
function string_pxwidth(str,size)
{
    CT_Ctx.font = String(size) + "px Arial"; //字体大小
    var text_w = CT_Ctx.measureText(str); //测量文本像素宽度
    return text_w.width; //返回文本像素宽度
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置视野设置x
//--------------------------------------------------------------------
function view_set_x(x)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(x !== CT_ViewLastX) //如果x不等于上次x
        {
            CT_ViewX = x; //设置视野位置x
            CT_ViewLastX = x; //设置上次视野位置x
            CT_InterfaceRepaint(); //请求重绘
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置视野设置y
//--------------------------------------------------------------------
function view_set_y(y)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(y !== CT_ViewLastY) //如果y不等于上次y
        {
            CT_ViewY = y;//设置视野位置y
            CT_ViewLastY = y; //设置上次视野位置y
            CT_InterfaceRepaint(); //请求重绘
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 视野位置x
//--------------------------------------------------------------------
function view_x()
{
    return CT_ViewX; //返回视野位置x
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 视野位置y
//--------------------------------------------------------------------
function view_y()
{
    return CT_ViewY; //返回视野位置y
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 读取文本数据
//--------------------------------------------------------------------
function textdata_read(t)
{
    if(t !== -1) //如果资源不为空
    {
        var res_type = CT_ResourceList[t][1]; //资源类型
        if(res_type === 2) //如果资源是文本
        {
            return CT_ContainerResource[t]; //返回文本数据
        }
        else //如果资源不是文本
        {
            cprint("ERROR 21 : The resource index corresponding to the resource file is not a text. ResIndex : " + String(t));
        }
    }
    return "";
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 获取文本数据行数
//--------------------------------------------------------------------
function textdata_line(t)
{
    if(t !== -1) //如果资源不为空
    {
        var res_type = CT_ResourceList[t][1]; //资源类型
        if(res_type === 2) //如果资源是文本
        {
            var line = CT_ResourceList[t][2]; //获取文本行数
            return line; //返回行数
        }
        else //如果资源不是文本
        {
            cprint("ERROR 21 : The resource index corresponding to the resource file is not a text. ResIndex : " + String(t));
        }
    }
    return 1;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 读取文本数据指定行
//--------------------------------------------------------------------
function textdata_read_line(t,l)
{
    var line_text = ""; //行文本
    if(t !== -1) //如果资源不为空
    {
        var res_type = CT_ResourceList[t][1]; //资源类型
        if(res_type === 2) //如果资源是文本
        {
            var td_len = CT_ContainerResource[t].length; //文本数据长度
            var tc = ""; //文本数据当前字符
            if(l === 0) //如果行号等于0
            {
                var i = 0;
                while(i < td_len) //遍历文本数据
                {
                    tc = CT_ContainerResource[t][i]; //获取文本数据当前字符
                    if(tc === "\n") //如果当前字符是换行符
                    {
                        line_text = CT_ContainerResource[t].slice(0,i); //截取文本数据第一行文本
                        return line_text; //返回文本数据第一行文本
                    }
                    i ++;
                }
                return CT_ContainerResource[t]; //如果没有换行符，就返回整个文本数据
            }
            if(l > 0) //如果行号大于0
            {
                var i2 = 0;
                var line = 0; //当前行
                var ts = 0; //文本片段开始位置
                var te = 0; //文本片段结束位置
                while(i2 < td_len) //遍历文本数据
                {
                    tc = CT_ContainerResource[t][i2]; //获取文本数据当前字符
                    if(tc === "\n") //如果当前字符是换行符
                    {
                        line ++; //当前行 +1
                        if(line === l) //如果当前行等于参数行
                        {
                            ts = i2 + 1; //确定文本片段开始位置
                            var i3 = ts;
                            while(i3 < td_len) //从文本片段开始位置遍历文本数据
                            {
                                tc = CT_ContainerResource[t][i3]; //获取文本数据当前字符
                                if(tc === "\n") //如果当前字符是换行符
                                {
                                    te = i3 - 1; //确定文本片段结束位置
                                    line_text = CT_ContainerResource[t].slice(ts,te); //截取文本数据文本
                                    return line_text; //返回文本数据文本
                                }
                                i3 ++;
                            }
                            line_text = CT_ContainerResource[t].slice(ts,td_len); //如果没有换行符，截取文本数据最后一行文本
                            return line_text; //返回文本数据文本
                        }
                    }
                    i2 ++;
                }
            }
        }
        else //如果资源不是文本
        {
            cprint("ERROR 21 : The resource index corresponding to the resource file is not a text. ResIndex : " + String(t));
        }
    }
    return "";
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 记录打开
//--------------------------------------------------------------------
function rectab_open(name)
{
    if(name.indexOf("/") === -1 && name.indexOf("*") === -1 && name.indexOf(":") === -1 && name.indexOf("?") === -1 && name.indexOf("<") === -1 && name.indexOf(">") === -1 && name.indexOf("|") === -1) //如果记录表名称格式正确
    {
        CT_RectabName = name; //设置记录表名称
    }
    else
    {
        cprint("ERROR 10 : The record table name is error : " + name); //输出错误
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 记录关闭
//--------------------------------------------------------------------
function rectab_close()
{
    CT_RectabName = "default"; //重置记录表名称
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 记录删除
//--------------------------------------------------------------------
function rectab_delete(name)
{
    if(name.indexOf("/") === -1 && name.indexOf("*") === -1 && name.indexOf(":") === -1 && name.indexOf("?") === -1 && name.indexOf("<") === -1 && name.indexOf(">") === -1 && name.indexOf("|") === -1) //如果记录表名称格式正确
    {
        localStorage.setItem(name,""); //删除记录表
    }
    else
    {
        cprint("ERROR 10 : The record table name is error : " + name); //输出错误
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 记录写入
//--------------------------------------------------------------------
function rectab_write(title,text)
{
    var rectab_list = localStorage.getItem(CT_RectabName); //从本地读取记录表
    if(title.indexOf("┘") === -1) //如果参数title没有 "┘"
    {
        if(text.indexOf("┘") === -1)
        {
            if(rectab_list === null) //如果记录表为空
            {
                localStorage.setItem(CT_RectabName,title+"="+text+"┘"); //将记录表写入本地
            }
            else //如果记录表不为空
            {
                var title_pos = rectab_list.indexOf(title); //记录表中标题的位置
                if(title_pos === -1) //如果记录表中没有指定标题
                {
                    var rectab_list = rectab_list + title + "=" + text + "┘"; //在记录表中增加一个新数据
                    localStorage.setItem(CT_RectabName,rectab_list); //将记录表写入本地
                }
                else //如果记录表中有指定标题
                {
                    var title_pos = rectab_list.indexOf(title); //记录表中标题的位置
                    var data_pos = title_pos + title.length + 1; //记录表中数据的位置
                    var rectab_list_l = rectab_list.length; //记录表长度
                    var data_end_pos; //记录表中数据结束符的位置
                    var i = data_pos;
                    while(i <= rectab_list_l) //从数据的位置开始向后查找整个记录表
                    {
                        if(rectab_list[i] === "┘") //如果找到数据结束符
                        {
                            data_end_pos = i; //数据结束符的位置
                            break;
                        }    
                        i += 1;
                    }
                    var replace_data = rectab_list.slice(data_pos,data_end_pos); //将要替换的数据
                    var replace_part = title + "=" + replace_data + "┘"; //将要替换的数据段
                    rectab_list = rectab_list.replace(replace_part,title+"="+text+"┘"); //替换记录表中的数据段
                    localStorage.setItem(CT_RectabName,rectab_list); //将记录表写入本地
                }
            }
        }
        else
        {
            cprint("ERROR 12 : The record table text is error : " + text); //输出错误
        }
    }
    else //如果参数title有 "┘"
    {
        cprint("ERROR 11 : The record table title is error : " + title); //输出错误
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 记录读取
//--------------------------------------------------------------------
function rectab_read(title)
{
    var rectab_list = localStorage.getItem(CT_RectabName); //从本地读取记录表
    if(rectab_list === null) //如果记录表为空
    {
        return ""; //返回空字符
    }
    else //如果记录表不为空
    {
        if(title.indexOf("┘") === -1) //如果参数title没有 "┘"
        {
            var title_pos = rectab_list.indexOf(title); //记录表中标题的位置
            var data_pos = title_pos + title.length + 1; //记录表中数据的位置
            var rectab_list_l = rectab_list.length; //记录表长度
            var data_end_pos; //数据结束符的位置
            var i = data_pos;
            while(i <= rectab_list_l) //从数据的位置开始向后查找整个记录表
            {
                if(rectab_list[i] === "┘") //如果找到数据结束符
                {
                    data_end_pos = i; //数据结束符的位置
                    break;
                }
                i += 1;
            }
            var re = rectab_list.slice(data_pos,data_end_pos); //从记录表中指定数据
            return re; //返回数据
        }
        else
        {
            cprint("ERROR 11 : The record table title is error : " + title); //输出错误
        }
    }
    return "";
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 清除指定标题的数据
//--------------------------------------------------------------------
function rectab_null(title)
{
    var rectab_list = localStorage.getItem(CT_RectabName); //从本地读取记录表
    if(title.indexOf("┘") === -1) //如果参数title没有 "┘"
    {
        if(rectab_list != null) //如果记录表不为空
        {
            var title_pos = rectab_list.indexOf(title); //记录表中标题的位置
            if(title_pos !== -1) //如果记录表中有指定标题
            {
                var title_pos = rectab_list.indexOf(title); //记录表中标题的位置
                var data_pos = title_pos + title.length + 1; //记录表中数据的位置
                var rectab_list_l = rectab_list.length; //记录表长度
                var data_end_pos; //记录表中数据结束符的位置
                var i = data_pos;
                while(i <= rectab_list_l) //从数据的位置开始向后查找整个记录表
                {
                    if(rectab_list[i] === "┘") //如果找到数据结束符
                    {
                        data_end_pos = i; //数据结束符的位置
                        break;
                    }
                    i += 1;
                }
                var delete_data = rectab_list.slice(title_pos,data_end_pos+1); //将要删除的数据
                rectab_list = rectab_list.replace(delete_data,""); //替换记录表中的数据段
                localStorage.setItem(CT_RectabName,rectab_list); //将记录表写入本地
            }
        }
    }
    else //如果参数title有 "┘"
    {
        cprint("ERROR 11 : The record table title is error : " + title); //输出错误
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 场景对象
//--------------------------------------------------------------------
function CTscene()
{
    this.width = 960; //场景宽度
    this.height = 540; //场景高度
    this.grid_width = 30; //场景网格宽度
    this.grid_height = 30; //场景网格高度
    this.tile_image = []; //瓦片图片列表
    this.tile_map = []; //瓦片地图
    this.sprite_map = function(){}; //sprite地图
//--------------------------------------------------------------------
    this.type = -1; //类型
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 进入场景
//--------------------------------------------------------------------
function scene_enter(scene)
{
    CT_RunnerStatus = 0; //停止运行器
    CT_RunnerReset(); //运行器重置
    if(scene.type === -1) //如果对象是场景对象
    {
        CT_sceneWidth = scene.width; //场景宽度
        CT_sceneHeight = scene.height; //场景高度
        CT_GridWidth = scene.grid_width; //场景网格宽度
        CT_GridHeight = scene.grid_height; //场景网格高度
        if(CT_sceneWidth > 0 && CT_sceneHeight > 0 && CT_GridWidth > 0 && CT_GridHeight) //如果场景大小和网格大小大于0
        {
            if(CT_sceneWidth >= CT_GridWidth && CT_sceneHeight >= CT_GridHeight) //如果场景大小大于等于网格大小
            {
                var ti = scene.tile_image; //瓦片图片列表
                var tm = scene.tile_map; //瓦片地图
                var i;
                var tile_x = 0; //瓦片位置x
                var tile_y = 0; //瓦片位置y
                var tm_length = tm.length; //瓦片数组长度
                for(i=0;i<tm_length;i++) //遍历瓦片地图
                {
                    if(tm[i] != null) //如果瓦片地图当前层不为空
                    {
                        var tmlay_length = tm[i].length; //当前层瓦片数组长度
                        var i2;
                        for(i2=0;i2<tmlay_length;i2++) //遍历瓦片地图当前层
                        {
                            if(tile_y < CT_sceneHeight) //如果当前瓦片位置y小于场景高度
                            {
                                if(tile_x < CT_sceneWidth) //如果当前瓦片位置x小于场景宽度
                                {
                                    if(tm[i][i2] !== 0) //如果当前瓦片地图块不为空
                                    {
                                        var ti_i = 0; //瓦片图片索引
                                        var ti_width = CT_ResourceList[ti[ti_i]][2]; //当前瓦片图片宽度
                                        var ti_height = CT_ResourceList[ti[ti_i]][3]; //当前瓦片图片高度
                                        var ti_gxn = parseInt(ti_width / CT_GridWidth); //当前瓦片图片横向网格数
                                        var ti_gyn = parseInt(ti_height / CT_GridHeight); //当前瓦片图片纵向网格数
                                        var ti_gx = -1; //瓦片图块位置x
                                        var ti_gy = 0; //瓦片图块位置y
                                        var ti_index = tm[i][i2]; //瓦片地图块索引
                                        var i3;
                                        for(i3=0;i3<ti_index;i3++) //遍历瓦片图块
                                        {
                                            if(ti_gy < ti_gyn) //如果当前瓦片图块位置y小于瓦片图片高度
                                            {
                                                if(ti_gx < ti_gxn) //如果瓦片图块位置x小于瓦片图片宽度
                                                {
                                                    ti_gx += 1; //下一个瓦片图块
                                                }
                                                if(ti_gx >= ti_gxn) //如果下一个瓦片图块位置x大于等于瓦片图片宽度
                                                {
                                                    ti_gx = 0;
                                                    ti_gy += 1; //下一行瓦片图块
                                                }
                                            }
                                            if(ti_gy >= ti_gyn) //如果下一个瓦片图块位置y大于瓦片图片高度
                                            {
                                                ti_gx = 0;
                                                ti_gy = 0;
                                                ti_i ++; //切换下一个瓦片图片
                                                ti_width = CT_ResourceList[ti[ti_i]][2]; //当前瓦片图片宽度
                                                ti_height = CT_ResourceList[ti[ti_i]][3]; //当前瓦片图片高度
                                                ti_gxn = parseInt(ti_width / CT_GridWidth); //当前瓦片图片横向网格数
                                                ti_gyn = parseInt(ti_height / CT_GridHeight); //当前瓦片图片纵向网格数
                                                if(ti_i > ti.length - 1) //如果瓦片图块索引没有对应的瓦片图块
                                                {
                                                    cprint("ERROR 200 : Beyond range of tile image group. TileImageIndex : " + String(ti_i));
                                                }
                                            }
                                        }
                                        CT_TileBuild(i,tile_x,tile_y,ti[ti_i],ti_gx,ti_gy); //创建瓦片
                                    }
                                    tile_x += CT_GridWidth; //下一个瓦片位置x
                                }
                                if(tile_x >= CT_sceneWidth) //如果下一个瓦片位置x大于等于场景宽度
                                {
                                    tile_x = 0;
                                    tile_y += CT_GridHeight; //下一行瓦片位置y
                                }
                            }
                            if(tile_y >= CT_sceneHeight) //如果下一行瓦片位置y大于场景高度
                            {
                                tile_x = 0;
                                tile_y = 0;
                            }
                        }
                    }
                }
                scene.sprite_map(); //创建sprite地图
            }
            else
            {
                cprint("ERROR 201 : The size of the scene must be greater than the grid size");
            }
        }
        else
        {
            cprint("ERROR 202 : Unable to enter the scene");
        }
    }
    else
    {
        cprint("ERROR 203 : The specified scene is not a scene object");
    }
    CT_InterfaceRepaint(); //请求重绘
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// sprite地图
//--------------------------------------------------------------------
function m(x,y,CTsprite)
{
    var id = CTsprite.id; //sprite id
    if(CTsprite.type === -2) //如果对象类型是sprite
    {
        var image = CTsprite.image; //sprite图像
        var image_w = 0; //sprite图像宽度
        var image_h = 0; //sprite图像高度
        if(image !== -1) //如果sprite有图像
        {
            image_w = CT_ResourceList[image][2]; //sprite图像宽度
            image_h = CT_ResourceList[image][3]; //sprite图像高度
        }
        var layer = CTsprite.layer; //sprite层
        var subimg = CTsprite.subimg; //sprite默认子图像索引
        var subnum = CTsprite.subnum; //sprite子图像数量
        if(subnum >= 1) //如果sprite子图像数量大于等于1
        {
            if(subimg <= subnum - 1) //如果子图像索引小于最大
            {
                var subimg_w = parseInt(image_w / subnum); //sprite子图像宽度
                var subimg_h = image_h; //sprite子图像高度
                var conspr_i = CT_ContainerSpriteIndex; //sprite容器sprite层的当前索引
                CT_ContainerSprite[conspr_i] = [id,layer,x,y,image,subimg,subnum,subimg_w,subimg_h,x,y]; //将sprite数据写入sprite容器
                CT_TaskCreated(conspr_i,CTsprite.main,CTsprite.loop); //创建sprite程序
                CT_ContainerSpriteIndex ++; //sprite容器索引 +1
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 创建瓦片
//--------------------------------------------------------------------
function tile_create(l,x,y,res,gx,gy)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var tix = gx * CT_GridWidth; //瓦片图片位置x
        var tiy = gy * CT_GridHeight; //瓦片图片位置y
        var tile_i = CT_ContainerTileIndex; //tile容器索引
        if(CT_ContainerTileIndex > 0) //如果Tile容器长度大于0
        {
            var i;
            for(i=0;i<CT_ContainerTileIndex;i++) //遍历Tile容器
            {
                if(CT_ContainerTile[i] == null) //如果当前Tile为空
               {
                    CT_ContainerTile[i] = [l,x,y,res,tix,tiy]; //将Tile数据写入Tile容器
                    CT_InterfaceRepaint(); //请求重绘
                    return; //中断
                }
            }
            CT_ContainerTile[tile_i] = [l,x,y,res,tix,tiy]; //将Tile数据写入Tile容器
            CT_ContainerTileIndex ++; //Tile容器索引 +1
            CT_InterfaceRepaint(); //请求重绘
        }
        else
        {
            CT_ContainerTile[tile_i] = [l,x,y,res,tix,tiy]; //将Tile数据写入Tile容器
            CT_ContainerTileIndex ++; //Tile容器索引 +1
            CT_InterfaceRepaint(); //请求重绘
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 销毁瓦片
//--------------------------------------------------------------------
function tile_destroy(l,x,y)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var i;
        for(i=0;i<CT_ContainerTileIndex;i++) //遍历瓦片容器
        {
            if(CT_ContainerTile[i] != null) //如果当前瓦片不为空
            {
                var tl = CT_ContainerTile[i][0]; //当前瓦片层
                if(tl === l) //如果当前瓦片层等于层
                {
                    var tx = CT_ContainerTile[i][1]; //当前瓦片位置x
                    var ty = CT_ContainerTile[i][2]; //当前瓦片位置y
                    if(x === tx && y === ty) //如果当前瓦片位置与参数位置相同
                    {
                        CT_ContainerTile[i] = null; //清除当前瓦片数据
                        CT_InterfaceRepaint(); //请求重绘
                        break; //中断
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 检查瓦片
//--------------------------------------------------------------------
function tile_check(l,x,y)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var i;
        for(i=0;i<CT_ContainerTileIndex;i++) //遍历瓦片容器
        {
            if(CT_ContainerTile[i] != null) //如果当前瓦片不为空
            {
                var tl = CT_ContainerTile[i][0]; //当前瓦片层
                if(tl === l) //如果当前瓦片层等于层
                {
                    var tx = CT_ContainerTile[i][1]; //当前瓦片位置x
                    var ty = CT_ContainerTile[i][2]; //当前瓦片位置y
                    var gw = CT_GridWidth; //场景网格宽度
                    var gh = CT_GridHeight; //场景网格高度
                    if(x >= tx && y >= ty && x <= tx + gw && y <= ty + gh) //如果当前位置有瓦片
                    {
                        return 1;
                    }
                }
            }
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Sprite对象
//--------------------------------------------------------------------
function CTsprite()
{
    this.image = -1; //sprite图像索引
    this.layer = 0; //sprite层
    this.subnum = 1; //sprite子图像数量
    this.subimg = 0; //sprite子图像索引
    this.collision_type = 0; //sprite碰撞方式
    this.collision_edge = 0; //sprite边缘碰撞
    this.main = function(){}; //sprite程序main函数
    this.loop = function(){}; //sprite程序loop函数
//--------------------------------------------------------------------
    this.id = CT_SpriteGetId(); //sprite id
    this.type = -2; //类型
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 创建Sprite
//--------------------------------------------------------------------
function sprite_create(x,y,CTsprite)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var id = CTsprite.id; //sprite id
        if(CTsprite.type === -2) //如果对象类型是sprite
        {
            var image = CTsprite.image; //sprite图像
            var image_w = 0; //sprite图像宽度
            var image_h = 0; //sprite图像高度
            if(image !== -1) //如果sprite有图像
            {
                image_w = CT_ResourceList[image][2]; //sprite图像宽度
                image_h = CT_ResourceList[image][3]; //sprite图像高度
            }
            var layer = CTsprite.layer; //sprite层
            var subimg = CTsprite.subimg; //sprite默认子图像索引
            var subnum = CTsprite.subnum; //sprite子图像数量
            if(subnum >= 1) //如果sprite子图像数量大于等于1
            {
                if(subimg <= subnum - 1) //如果子图像索引小于最大
                {
                    var subimg_w = parseInt(image_w / subnum); //sprite子图像宽度
                    var subimg_h = image_h; //sprite子图像高度
                    var conspr_i = CT_ContainerSpriteIndex; //sprite容器sprite层的当前索引
                    if(CT_ContainerSpriteIndex > 0) //如果sprite容器长度大于0
                    {
                        var i;
                        for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
                        {
                            if(CT_ContainerSprite[i] == null) //如果当前sprite为空
                            {
                                CT_ContainerSprite[i] = [id,layer,x,y,image,subimg,subnum,subimg_w,subimg_h,x,y]; //将sprite数据写入sprite容器
                                CT_TaskCreated(i,CTsprite.main,CTsprite.loop); //创建sprite程序
                                CT_InterfaceRepaint(); //请求重绘
                                return i; //中断
                           }
                        }
                        CT_ContainerSprite[conspr_i] = [id,layer,x,y,image,subimg,subnum,subimg_w,subimg_h,x,y]; //将sprite数据写入sprite容器
                        CT_TaskCreated(conspr_i,CTsprite.main,CTsprite.loop); //创建sprite程序
                        CT_ContainerSpriteIndex ++; //sprite容器索引 +1
                        CT_InterfaceRepaint(); //请求重绘
                        return conspr_i; //返回sprite索引
                    }
                    else
                    {
                        CT_ContainerSprite[conspr_i] = [id,layer,x,y,image,subimg,subnum,subimg_w,subimg_h,x,y]; //将sprite数据sprite容器
                        CT_TaskCreated(conspr_i,CTsprite.main,CTsprite.loop); //创建sprite程序
                        CT_ContainerSpriteIndex ++; //sprite容器索引 +1
                        CT_InterfaceRepaint(); //请求重绘
                        return conspr_i; //返回sprite索引
                    }
                }
                else
                {
                    cprint("ERROR 206 : The sprite subimage index is greater than the number of subimage. SubimageIndex : " + String(subimg));
                }
            }
            else
            {
                cprint("ERROR 207 : Sprite subimage number error. SubimageIndex : " + String(subimg));
            }
        }
        else
        {
            cprint("ERROR 208 : Not is sprite object. SpriteID : " + String(id));
        }
    }
    return -1;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 销毁Sprite
//--------------------------------------------------------------------
function sprite_destroy()
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        CT_ContainerSprite[CT_TaskRunIndex] = null; //清除sprite数据
        CT_TaskDestroy(CT_TaskRunIndex); //销毁sprite程序
        CT_InterfaceRepaint(); //请求重绘
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Sprite位置x
//--------------------------------------------------------------------
function sprite_x()
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
        {
            var x = CT_ContainerSprite[CT_TaskRunIndex][2]; //sprite位置x
            return x; //返回sprite位置x
        }
    }
    return -1;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Sprite位置y
//--------------------------------------------------------------------
function sprite_y()
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
        {
            var y = CT_ContainerSprite[CT_TaskRunIndex][3]; //sprite位置y
            return y; //返回sprite位置y
        }
    }
    return -1;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置Sprite位置x
//--------------------------------------------------------------------
function sprite_set_x(x)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
        {
            CT_ContainerSprite[CT_TaskRunIndex][2] = x; //设置sprite位置x
            CT_InterfaceRepaint(); //请求重绘
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置Sprite位置y
//--------------------------------------------------------------------
function sprite_set_y(y)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
        {
            CT_ContainerSprite[CT_TaskRunIndex][3] = y; //设置sprite位置y
            CT_InterfaceRepaint(); //请求重绘
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置Sprite子图像
//--------------------------------------------------------------------
function sprite_set_subimg(index)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
        {
            var spr_subnum = CT_ContainerSprite[CT_TaskRunIndex][6]; //sprite子图像数量
            if(index <= spr_subnum - 1) //如果sprite子图像索引小于sprite子图像数量-1
            {
                CT_ContainerSprite[CT_TaskRunIndex][5] = index; //设置sprite子图像索引
                CT_InterfaceRepaint(); //请求重绘
            }
            else
            {
                cprint("ERROR 206 : The sprite subimage index is greater than the number of subimage. SubimageIndex : " + String(index)); //输出错误
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Sprite变量赋值 数字
//--------------------------------------------------------------------
function spritenum_set(i,n)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
        {
            CT_TaskSetNum(CT_TaskRunIndex,i,n); //sprite程序数字变量赋值
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Sprite变量赋值 字符串
//--------------------------------------------------------------------
function spritestr_set(i,s)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
        {
            CT_TaskSetStr(CT_TaskRunIndex,i,s); //sprite程序字符串变量赋值
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Sprite变量 数字
//--------------------------------------------------------------------
function spritenum(i)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
        {
            var var_n = CT_TaskNum(CT_TaskRunIndex,i); //sprite程序数字变量值
            return var_n; //返回sprite程序数字变量值
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// Sprite变量 字符串
//--------------------------------------------------------------------
function spritestr(i)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果列表中sprite不为空
        {
            var var_s = CT_TaskStr(CT_TaskRunIndex,i); //sprite程序字符串变量值
            return var_s; //返回sprite程序字符串变量值
        }
    }
    return "";
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 碰撞检测
//--------------------------------------------------------------------
function sprite_collision(collspr)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(collspr.type === -2) //如果对象是sprite
        {
            if(collspr.collision_type === 0) //如果碰撞的sprite的碰撞方式是矩形碰撞
            {
                var spr_x = sprite_x(); //sprite位置x
                var spr_y = sprite_y(); //sprite位置y
                if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
                {
                    var spr_collw = CT_ContainerSprite[CT_TaskRunIndex][7]; //sprite碰撞区宽度
                    var spr_collh = CT_ContainerSprite[CT_TaskRunIndex][8]; //sprite碰撞区高度
                    var spr_l = CT_ContainerSprite[CT_TaskRunIndex][1]; //sprite层
                    var i;
                    for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
                    {
                        if(CT_ContainerSprite[i] != null) //如果当前sprite不为空
                        {
                            var cspr_l = CT_ContainerSprite[i][1]; //当前sprite层
                            if(spr_l === cspr_l) //如果sprite层等于当前sprite层
                            {
                                var cspr_id = CT_ContainerSprite[i][0]; //当前sprite id
                                if(cspr_id === collspr.id) //如果当前sprite id等于碰撞的sprite id
                                {
                                    var cspr_x = CT_ContainerSprite[i][2]; //当前sprite位置x
                                    var cspr_y = CT_ContainerSprite[i][3]; //当前sprite位置y
                                    var cspr_collw = CT_ContainerSprite[i][7]; //当前sprite碰撞区宽度
                                    var cspr_collh = CT_ContainerSprite[i][8]; //当前sprite碰撞区高度
                                    if(collspr.collision_edge === 0) //如果碰撞的sprite不是边缘碰撞
                                    {
                                        if(spr_x + spr_collw > cspr_x && spr_x < cspr_x + cspr_collw && spr_y + spr_collh > cspr_y && spr_y < cspr_y + cspr_collh) //如果sprite图像与碰撞的sprite图像相交
                                        {
                                            return 1;
                                        }
                                    }
                                    if(collspr.collision_edge === 1) //如果碰撞的sprite是边缘碰撞
                                    {
                                        if(spr_x + spr_collw > cspr_x && spr_x < cspr_x + cspr_collw && spr_y + spr_collh > cspr_y && spr_y < cspr_y + cspr_collh) //如果sprite图像与碰撞的sprite图像相交
                                        {
                                            var spr_lx = CT_ContainerSprite[CT_TaskRunIndex][9]; //sprite上次位置x
                                            var spr_ly = CT_ContainerSprite[CT_TaskRunIndex][10]; //sprite上次位置y
                                            CT_ContainerSprite[CT_TaskRunIndex][2] = spr_lx; //设置sprite位置x为上次位置x
                                            CT_ContainerSprite[CT_TaskRunIndex][3] = spr_ly; //设置sprite位置y为上次位置y
                                            CT_InterfaceRepaint(); //请求重绘
                                            return 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if(collspr.collision_type === 1) //如果碰撞的sprite的碰撞方式是圆形碰撞
            {
                var spr_x = sprite_x(); //sprite位置x
                var spr_y = sprite_y(); //sprite位置y
                if(CT_ContainerSprite[CT_TaskRunIndex] != null) //如果sprite不为空
                {
                    var spr_collw = CT_ContainerSprite[CT_TaskRunIndex][7]; //sprite碰撞区宽度
                    var spr_collh = CT_ContainerSprite[CT_TaskRunIndex][8]; //sprite碰撞区高度
                    var spr_l = CT_ContainerSprite[CT_TaskRunIndex][1];
                    var spr_r = parseInt(spr_collw / 2); //sprite半径
                    var spr_cx = spr_x + spr_r; //sprite中心x
                    var spr_cy = spr_y + spr_r; //sprite中心y
                    var i;
                    for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
                    {
                        if(CT_ContainerSprite[i] != null) //如果当前sprite不为空
                        {
                            var cspr_l = CT_ContainerSprite[i][1]; //当前sprite层
                            if(spr_l === cspr_l) //如果sprite层等于当前sprite层
                            {
                                var cspr_id = CT_ContainerSprite[i][0]; //当前sprite id
                                if(cspr_id === collspr.id) //如果当前sprite id 等于碰撞的sprite id
                                {
                                    var cspr_x = CT_ContainerSprite[i][2]; //当前sprite位置x
                                    var cspr_y = CT_ContainerSprite[i][3]; //当前sprite位置y
                                    var cspr_collw = CT_ContainerSprite[i][7]; //当前sprite碰撞区宽度
                                    var cspr_collh = CT_ContainerSprite[i][8]; //当前sprite碰撞区高度
                                    var cspr_r = parseInt(cspr_collw / 2); //当前sprite半径
                                    var cspr_cx = cspr_x + cspr_r; //当前sprite中心x
                                    var cspr_cy = cspr_y + cspr_r; //当前sprite中心y
                                    var spr_distance = Math.sqrt(Math.pow(spr_cx-cspr_cx,2)+Math.pow(spr_cy-cspr_cy,2)); //sprite与当前sprite的距离
                                    if(collspr.collision_edge === 0) //如果碰撞的sprite不是边缘碰撞
                                    {
                                        if(spr_distance < spr_r + cspr_r) //如果sprite图像在碰撞的sprite图像半径内
                                        {
                                            return 1;
                                        }
                                    }
                                    if(collspr.collision_edge === 1) //如果碰撞的sprite是边缘碰撞
                                    {
                                        if(spr_distance < spr_r + cspr_r) //如果sprite图像在碰撞的sprite图像半径内
                                        {
                                            var spr_lx = CT_ContainerSprite[CT_TaskRunIndex][9]; //sprite上次位置x
                                            var spr_ly = CT_ContainerSprite[CT_TaskRunIndex][10]; //sprite上次位置y
                                            CT_ContainerSprite[CT_TaskRunIndex][2] = spr_lx; //设置sprite位置x为上次位置x
                                            CT_ContainerSprite[CT_TaskRunIndex][3] = spr_ly; //设置sprite位置y为上次位置y
                                            CT_InterfaceRepaint(); //请求重绘
                                            return 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else
        {
            cprint("ERROR 208 : Not is sprite object. ObjectID : "+String(collspr.id));
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// sprite检查
//--------------------------------------------------------------------
function sprite_check(x,y,sprite)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var id = sprite.id; //sprite id
        if(sprite.type === -2) //如果对象是sprite
        {
            var i;
            for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
            {
                if(CT_ContainerSprite[i] != null) //如果当前sprite不为空
                {
                    var spr_id = CT_ContainerSprite[i][0]; //当前sprite id
                    if(spr_id === id) //如果当前sprite id等于sprite id
                    {
                        var spr_x = CT_ContainerSprite[i][2]; //当前sprite位置x
                        var spr_y = CT_ContainerSprite[i][3]; //当前sprite位置y
                        var spr_collw = CT_ContainerSprite[i][7]; //当前sprite碰撞区宽度
                        var spr_collh = CT_ContainerSprite[i][8]; //当前sprite碰撞区高度
                        if(x >= spr_x && y >= spr_y && x <= spr_x + spr_collw && y <= spr_y + spr_collh) //如果当前sprite在指定位置中
                        {
                            return 1;
                        }
                    }
                }
            }
        }
        else
        {
            cprint("ERROR 208 : Not is sprite object. ObjectID : "+String(id));
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// sprite索引
//--------------------------------------------------------------------
function sprite_index()
{
    return CT_TaskRunIndex; //返回sprite索引
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 销毁索引Sprite
//--------------------------------------------------------------------
function isprite_destroy(si)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            CT_ContainerSprite[si] = null; //清空sprite
            CT_TaskDestroy(si); //销毁sprite程序
            CT_InterfaceRepaint(); //请求重绘
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 索引Sprite位置x
//--------------------------------------------------------------------
function isprite_x(si)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            var x = CT_ContainerSprite[si][2]; //sprite位置x
            return x; //返回sprite位置x
        }
        else
        {
            cprint("ERROR 209 : The sprite is null. SpriteIndex : " + String(si));
        }
    }
    return -1;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 索引Sprite位置y
//--------------------------------------------------------------------
function isprite_y(si)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            var y = CT_ContainerSprite[si][3]; //sprite位置y
            return y; //返回sprite位置y
        }
        else
        {
            cprint("ERROR 209 : The sprite is null. SpriteIndex : " + String(si));
        }
    }
    return -1;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置索引Sprite位置x
//--------------------------------------------------------------------
function isprite_set_x(si,x)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            CT_ContainerSprite[si][2] = x; //设置sprite位置x
            CT_InterfaceRepaint(); //请求重绘
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置索引Sprite位置y
//--------------------------------------------------------------------
function isprite_set_y(si,y)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            CT_ContainerSprite[si][3] = y; //设置sprite位置y
            CT_InterfaceRepaint(); //请求重绘
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置索引Sprite子图像
//--------------------------------------------------------------------
function isprite_set_subimg(si,index)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            var spr_subnum = CT_ContainerSprite[si][6]; //sprite子图像数量
            if(index <= spr_subnum - 1) //如果sprite子图像索引小于sprite子图像数量-1
            {
                CT_ContainerSprite[si][5] = index; //设置sprite子图像索引
                CT_InterfaceRepaint(); //请求重绘
            }
            else
            {
                cprint("ERROR 206 : The sprite subimage index is greater than the number of subimage. SubimageIndex : " + String(index)); //输出错误
            }
        }
        else
        {
            cprint("ERROR 209 : The sprite is null. SpriteIndex : " + String(si));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 索引Sprite变量赋值 数字
//--------------------------------------------------------------------
function ispritenum_set(si,i,n)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            CT_TaskSetNum(si,i,n); //sprite程序数字变量赋值
        }
        else
        {
            cprint("ERROR 209 : The sprite is null. SpriteIndex : " + String(si));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 索引Sprite变量赋值 字符串
//--------------------------------------------------------------------
function ispritestr_set(si,i,s)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            CT_TaskSetStr(si,i,s); //sprite程序字符串变量赋值
        }
        else
        {
            cprint("ERROR 209 : The sprite is null. SpriteIndex : " + String(si));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 索引Sprite变量 数字
//--------------------------------------------------------------------
function ispritenum(si,i)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            var var_n = CT_TaskNum(si,i); //sprite程序数字变量值
            return var_n; //返回sprite程序数字变量值
        }
        else
        {
            cprint("ERROR 209 : The sprite is null. SpriteIndex : " + String(si));
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 索引Sprite变量 字符串
//--------------------------------------------------------------------
function ispritestr(si,i)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CT_ContainerSprite[si] != null) //如果指定索引的sprite不为空
        {
            var var_s = CT_TaskStr(si,i); //sprite程序字符串变量值
            return var_s; //返回sprite程序字符串变量值
        }
        else
        {
            cprint("ERROR 209 : The sprite is null. SpriteIndex : " + String(si));
        }
    }
    return "";
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 销毁所有Sprite
//--------------------------------------------------------------------
function sprite_destroy_all(sprite)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var id = sprite.id; //sprite id
        if(sprite.type === -2) //如果对象是sprite
        {
            var i;
            for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
            {
                if(CT_ContainerSprite[i] != null) //如果当前sprite不为空
                {
                    var spr_id = CT_ContainerSprite[i][0]; //当前sprite id
                    if(spr_id === id) //如果当前sprite id等于sprite id
                    {
                        CT_ContainerSprite[i] = null; //清空当前sprite
                        CT_TaskDestroy(i); //销毁sprite程序
                        CT_InterfaceRepaint(); //请求重绘
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置所有Sprite位置x
//--------------------------------------------------------------------
function sprite_all_set_x(sprite,x)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var id = sprite.id; //sprite id
        if(sprite.type === -2) //如果对象是sprite
        {
            var i;
            for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
            {
                if(CT_ContainerSprite[i] != null) //如果当前sprite不为空
                {
                    var spr_id = CT_ContainerSprite[i][0]; //当前sprite id
                    if(spr_id === id) //如果当前sprite id等于sprite id
                    {
                        CT_ContainerSprite[i][2] = x; //设置当前sprite位置x
                        CT_InterfaceRepaint(); //请求重绘
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置所有Sprite位置y
//--------------------------------------------------------------------
function sprite_all_set_y(sprite,y)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var id = sprite.id; //sprite id
        if(sprite.type === -2) //如果对象是sprite
        {
            var i;
            for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
            {
                if(CT_ContainerSprite[i] != null) //如果当前sprite不为空
                {
                    var spr_id = CT_ContainerSprite[i][0]; //当前sprite id
                    if(spr_id === id) //如果当前sprite id等于sprite id
                    {
                        CT_ContainerSprite[i][3] = y; //设置当前sprite位置y
                        CT_InterfaceRepaint(); //请求重绘
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置所有Sprite子图像
//--------------------------------------------------------------------
function sprite_all_set_subimg(sprite,index)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var id = sprite.id; //sprite id
        if(sprite.type === -2) //如果对象是sprite
        {
            var i;
            for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
            {
                if(CT_ContainerSprite[i] != null) //如果当前sprite不为空
                {
                    var spr_id = CT_ContainerSprite[i][0]; //当前sprite id
                    if(spr_id === id) //如果当前sprite id等于sprite id
                    {
                        var spr_subnum = CT_ContainerSprite[i][6]; //当前sprite子图像数量
                        if(index <= spr_subnum - 1) //如果sprite子图像索引小于sprite子图像数量-1
                        {
                            CT_ContainerSprite[i][5] = index; //设置sprite子图像索引
                            CT_InterfaceRepaint(); //请求重绘
                        }
                        else
                        {
                           cprint("ERROR 206 : The sprite subimage index is greater than the number of subimage. SubimageIndex : " + String(index)); //输出错误
                        }
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 所有Sprite变量赋值 数字
//--------------------------------------------------------------------
function spritenum_all_set(sprite,vi,n)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var id = sprite.id; //sprite id
        if(sprite.type === -2) //如果对象是sprite
        {
            var i;
            for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
            {
               if(CT_ContainerSprite[i] != null) //如果当前sprite不为空
                {
                    var spr_id = CT_ContainerSprite[i][0]; //当前sprite id
                    if(spr_id === id) //如果当前sprite id等于sprite id
                    {
                        CT_TaskSetNum(i,vi,n); //sprite程序数字变量赋值
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 所有Sprite变量赋值 字符串
//--------------------------------------------------------------------
function spritestr_all_set(sprite,vi,s)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        var id = sprite.id; //sprite id
        if(sprite.type === -2) //如果对象是sprite
        {
            var i;
            for(i=0;i<CT_ContainerSpriteIndex;i++) //遍历sprite容器
            {
                if(CT_ContainerSprite[i] != null) //如果当前sprite不为空
                {
                    var spr_id = CT_ContainerSprite[i][0]; //当前sprite id
                    if(spr_id === id) //如果当前sprite id等于sprite id
                    {
                        CT_TaskSetStr(i,vi,s); //sprite程序字符串变量赋值
                    }
                }
            }
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 新建定时器
//--------------------------------------------------------------------
function timer_set(timer,time)
{
    var i;
    for(i=0;i<CT_ContainerTimerIndex;i++) //遍历定时器容器
    {
        var timer_name = CT_ContainerTimer[i][0]; //当前定时器名称
        if(timer_name === timer) //如果当前定时器名称等于定时器名称
        {
            cprint("ERROR 20 : The timer have been created : " + timer);
            return; //中断
        }
    }
    if(time >= 0.017) //如果定时器时间大于等于0.017
    {
        if(CT_ContainerTimerIndex > 0) //如果定时器容器长度大于0
        {
            var i2;
            for(i2=0;i2<CT_ContainerTimerIndex;i2++) //遍历定时器容器
            {
                if(CT_ContainerTimer[i2] == null) //如果当前定时器为空
                {
                    var time_frame = parseInt(time * 60); //时间帧
                    CT_ContainerTimer[i2] = [timer,time_frame,time_frame,0,0]; //将定时器存入定时器容器
                    return; //中断
                }
            }
            var time_frame = parseInt(time * 60); //时间帧
            CT_ContainerTimer[CT_ContainerTimerIndex] = [timer,time_frame,time_frame,0,0]; //将定时器存入定时器容器
            CT_ContainerTimerIndex ++; //定时器索引 +1
        }
        else
        {
            var time_frame = parseInt(time * 60); //时间帧
            CT_ContainerTimer[CT_ContainerTimerIndex] = [timer,time_frame,time_frame,0,0]; //将定时器存入定时器容器
            CT_ContainerTimerIndex ++; //定时器索引 +1
        }
    }
    else
    {
        cprint("ERROR 13 : The timer duration than the minimum. Time : " + String(time));
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 清除定时器
//--------------------------------------------------------------------
function timer_clear(timer)
{
    var i;
    for(i=0;i<CT_ContainerTimerIndex;i++) //遍历定时器容器
    {
        var timer_name = CT_ContainerTimer[i][0]; //当前定时器名称
        if(timer_name === timer) //如果当前定时器名称等于定时器名称
        {
            CT_ContainerTimer[i] = null; //清除指定定时器
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 运行定时器
//--------------------------------------------------------------------
function timer_run(timer)
{
    var i;
    for(i=0;i<CT_ContainerTimerIndex;i++) //遍历定时器容器
    {
        if(CT_ContainerTimer[i] != null) //如果当前定时器不为空
        {
            var timer_name = CT_ContainerTimer[i][0]; //当前定时器名称
            if(timer_name === timer) //如果当前定时器名称等于定时器名称
            {
                CT_ContainerTimer[i][3] = 1; //运行指定定时器
                return; //中断
            }
        }
    }
    cprint("ERROR 14 : Timer invalid : " + timer);
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 停止定时器
//--------------------------------------------------------------------
function timer_stop(timer)
{
    var i;
    for(i=0;i<CT_ContainerTimerIndex;i++) //遍历定时器容器
    {
        if(CT_ContainerTimer[i] != null) //如果当前定时器不为空
        {
            var timer_name = CT_ContainerTimer[i][0]; //当前定时器名称
            if(timer_name === timer) //如果当前定时器名称等于定时器名称
            {
                var timer_duration = CT_ContainerTimer[i][2]; //定时器时长
                CT_ContainerTimer[i][1] = timer_duration; //重置定时器
                CT_ContainerTimer[i][3] = 0; //停止指定定时器
                return; //中断
            }
        }
    }
    cprint("ERROR 14 : Timer invalid : " + timer);
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 暂停定时器
//--------------------------------------------------------------------
function timer_pause(timer)
{
    var i;
    for(i=0;i<CT_ContainerTimerIndex;i++) //遍历定时器容器
    {
        if(CT_ContainerTimer[i] != null) //如果指定定时器不为空
        {
            var timer_name = CT_ContainerTimer[i][0]; //当前定时器名称
            if(timer_name === timer) //如果当前定时器名称等于定时器名称
            {
                CT_ContainerTimer[i][3] = 0; //停止指定定时器
                return; //中断
            }
        }
    }
    cprint("ERROR 14 : Timer invalid : " + timer);
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 检查定时器是否结束
//--------------------------------------------------------------------
function timer_end(timer)
{
    var i;
    for(i=0;i<CT_ContainerTimerIndex;i++) //遍历定时器容器
    {
        if(CT_ContainerTimer[i] != null) //如果指定定时器不为空
        {
            var timer_name = CT_ContainerTimer[i][0]; //当前定时器名称
            if(timer_name === timer) //如果当前定时器名称等于定时器名称
            {
                if(CT_ContainerTimer[i][3] === 2) //如果指定定时器结束
                {
                    return 1;
                }
                return 0;
            }
        }
    }
    cprint("ERROR 14 : Timer invalid : " + timer);
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 新建全局定时器
//--------------------------------------------------------------------
function globaltimer_set(timer,time)
{
    var i;
    for(i=0;i<CT_ContainerGlobalTimerIndex;i++) //遍历全局定时器容器
    {
        var timer_name = CT_ContainerGlobalTimer[i][0]; //当前全局定时器名称
        if(timer_name === timer) //如果当前全局定时器名称等于全局定时器名称
        {
            cprint("ERROR 20 : The timer have been created : " + timer);
            return; //中断
        }
    }
    if(time >= 0.017) //如果全局定时器时间大于等于0.017
    {
        if(CT_ContainerGlobalTimerIndex > 0) //如果全局定时器容器长度大于0
        {
            var i2;
            for(i2=0;i2<CT_ContainerGlobalTimerIndex;i2++) //遍历全局定时器容器
            {
                if(CT_ContainerGlobalTimer[i2] == null) //如果当前全局定时器为空
                {
                    var time_frame = parseInt(time * 60); //时间帧
                    CT_ContainerGlobalTimer[i2] = [timer,time_frame,time_frame,0,0]; //将全局定时器存入全局定时器容器
                    return; //中断
                }
            }
            var time_frame = parseInt(time * 60); //时间帧
            CT_ContainerGlobalTimer[CT_ContainerGlobalTimerIndex] = [timer,time_frame,time_frame,0,0]; //将全局定时器存入全局定时器容器
            CT_ContainerGlobalTimerIndex ++; //全局定时器索引 +1
        }
        else
        {
            var time_frame = parseInt(time * 60); //时间帧
            CT_ContainerGlobalTimer[CT_ContainerGlobalTimerIndex] = [timer,time_frame,time_frame,0,0]; //将全局定时器存入全局定时器容器
            CT_ContainerGlobalTimerIndex ++; //全局定时器索引 +1
        }
    }
    else
    {
        cprint("ERROR 13 : The timer duration than the minimum. Time : " + String(time));
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 清除全局定时器
//--------------------------------------------------------------------
function globaltimer_clear(timer)
{
    var i;
    for(i=0;i<CT_ContainerGlobalTimerIndex;i++) //遍历全局定时器容器
    {
        var timer_name = CT_ContainerGlobalTimer[i][0]; //当前全局定时器名称
        if(timer_name === timer) //如果当前全局定时器名称等于全局定时器名称
        {
            CT_ContainerGlobalTimer[i] = null; //清除指定全局定时器
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 运行全局定时器
//--------------------------------------------------------------------
function globaltimer_run(timer)
{
    var i;
    for(i=0;i<CT_ContainerGlobalTimerIndex;i++) //遍历全局定时器容器
    {
        if(CT_ContainerGlobalTimer[i] != null) //如果当前全局定时器不为空
        {
            var timer_name = CT_ContainerGlobalTimer[i][0]; //当前全局定时器名称
            if(timer_name === timer) //如果当前全局定时器名称等于全局定时器名称
            {
                CT_ContainerGlobalTimer[i][3] = 1; //运行指定全局定时器
                return; //中断
            }
        }
    }
    cprint("ERROR 14 : Timer invalid : " + timer);
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 停止全局定时器
//--------------------------------------------------------------------
function globaltimer_stop(timer)
{
    var i;
    for(i=0;i<CT_ContainerGlobalTimerIndex;i++) //遍历全局定时器容器
    {
        if(CT_ContainerGlobalTimer[i] != null) //如果当前全局定时器不为空
        {
            var timer_name = CT_ContainerGlobalTimer[i][0]; //当前全局定时器名称
            if(timer_name === timer) //如果当前全局定时器名称等于全局定时器名称
            {
                var timer_duration = CT_ContainerGlobalTimer[i][2]; //全局定时器时长
                CT_ContainerGlobalTimer[i][1] = timer_duration; //重置全局定时器
                CT_ContainerGlobalTimer[i][3] = 0; //停止指定全局定时器
                return; //中断
            }
        }
    }
    cprint("ERROR 14 : Timer invalid : " + timer);
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 暂停全局定时器
//--------------------------------------------------------------------
function globaltimer_pause(timer)
{
    var i;
    for(i=0;i<CT_ContainerGlobalTimerIndex;i++) //遍历全局定时器容器
    {
        if(CT_ContainerGlobalTimer[i] != null) //如果指定全局定时器不为空
        {
            var timer_name = CT_ContainerGlobalTimer[i][0]; //当前全局定时器名称
            if(timer_name === timer) //如果当前全局定时器名称等于全局定时器名称
            {
                CT_ContainerGlobalTimer[i][3] = 0; //停止指定全局定时器
                return; //中断
            }
        }
    }
    cprint("ERROR 14 : Timer invalid : " + timer);
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 检查全局定时器是否结束
//--------------------------------------------------------------------
function globaltimer_end(timer)
{
    var i;
    for(i=0;i<CT_ContainerGlobalTimerIndex;i++) //遍历全局定时器容器
    {
        if(CT_ContainerGlobalTimer[i] != null) //如果指定全局定时器不为空
        {
            var timer_name = CT_ContainerGlobalTimer[i][0]; //当前全局定时器名称
            if(timer_name === timer) //如果当前全局定时器名称等于全局定时器名称
            {
                if(CT_ContainerGlobalTimer[i][3] === 2) //如果指定全局定时器结束
                {
                    return 1;
                }
                return 0;
            }
        }
    }
    cprint("ERROR 14 : Timer invalid : " + timer);
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 窗口对象
//--------------------------------------------------------------------
function CTwindow()
{
    this.x = 0; //窗口位置x
    this.y = 0; //窗口位置y
    this.width = 300; //窗口宽度
    this.height = 200; //窗口高度
    this.color_background = color(228,226,211,255); //窗口背景颜色
    this.color_borderUp = color(170,168,153,255); //窗口上边框颜色
    this.color_borderDown = color(170,168,153,255); //窗口下边框颜色
    this.color_borderLeft = color(170,168,153,255); //窗口左边框颜色
    this.color_borderRight = color(170,168,153,255); //窗口右边框颜色
    this.image = -1; //窗口背景图像
    this.layer = 0; //窗口层
//--------------------------------------------------------------------
    this.type = 0; //ui对象类型
    this.index = -1; //窗口索引
    this.id = CT_UIGetId(); //ID
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按钮
//--------------------------------------------------------------------
function CTbutton()
{
    this.x = 0; //按钮位置x
    this.y = 0; //按钮位置y
    this.width = 60; //按钮宽度
    this.height = 30; //按钮高度
    this.color_background = color(203,201,183,255); //按钮背景颜色
    this.color_borderUp = color(181,179,162,255); //按钮上边框颜色
    this.color_borderDown = color(181,179,162,255); //按钮下边框颜色
    this.color_borderLeft = color(181,179,162,255); //按钮左边框颜色
    this.color_borderRight = color(181,179,162,255); //按钮右边框颜色
    this.background = -1; //按钮背景图像
    this.color_text = color(0,0,0,255); //按钮文本颜色
    this.text = "Button"; //按钮显示文本
//--------------------------------------------------------------------
    this.index = -1; //ui对象索引
    this.type = 1; //ui对象类型
    this.id = CT_UIGetId(); //ID
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 文本
//--------------------------------------------------------------------
function CTtext()
{
    this.x = 0; //文本位置x
    this.y = 0; //文本位置y
    this.color_text = color(0,0,0,255); //文本颜色
    this.text = "Text"; //显示文本
    this.size = 16; //字体大小
//--------------------------------------------------------------------
    this.index = -1; //ui对象索引
    this.type = 2; //ui对象类型
    this.id = CT_UIGetId(); //ID
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 复选框
//--------------------------------------------------------------------
function CTcheckbox()
{
    this.x = 0; //复选框位置x
    this.y = 0; //复选框位置y
    this.color_border = color(181,179,162,255); //复选框边框颜色
    this.color_background = color(255,255,255,255); //复选框背景颜色
    this.color_widget = color(34,172,56,255); //复选框部件颜色
    this.status = 0; //复选框状态
//--------------------------------------------------------------------
    this.index = -1; //ui对象索引
    this.type = 3; //ui对象类型
    this.id = CT_UIGetId(); //ID
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 单选框
//--------------------------------------------------------------------
function CTradio()
{
    this.x = 0; //单选框位置x
    this.y = 0; //单选框位置y
    this.color_background = color(255,255,255,255); //单选框背景颜色
    this.color_border = color(181,179,162,255); //单选框边框颜色
    this.color_widget = color(34,172,56,255); //单选框部件颜色
    this.group = 0; //单选框组
//--------------------------------------------------------------------
    this.index = -1; //ui对象索引
    this.type = 4; //ui对象类型
    this.id = CT_UIGetId(); //ID
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 进度条
//--------------------------------------------------------------------
function CTprogressbar()
{
    this.x = 0; //进度条位置x
    this.y = 0; //进度条位置y
    this.width = 80; //进度条宽度
    this.height = 30; //进度条高度
    this.color_background = color(255,255,255,255); //进度条背景颜色
    this.color_borderUp = color(181,179,162,255); //进度条上边框颜色
    this.color_borderDown = color(181,179,162,255); //进度条下边框颜色
    this.color_borderLeft = color(181,179,162,255); //进度条左边框颜色
    this.color_borderRight = color(181,179,162,255); //进度条右边框颜色
    this.color_widget = color(34,172,56,255); //进度条部件颜色
    this.background = -1; //进度条背景图片
    this.value = 0; //进度条默认值
    this.maxvalue = 10; //进度条最大值
//--------------------------------------------------------------------
    this.index = -1; //ui对象索引
    this.type = 5; //ui对象类型
    this.id = CT_UIGetId(); //ID
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 文本框
//--------------------------------------------------------------------
function CTtextbox()
{
    this.x = 0; //文本框位置x
    this.y = 0; //文本框位置y
    this.width = 250; //文本框宽度
    this.height = 30; //文本框高度
    this.color_background = color(255,255,255,255); //文本框背景颜色
    this.color_borderUp = color(181,179,162,255); //文本框上边框颜色
    this.color_borderDown = color(181,179,162,255); //文本框下边框颜色
    this.color_borderLeft = color(181,179,162,255); //文本框左边框颜色
    this.color_borderRight = color(181,179,162,255); //文本框右边框颜色
    this.color_text = "#000000"; //文本框字体颜色
    this.background = -1; //文本框背景图片
    this.password = 0; //密码文本框
    this.number = 0; //数字文本框
    this.max = 20; //文本框最大字符数
    this.readonly = 0; //只读
    this.subbox = 0; //子文本框
    this.name = "Title"; //子文本框名称
//--------------------------------------------------------------------
    this.index = -1; //ui对象索引
    this.type = 6; //ui对象类型
    this.id = CT_UIGetId(); //ID
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 创建窗口
//--------------------------------------------------------------------
function CTwindow_create(CTwindow)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTwindow.type === 0) //如果对象类型是窗口
        {
            var id = CTwindow.id; //窗口对象ID
            var i;
            for(i=0;i<CT_ContainerWindowIndex;i++) //遍历窗口容器
            {
                if(CT_ContainerWindow[i] != null) //如果当前窗口不为空
                {
                    var win_id = CT_ContainerWindow[i][0]; //当前窗口ID
                    if(win_id === id) //如果当前窗口ID等于窗口ID
                    {
                        cprint("ERROR 100 : Window have been created. WindowID : " + String(id)); //输出错误
                        return; //中断
                    }
                }
            }
            var x = CTwindow.x; //窗口对象位置x
            var y = CTwindow.y; //窗口对象位置y
            var w = CTwindow.width; //窗口对象宽度
            var h = CTwindow.height; //窗口对象高度
            var l = CTwindow.layer; //窗口对象层
            var cbg = CTwindow.color_background; //窗口对象背景颜色
            var cbu = CTwindow.color_borderUp; //窗口对象上边框颜色
            var cbd = CTwindow.color_borderDown; //窗口对象下边框颜色
            var cbl = CTwindow.color_borderLeft; //窗口对象左边框颜色
            var cbr = CTwindow.color_borderRight; //窗口对象右边框颜色
            var bi = CTwindow.image; //窗口对象背景图像
            if(w > 0 && h > 0) //如果窗口对象大小正确
            {
                if(CT_ContainerWindowIndex > 0) //如果窗口容器长度大于0
                {
                    var i2;
                    for(i2=0;i2<CT_ContainerWindowIndex;i2++) //遍历窗口容器
                    {
                        if(CT_ContainerWindow[i2] == null) //如果当前窗口为空
                        {
                            CT_ContainerWindow[i2] = [id,l,x,y,w,h,cbg,cbu,cbd,cbl,cbr,bi]; //将窗口数据写入窗口容器
                            CTwindow.index = i2; //窗口对象索引
                            CT_InterfaceRepaint(); //请求重绘
                            return; //中断
                        }
                    }
                    CT_ContainerWindow[CT_ContainerWindowIndex] = [id,l,x,y,w,h,cbg,cbu,cbd,cbl,cbr,bi]; //将窗口数据写入窗口容器
                    CTwindow.index = CT_ContainerWindowIndex; //窗口对象索引
                    CT_ContainerWindowIndex ++; //窗口容器索引 +1
                    CT_InterfaceRepaint(); //请求重绘
                }
                else
                {
                    CT_ContainerWindow[CT_ContainerWindowIndex] = [id,l,x,y,w,h,cbg,cbu,cbd,cbl,cbr,bi]; //将窗口数据写入窗口容器
                    CTwindow.index = CT_ContainerWindowIndex; //窗口对象索引
                    CT_ContainerWindowIndex ++; //窗口容器索引 +1
                    CT_InterfaceRepaint(); //请求重绘
                }
            }
            else
            {
                cprint("ERROR 101 : Unable to create window. WindowID : " + String(id)); //输出错误
            }
        }
        else
        {
            cprint("ERROR 113 : Not is window object. ObjectID : " + String(CTwindow.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 销毁窗口
//--------------------------------------------------------------------
function CTwindow_destroy(CTwindow)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTwindow.type === 0) //如果对象类型是窗口
        {
            var win_index = CTwindow.index; //窗口对象索引
            CT_ContainerWindow[CTwindow.index] = null; //清空窗口对象容器中窗口对象的数据
            var i;
            for(i=0;i<CT_ContainerUIIndex;i++) //遍历UI对象容器
            {
                if(CT_ContainerUI[i] != null) //如果当前UI对象不为空
                {
                    var ui_win_index = CT_ContainerUI[i][1]; //当前UI对象对应窗口的索引
                    if(ui_win_index === win_index) //如果当前UI对象对应窗口的索引等于窗口对象索引
                    {
                        CT_ContainerUI[i] = null; //清空UI对象容器中UI对象的数据
                    }
                }
            }
            CT_InterfaceRepaint(); //请求重绘
        }
        else
        {
            cprint("ERROR 113 : Not is window object. ObjectID : " + String(CTwindow.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置窗口位置x
//--------------------------------------------------------------------
function CTwindow_set_x(CTwindow,x)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTwindow.type === 0) //如果UI对象是窗口
        {
            if(CT_ContainerWindow[CTwindow.index] != null) //如果UI容器中指定窗口对象数据不为空
            {
                CT_ContainerWindow[CTwindow.index][2] = x; //设置窗口位置x
                CT_InterfaceRepaint(); //请求重绘
            }
        }
        else
        {
            cprint("ERROR 113 : Not is window object. ObjectID : " + String(CTwindow.id));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置窗口位置y
//--------------------------------------------------------------------
function CTwindow_set_y(CTwindow,y)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTwindow.type === 0) //如果UI对象是窗口
        {
            if(CT_ContainerWindow[CTwindow.index] != null) //如果UI容器中指定窗口对象数据不为空
            {
                CT_ContainerWindow[CTwindow.index][3] = y; //设置窗口位置x
                CT_InterfaceRepaint(); //请求重绘
            }
        }
        else
        {
            cprint("ERROR 113 : Not is window object. ObjectID : " + String(CTwindow.id));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置窗口宽度
//--------------------------------------------------------------------
function CTwindow_set_width(CTwindow,w)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTwindow.type === 0) //如果UI对象是窗口
        {
            if(CT_ContainerWindow[CTwindow.index] != null) //如果UI容器中指定窗口对象数据不为空
            {
                CT_ContainerWindow[CTwindow.index][4] = w; //设置窗口位置x
                CT_InterfaceRepaint(); //请求重绘
            }
        }
        else
        {
            cprint("ERROR 113 : Not is window object. ObjectID : " + String(CTwindow.id));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置窗口高度
//--------------------------------------------------------------------
function CTwindow_set_height(CTwindow,h)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTwindow.type === 0) //如果UI对象是窗口
        {
            if(CT_ContainerWindow[CTwindow.index] != null) //如果UI容器中指定窗口对象数据不为空
            {
                CT_ContainerWindow[CTwindow.index][5] = h; //设置窗口位置x
                CT_InterfaceRepaint(); //请求重绘
            }
        }
        else
        {
            cprint("ERROR 113 : Not is window object. ObjectID : " + String(CTwindow.id));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置窗口背景图片
//--------------------------------------------------------------------
function CTwindow_set_image(CTwindow,i)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTwindow.type === 0) //如果UI对象是窗口
        {
            if(CT_ContainerWindow[CTwindow.index] != null) //如果UI容器中指定窗口对象数据不为空
           {
                CT_ContainerWindow[CTwindow.index][11] = i; //设置窗口位置x
                CT_InterfaceRepaint(); //请求重绘
            }
        }
        else
        {
            cprint("ERROR 113 : Not is window object. ObjectID : " + String(CTwindow.id));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置窗口颜色
//--------------------------------------------------------------------
function CTwindow_set_color(CTwindow,prop,col)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTwindow.type === 0) //如果UI对象是窗口
        {
            if(CT_ContainerWindow[CTwindow.index] != null) //如果UI容器中指定窗口对象数据不为空
            {
                if(prop === "back") //如果属性是背景
                {
                    CT_ContainerWindow[CTwindow.index][6] = col; //设置窗口背景颜色
                    CT_InterfaceRepaint(); //请求重绘
                }
                if(prop === "up") //如果属性是上边框
                {
                    CT_ContainerWindow[CTwindow.index][7] = col; //设置窗口上边框颜色
                    CT_InterfaceRepaint(); //请求重绘
                }
                if(prop === "down") //如果属性是下边框
                {
                    CT_ContainerWindow[CTwindow.index][8] = col; //设置窗口下边框颜色
                    CT_InterfaceRepaint(); //请求重绘
                }
                if(prop === "left") //如果属性是左边框
                {
                    CT_ContainerWindow[CTwindow.index][9] = col; //设置窗口左边框颜色
                    CT_InterfaceRepaint(); //请求重绘
                }
                if(prop === "right") //如果属性是右边框
                {
                    CT_ContainerWindow[CTwindow.index][10] = col; //设置窗口右边框颜色
                    CT_InterfaceRepaint(); //请求重绘
                }
            }
        }
        else
        {
            cprint("ERROR 113 : Not is window object. ObjectID : " + String(CTwindow.id));
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 创建UI对象
//--------------------------------------------------------------------
function CTui_create(CTwindow,CTui)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTwindow.type === 0) //如果对象类型是窗口
        {
            var id = CTui.id; //UI对象ID
            var i;
            for(i=0;i<CT_ContainerUIIndex;i++) //遍历UI容器
            {
                if(CT_ContainerUI[i] != null) //如果当前UI对象不为空
                {
                    var ui_id = CT_ContainerUI[i][0]; //当前UI对象的ID
                    if(ui_id === id) //如果当前UI对象的ID等于UI对象ID
                    {
                        cprint("ERROR 102 : The UI object has been created. UIobjectID : " + String(id)); //输出错误
                        return; //中断
                    }
                }
            }
            var win_index = CTwindow.index; //窗口对象索引
            var type = CTui.type; //UI对象类型
            if(type === 1) //如果UI是按钮
            {
                var x = CTui.x; //按钮位置x
                var y = CTui.y; //按钮位置y
                var w = CTui.width; //按钮宽度
                var h = CTui.height; //按钮高度
                var cbg = CTui.color_background; //按钮背景颜色
                var cbu = CTui.color_borderUp; //按钮上边框颜色
                var cbd = CTui.color_borderDown; //按钮下边框颜色
                var cbl = CTui.color_borderLeft; //按钮左边框颜色
                var cbr = CTui.color_borderRight; //按钮右边框颜色
                var ct = CTui.color_text; //按钮文本颜色
                var bi = CTui.background; //按钮背景图片
                var text = CTui.text; //按钮显示文本
                var text_w = string_pxwidth(text,16); //按钮显示文本像素宽度
                var text_h = 16; //按钮显示文本高度
                if(w > 0 && h > 0) //如果按钮大小正确
                {
                    if(CT_ContainerUIIndex > 0) //如果UI容器长度大于0
                    {
                        var i2;
                        for(i2=0;i2<CT_ContainerUIIndex;i2++) //遍历UI容器
                        {
                            if(CT_ContainerUI[i2] == null) //如果当前UI为空
                            {
                                CT_ContainerUI[i2] = [id,win_index,type,x,y,w,h,cbg,cbu,cbd,cbl,cbr,ct,bi,text,text_w,text_h,0,0,0,0]; //将UI数据写入UI容器
                                CTui.index = i2; //UI对象索引
                                CT_InterfaceRepaint(); //请求重绘
                                return; //中断
                            }
                        }
                        CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,cbg,cbu,cbd,cbl,cbr,ct,bi,text,text_w,text_h,0,0,0,0]; //将UI数据写入UI容器
                        CTui.index = CT_ContainerUIIndex; //UI对象索引
                        CT_ContainerUIIndex ++; //UI容器索引 +1
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    else
                    {
                        CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,cbg,cbu,cbd,cbl,cbr,ct,bi,text,text_w,text_h,0,0,0,0]; //将UI数据写入UI容器
                        CTui.index = CT_ContainerUIIndex; //UI对象索引
                        CT_ContainerUIIndex ++; //UI容器索引 +1
                        CT_InterfaceRepaint(); //请求重绘
                    }
                }
                else
                {
                    cprint("ERROR 103 : Unable to create button. UIobjectID : " + String(id)); //输出错误
                }
            }
            if(type === 2) //如果UI是文本
            {
                var x = CTui.x; //文本位置x
                var y = CTui.y; //文本位置y
                var ct = CTui.color_text; //文本颜色
                var text = CTui.text; //文本
                var ts = CTui.size; //文本字体大小
                var id = CTui.id; //文本对象ID
                if(CT_ContainerUI.length > 0) //如果UI容器长度大于0
                {
                    var i2;
                    for(i2=0;i2<CT_ContainerUIIndex;i2++) //遍历UI容器
                    {
                        if(CT_ContainerUI[i2] == null) //如果当前UI为空
                        {
                            CT_ContainerUI[i2] = [id,win_index,type,x,y,ct,text,ts]; //将UI数据写入UI容器
                            CTui.index = i2; //UI对象索引
                            CT_InterfaceRepaint(); //请求重绘
                            return; //中断
                        }
                    }
                    CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,ct,text,ts]; //将UI数据写入UI容器
                    CTui.index = CT_ContainerUIIndex; //UI对象索引
                    CT_ContainerUIIndex ++; //UI容器索引 +1
                    CT_InterfaceRepaint(); //请求重绘
                }
                else
                {
                    CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,ct,text,ts]; //将UI数据写入UI容器
                    CTui.index = CT_ContainerUIIndex; //UI对象索引
                    CT_ContainerUIIndex ++; //UI容器索引 +1
                    CT_InterfaceRepaint(); //请求重绘
                }
            }
            if(type === 3) //如果UI是复选框
            {
                var x = CTui.x; //复选框位置x
                var y = CTui.y; //复选框位置y
                var w = 16; //复选框宽度
                var h = 16; //复选框高度
                var cbg = CTui.color_background; //复选框背景颜色
                var cb = CTui.color_border; //复选框边框颜色
                var cw = CTui.color_widget; //复选框部件颜色
                var id = CTui.id; //复选框对象ID
                var status = CTui.status; //复选框状态
                if(status === 0 || status === 1) //如果复选框状态正确
                {
                    if(CT_ContainerUIIndex > 0) //如果UI容器长度大于0
                    {
                        var i2;
                        for(i2=0;i2<CT_ContainerUIIndex;i2++) //遍历UI容器
                        {
                            if(CT_ContainerUI[i2] == null) //如果当前UI为空
                            {
                                CT_ContainerUI[i2] = [id,win_index,type,x,y,w,h,cbg,cb,cw,status]; //将UI数据写入UI容器
                                CTui.index = i2; //UI对象索引
                                CT_InterfaceRepaint(); //请求重绘
                                return; //中断
                            }
                        }
                        CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,cbg,cb,cw,status]; //将UI数据写入UI容器
                        CTui.index = CT_ContainerUIIndex; //UI对象索引
                        CT_ContainerUIIndex ++; //UI容器索引 +1
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    else
                    {
                        CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,cbg,cb,cw,status]; //将UI数据写入UI容器
                        CTui.index = CT_ContainerUIIndex; //UI对象索引
                        CT_ContainerUIIndex ++; //UI容器索引 +1
                        CT_InterfaceRepaint(); //请求重绘
                    }
                }
                else
                {
                    cprint("ERROR 121 : Checkbox state error. UIobjectID : " + String(id));
                }
            }
            if(type === 4) //如果UI是单选框
            {
                var x = CTui.x; //单选框位置x
                var y = CTui.y; //单选框位置y
                var w = 16; //单选框宽度
                var h = 16; //单选框高度
                var cbg = CTui.color_background; //单选框背景颜色
                var cb = CTui.color_border; //单选框边框颜色
                var cw = CTui.color_widget; //单选框部件颜色
                var g = CTui.group; //单选框组
                var id = CTui.id; //单选框对象ID
                if(g >= 0) //如果单选框组有效
                {
                    if(CT_ContainerUI.length > 0) //如果UI容器长度大于0
                    {
                        var i2;
                        for(i2=0;i2<CT_ContainerUIIndex;i2++) //遍历UI容器
                        {
                            if(CT_ContainerUI[i2] == null) //如果当前UI为空
                            {
                                CT_ContainerUI[i2] = [id,win_index,type,x,y,w,h,cbg,cb,cw,g,0]; //将UI数据写入UI容器
                                CTui.index = i2; //UI对象索引
                                CT_InterfaceRepaint(); //请求重绘
                                return; //中断
                            }
                       }
                       CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,cbg,cb,cw,g,0]; //将UI数据写入UI容器
                       CTui.index = CT_ContainerUIIndex; //UI对象索引
                       CT_ContainerUIIndex ++; //UI容器索引 +1
                       CT_InterfaceRepaint(); //请求重绘
                    }
                    else
                    {
                        CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,cbg,cb,cw,g,0]; //将UI数据写入UI容器
                        CTui.index = CT_ContainerUIIndex; //UI对象索引
                        CT_ContainerUIIndex ++; //UI容器索引 +1
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    var i3;
                    var radio_first = -1; //单选框组中的第一个单选框索引
                    var radio_sel = 0; //单选框组中的选择的单选框索引
                    for(i3=0;i3<CT_ContainerUIIndex;i3++) //遍历UI容器
                    {
                        if(CT_ContainerUI[i3] != null) //如果当前UI对象不为空
                        {
                            var ui_type = CT_ContainerUI[i3][2]; //当前UI类型
                            if(ui_type === 4) //如果当前UI是单选框
                            {
                                var radio_g = CT_ContainerUI[i3][10]; //当前单选框组
                                if(radio_g === g) //如果当前单选框组等于单选框组
                                {
                                    if(radio_first === -1) //如果没有确定单选框组中的第一个单选框索引
                                    {
                                        radio_first = i3; //确定单选框组中的第一个单选框索引
                                    }
                                    var radio_s = CT_ContainerUI[i3][11]; //当前单选框状态
                                    if(radio_s === 1) //如果当前单选框已选择
                                    {
                                        radio_sel = 1; //单选框组中的选择的单选框索引
                                    }
                                }
                            }
                        }
                    }
                    if(radio_sel === 0) //如果没有单选框被选择
                    {
                        CT_ContainerUI[radio_first][11] = 1; //将单选框组中的第一个单选框设置为选择
                    }
                    CT_InterfaceRepaint(); //请求重绘
                }
                else
                {
                    cprint("ERROR 106 : Invalid radio group. UIobjectID : " + String(id));
                }
            }
            if(type === 5) //如果UI是进度条
            {
               var x = CTui.x; //进度条位置x
                var y = CTui.y; //进度条位置y
                var w = CTui.width; //进度条宽度
                var h = CTui.height; //进度条高度
                var cbg = CTui.color_background; //进度条背景颜色
                var cbu = CTui.color_borderUp; //进度条上边框颜色
                var cbd = CTui.color_borderDown; //进度条下边框颜色
                var cbl = CTui.color_borderLeft; //进度条左边框颜色
                var cbr = CTui.color_borderRight; //进度条右边框颜色
                var cw = CTui.color_widget; //进度条部件颜色
                var pi = CTui.background; //进度条背景图片
                var val = CTui.value; //进度条默认值
                var maxval = CTui.maxvalue; //进度条最大值
                var id = CTui.id; //进度条对象ID
                if(w > 0 && h > 0) //如果进度条大小正确
                {
                    if(val >= 0 && maxval > 0) //如果进度条值正确
                    {
                        if(val <= maxval) //如果进度条值小于最大值
                        {
                            var w_w = parseInt((w - 8) / maxval * val); //进度条点宽度
                            if(CT_ContainerUIIndex > 0) //如果UI容器长度大于0
                            {
                                var i2;
                                for(i2=0;i2<CT_ContainerUIIndex;i2++) //遍历UI容器
                                {
                                    if(CT_ContainerUI[i2] == null) //如果当前UI为空
                                    {
                                        CT_ContainerUI[i2] = [id,win_index,type,x,y,w,h,cbg,cbu,cbd,cbl,cbr,cw,pi,w_w,val,maxval]; //将UI数据写入UI容器
                                        CTui.index = i2; //UI对象索引
                                        CT_InterfaceRepaint(); //请求重绘
                                        return; //中断
                                    }
                                }
                                CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,cbg,cbu,cbd,cbl,cbr,cw,pi,w_w,val,maxval]; //将UI数据写入UI容器
                                CTui.index = CT_ContainerUIIndex; //UI对象索引
                                CT_ContainerUIIndex ++; //UI容器索引 +1
                                CT_InterfaceRepaint(); //请求重绘
                            }
                            else
                            {
                                CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,cbg,cbu,cbd,cbl,cbr,cw,pi,w_w,val,maxval]; //将UI数据写入UI容器
                                CTui.index = CT_ContainerUIIndex; //UI对象索引
                                CT_ContainerUIIndex ++; //UI容器索引 +1
                                CT_InterfaceRepaint(); //请求重绘
                            }
                        }
                        else
                        {
                            cprint("ERROR 109 : The progressbar value greater than the maximum. UIobjectID : " + String(id));
                        }
                    }
                    else
                    {
                        cprint("ERROR 108 : Progressbar value error. UIobjectID : " + String(id));
                    }
                }
                else
                {
                    cprint("ERROR 107 : Unable to create progressbar. UIobjectID : " + String(id));
                }
            }
            if(type === 6) //如果UI是文本框
            {
                var x = CTui.x; //文本框位置x
                var y = CTui.y; //文本框位置y
                var w = CTui.width; //文本框宽度
                var h = CTui.height; //文本框高度
                var tbg = CTui.color_background; //文本框背景颜色
                var tbu = CTui.color_borderUp; //文本框上边框颜色
                var tbd = CTui.color_borderDown; //文本框下边框颜色
                var tbl = CTui.color_borderLeft; //文本框左边框颜色
                var tbr = CTui.color_borderRight; //文本框右边框颜色
                var tc = CTui.color_text; //文本框字体颜色
                var tb = CTui.background; //文本框背景图片
                var tpass = CTui.password; //密码文本框参数
                var tnumb = CTui.number; //数字文本框参数
                var tmax = CTui.max; //文本框最大字符数
                var readonly = CTui.readonly; //只读参数
                var subbox = CTui.subbox; //子文本框参数
                var name = CTui.name; //子文本框名称
                var id = CTui.id; //文本框id
                if(w > 0 && h > 0) //如果文本框大小正确
                {
                    if(tpass === 0 || tpass === 1) //如果密码文本框参数正确
                    {
                        if(tnumb === 0 || tnumb === 1) //如果数字文本框参数正确
                        {
                            if(tmax > 0) //如果文本框最大字符数大于0
                            {
                                if(CT_ContainerUIIndex > 0) //如果UI容器长度大于0
                                {
                                    var i2;
                                    for(i2=0;i2<CT_ContainerUIIndex;i2++) //遍历UI容器
                                    {
                                        if(CT_ContainerUI[i2] == null) //如果当前UI为空
                                        {
                                            CT_ContainerUI[i2] = [id,win_index,type,x,y,w,h,tbg,tbu,tbd,tbl,tbr,tc,tb,"",tpass,tnumb,tmax,readonly,subbox,name]; //将UI数据写入UI容器
                                            CTui.index = i2; //UI对象索引
                                            CT_InterfaceRepaint(); //请求重绘
                                            return; //中断
                                        }
                                    }
                                    CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,tbg,tbu,tbd,tbl,tbr,tc,tb,"",tpass,tnumb,tmax,readonly,subbox,name]; //将UI数据写入UI容器
                                    CTui.index = CT_ContainerUIIndex; //UI对象索引
                                    CT_ContainerUIIndex ++; //UI容器索引 +1
                                    CT_InterfaceRepaint(); //请求重绘
                                }
                                else
                                {
                                    CT_ContainerUI[CT_ContainerUIIndex] = [id,win_index,type,x,y,w,h,tbg,tbu,tbd,tbl,tbr,tc,tb,"",tpass,tnumb,tmax,readonly,subbox,name]; //将UI数据写入UI容器
                                    CTui.index = CT_ContainerUIIndex; //UI对象索引
                                    CT_ContainerUIIndex ++; //UI容器索引 +1
                                    CT_InterfaceRepaint(); //请求重绘
                                }
                            }
                            else
                            {
                                cprint("ERROR 112 : The textbox cannot be input. UIobjectID : " + String(id));
                            }
                        }
                        else
                        {
                            cprint("ERROR 111 : Textbox type error. UIobjectID : " + String(id));
                        }
                    }
                    else
                    {
                        cprint("ERROR 111 : Textbox type error. UIobjectID : " + String(id));
                    }
                }
                else
                {
                    cprint("ERROR 110 : Unable to create textbox. UIobjectID : " + String(id));
                }
            }
        }
        else
        {
            cprint("ERROR 113 : Not is window object. WindowID : " + String(CTwindow.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 销毁UI
//--------------------------------------------------------------------
function CTui_destroy(CTui)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type > 0) //如果是UI对象
        {
            CT_ContainerUI[CTui.index] = null; //清除UI容器中UI对象的数据
            CT_InterfaceRepaint(); //请求重绘
        }
        else
        {
            cprint("ERROR 120 : Not is UI object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置UI位置x
//--------------------------------------------------------------------
function CTui_set_x(CTui,x)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type >= 1) //如果对象是UI对象
        {
           if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定UI对象的数据不为空
            {
                CT_ContainerUI[CTui.index][3] = x; //设置UI对象位置x
                CT_InterfaceRepaint(); //请求重绘
            }
        }
        else //如果对象不是UI对象
        {
            cprint("ERROR 120 : Not is UI object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置UI位置y
//--------------------------------------------------------------------
function CTui_set_y(CTui,y)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type >= 1) //如果对象是UI对象
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定UI对象的数据不为空
            {
                CT_ContainerUI[CTui.index][4] = y; //设置UI对象位置x
                CT_InterfaceRepaint(); //请求重绘
            }
        }
        else //如果对象不是UI对象
        {
            cprint("ERROR 120 : Not is UI object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置UI宽度
//--------------------------------------------------------------------
function CTui_set_width(CTui,w)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type >= 1) //如果对象是UI对象
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定窗口对象数据不为空
            {
                if(CTui.type === 1 || CTui.type === 6) //如果UI对象是按钮 文本框
                {
                    CT_ContainerUI[CTui.index][5] = w; //设置宽度
                    CT_InterfaceRepaint(); //请求重绘
                }
                if(CTui.type === 5) //如果UI对象是进度条
                {
                    CT_ContainerUI[CTui.index][5] = w; //设置进度条宽度
                    var p_w = CT_ContainerUI[CTui.index][5]; //进度条宽度
                    var val = CT_ContainerUI[CTui.index][15]; //进度条值
                    var p_maxval = CT_ContainerUI[CTui.index][16]; //进度条最大值
                    var p_ww = 0; //进度条部件宽度
                    if(val < p_maxval) //如果设置的值小于最大值
                    {
                        p_ww = parseInt((p_w - 8) / p_maxval * val); //内条宽度
                    }
                    if(val === p_maxval) //如果设置的值等于最大值
                    {
                        p_ww = p_w - 8; //点宽度
                    }
                    CT_ContainerUI[CTui.index][14] = p_ww; //设置部件宽度
                    CT_InterfaceRepaint(); //请求重绘
                }
                if(CTui.type === 2 || CTui.type === 3 || CTui.type === 4) //如果UI对象是文本 复选框 单选框
                {
                    cprint("ERROR 104 : The UI object not have this property. UIobjectID : " + String(CTui.id)); //输出错误
                }
            }
        }
        else //如果对象不是UI对象
        {
            cprint("ERROR 120 : Not is UI object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置UI高度
//--------------------------------------------------------------------
function CTui_set_height(CTui,h)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type >= 1) //如果对象是UI对象
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定窗口对象数据不为空
            {
                if(CTui.type === 1 || CTui.type === 5 || CTui.type === 6) //如果UI对象是按钮 文本框
                {
                    CT_ContainerUI[CTui.index][6] = h; //设置高度
                    CT_InterfaceRepaint(); //请求重绘
                }
                if(CTui.type === 2 || CTui.type === 3 || CTui.type === 4) //如果UI对象是文本 复选框 单选框
                {
                    cprint("ERROR 104 : The UI object not have this property. UIobjectID : " + String(CTui.id)); //输出错误
                }
            }
        }
        else //如果对象不是UI对象
        {
            cprint("ERROR 120 : Not is UI object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置UI图片
//--------------------------------------------------------------------
function CTui_set_image(CTui,img)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type >= 1) //如果对象是UI对象
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定UI对象的数据不为空
            {
               if(CTui.type === 1 || CTui.type === 5 || CTui.type === 6) //如果UI对象是按钮 进度条 文本框
                {
                    CT_ContainerUI[CTui.index][13] = img; //设置背景图片
                    CT_InterfaceRepaint(); //请求重绘
                }
                if(CTui.type === 2 || CTui.type === 3 || CTui.type === 4) //如果UI对象是文本 复选框 单选框
                {
                    cprint("ERROR 105 : The UI object not support background image. UIobjectID : " + String(CTui.id)); //输出错误
                }
            }
        }
        else //如果对象不是UI对象
        {
            cprint("ERROR 120 : Not is UI object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置UI颜色
//--------------------------------------------------------------------
function CTui_set_color(CTui,prop,col)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type >= 1) //如果对象是UI对象
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定UI对象的数据不为空
            {
                if(prop === "back") //如果属性是背景
                {
                    if(CTui.type === 1 || CTui.type === 3 || CTui.type === 4 || CTui.type === 5 || CTui.type === 6) //如果UI对象是按钮 复选框 单选框 进度条 文本框
                    {
                        CT_ContainerUI[CTui.index][7] = col; //设置背景颜色
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    if(CTui.type === 2) //如果UI对象是文本
                    {
                        cprint("ERROR 104 : The UI object not have this property. UIobjectID : " + String(CTui.id)); //输出错误
                    }
                }
                if(prop === "up") //如果属性是上边框
                {
                    if(CTui.type === 1 || CTui.type === 3 || CTui.type === 4 || CTui.type === 5 || CTui.type === 6) //如果UI对象是按钮 复选框 单选框 进度条 文本框
                    {
                        CT_ContainerUI[CTui.index][8] = col; //设置上边框颜色
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    if(CTui.type === 2) //如果UI对象是文本
                    {
                        cprint("ERROR 104 : The UI object not have this property. UIobjectID : " + String(CTui.id)); //输出错误
                    }
                }
                if(prop === "down") //如果属性是下边框
                {
                    if(CTui.type === 1 || CTui.type === 5 || CTui.type === 6) //如果UI对象是按钮 进度条 文本框
                    {
                        CT_ContainerUI[CTui.index][9] = col; //设置下边框颜色
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    if(CTui.type === 3 || CTui.type === 4) //如果UI对象是复选框 单选框
                    {
                        CT_ContainerUI[CTui.index][8] = col; //设置边框颜色
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    if(CTui.type === 2) //如果UI对象是文本
                    {
                        cprint("ERROR 104 : The UI object not have this property. UIobjectID : " + String(CTui.id)); //输出错误
                    }
                }
                if(prop === "left") //如果属性是左边框
                {
                    if(CTui.type === 1 || CTui.type === 5 || CTui.type === 6) //如果UI对象是按钮 进度条 文本框
                    {
                        CT_ContainerUI[CTui.index][10] = col; //设置下边框颜色
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    if(CTui.type === 3 || CTui.type === 4) //如果UI对象是复选框 单选框
                    {
                        CT_ContainerUI[CTui.index][8] = col; //设置复选框边框颜色
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    if(CTui.type === 2) //如果UI对象是文本
                    {
                        cprint("ERROR 104 : The UI object not have this property. UIobjectID : " + String(CTui.id)); //输出错误
                    }
                }
                if(prop === "right") //如果属性是右边框
                {
                    if(CTui.type === 1 || CTui.type === 5 || CTui.type === 6) //如果UI对象是按钮 进度条 文本框
                    {
                        CT_ContainerUI[CTui.index][11] = col; //设置下边框颜色
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    if(CTui.type === 3 || CTui.type === 4) //如果UI对象是复选框 单选框
                    {
                        CT_ContainerUI[CTui.index][8] = col; //设置边框颜色
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    if(CTui.type === 2) //如果UI对象是文本
                    {
                        cprint("ERROR 104 : The UI object not have this property. UIobjectID : " + String(CTui.id)); //输出错误
                    }
                }
                if(prop === "text") //如果属性是文本
                {
                    if(CTui.type === 1 || CTui.type === 6) //如果UI对象是按钮 文本框
                    {
                        CT_ContainerUI[CTui.index][12] = col; //设置文本颜色
                    }
                    if(CTui.type === 2) //如果UI对象是文本
                    {
                        CT_ContainerUI[CTui.index][5] = col; //设置文本颜色
                    }
                    if(CTui.type === 3 || CTui.type === 4 || CTui.type === 5)
                    {
                        cprint("ERROR 104 : The UI object not have this property. UIobjectID : " + String(CTui.id)); //输出错误
                    }
                }
                if(prop === "widget") //如果属性是部件
                {
                    if(CTui.type === 3 || CTui.type === 4) //如果UI对象是复选框 单选框
                    {
                        CT_ContainerUI[CTui.index][9] = col; //设置部件颜色
                    }
                    if(CTui.type === 5) //如果UI对象是进度条
                    {
                        CT_ContainerUI[CTui.index][12] = col; //设置部件颜色
                    }
                    if(CTui.type === 1 || CTui.type === 2 || CTui.type === 6)
                    {
                        cprint("ERROR 104 : The UI object not have this property. UIobjectID : " + String(CTui.id)); //输出错误
                    }
                }
            }
        }
    }
    else //如果对象不是UI对象
    {
        cprint("ERROR 120 : Not is UI object. UIobjectID : " + String(CTui.id)); //输出错误
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按钮点击判断
//--------------------------------------------------------------------
function button_click(CTui)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type === 1) //如果UI对象是按钮
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定UI对象的数据不为空
            {
                var b_s = CT_ContainerUI[CTui.index][17]; //指定按钮对象的状态
                if(b_s === 1) //如果按钮被点击
                {
                    return 1; //返回1
                }
            }
        }
        else //如果UI对象不是按钮
        {
            cprint("ERROR 114 : Not is button object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按钮始终按下判断
//--------------------------------------------------------------------
function button_press(CTui)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type === 1) //如果UI对象是按钮
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定UI对象的数据不为空
            {
                var b_s = CT_ContainerUI[CTui.index][18]; //指定按钮对象的状态
                return b_s;
            }
        }
        else //如果UI对象不是按钮
        {
            cprint("ERROR 114 : Not is button object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按钮按下判断
//--------------------------------------------------------------------
function button_down(CTui)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type === 1) //如果UI对象是按钮
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定UI对象的数据不为空
            {
                var b_s = CT_ContainerUI[CTui.index][19]; //指定按钮对象的状态
                if(b_s === 1) //如果按钮被点击
                {
                    return 1; //返回1
                }
            }
        }
        else //如果UI对象不是按钮
        {
            cprint("ERROR 114 : Not is button object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 按钮松开判断
//--------------------------------------------------------------------
function button_up(CTui)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type === 1) //如果UI对象是按钮
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定UI对象的数据不为空
            {
                var b_s = CT_ContainerUI[CTui.index][20]; //指定按钮对象的状态
                if(b_s === 1) //如果按钮被点击
                {
                    return 1; //返回1
                }
            }
        }
        else //如果UI对象不是按钮
        {
            cprint("ERROR 114 : Not is button object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 复选框状态
//--------------------------------------------------------------------
function checkbox_status(CTui)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type === 3) //如果UI对象是复选框
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定UI对象的数据不为空
            {
                var c_s = CT_ContainerUI[CTui.index][10]; //复选框状态
                return c_s; //返回复选框状态
            }
        }
        else //如果UI对象不是复选框
        {
            cprint("ERROR 116 : Not is checkbox object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 单选框状态
//--------------------------------------------------------------------
function radio_status(CTui)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type === 4) //如果UI对象是单选框
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定单选框对象数据不为空
            {
                    var r_s = CT_ContainerUI[CTui.index][11]; //单选框状态
                    return r_s; //返回单选框状态
            }
        }
        else //如果UI对象不是单选框
        {
            cprint("ERROR 117 : Not is radio object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
    return 0;
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 进度条设置
//--------------------------------------------------------------------
function progressbar_set(CTui,val)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type === 5)
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定进度条对象的数据不为空
            {
                var p_w = CT_ContainerUI[CTui.index][5]; //进度条宽度
                var p_maxval = CT_ContainerUI[CTui.index][16]; //进度条最大值
                var bp_w = 0; //进度条点宽度
                if(val >= 0) //如果进度条值大于等于0
                {
                    if(val <= p_maxval) //如果进度条值小于等于最大值
                    {
                        if(val < p_maxval) //如果设置的值小于最大值
                        {
                            bp_w = parseInt((p_w - 8) / p_maxval * val); //进度条点宽度
                        }
                        if(val === p_maxval) //如果设置的值等于最大值
                        {
                            bp_w = p_w - 8; //进度条点宽度
                        }
                        CT_ContainerUI[CTui.index][15] = val; //设置进度条值
                        CT_ContainerUI[CTui.index][14] = bp_w; //设置点宽度
                        CT_InterfaceRepaint(); //请求重绘
                    }
                    else
                    {
                        cprint("ERROR 109 : The progressbar value greater than the maximum. UIobjectID : " + String(CTui.id));
                    }
                }
                else
                {
                    cprint("ERROR 108 : Progressbar value error. UIobjectID : " + String(CTui.id)); //输出错误
                }
            }
        }
        else //如果UI对象不是进度条
        {
            cprint("ERROR 118 : Not is progressbar object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 文本框的内容
//--------------------------------------------------------------------
function textbox_string(CTui)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type === 6) //如果UI对象是文本框
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定文本框对象的数据不为空
            {
                var t_s = CT_ContainerUI[CTui.index][14]; //文本框内容
                return t_s; //返回文本框内容
            }
        }
        else //如果UI对象不是复选框
        {
            cprint("ERROR 119 : Not is textbox object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
    return "";
}
//--------------------------------------------------------------------
//--------------------------------------------------------------------
// 设置文本框的内容
//--------------------------------------------------------------------
function textbox_set_string(CTui,str)
{
    if(CT_RunnerStatus === 1) //如果运行器状态为1
    {
        if(CTui.type === 6) //如果UI对象是文本框
        {
            if(CT_ContainerUI[CTui.index] != null) //如果UI容器中指定文本框对象的数据不为空
            {
                CT_ContainerUI[CTui.index][14] = str; //设置文本框内容
                CT_InterfaceRepaint(); //请求重绘
            }
        }
        else //如果UI对象不是复选框
        {
            cprint("ERROR 119 : Not is textbox object. UIobjectID : " + String(CTui.id)); //输出错误
        }
    }
    return "";
}
//--------------------------------------------------------------------