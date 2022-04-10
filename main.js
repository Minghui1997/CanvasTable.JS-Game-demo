"use strict";

var spr_player;
var SceneRunner;
var spr_ball;
var spr_wall;
var spr_wallup;
var spr_walldown;
var spr_wallleft;
var spr_wallright;
var scene1;
var win_language;
var but_ch;
var but_en;
var win_hint;
var box_hint;

var LANGUAGE = 0; //语言
var player_index = 0;

function HTML5main()
{
    var ResList = [
        "res/img/img_player.png",
        "res/img/tile1.png",
        "res/img/ball.png",
        "res/img/wall.png",
        "res/img/touch_up.png",
        "res/img/touch_down.png",
        "res/img/touch_left.png",
        "res/img/touch_right.png",
        "res/img/touch_space.png",
        "res/audio/shoot.mp3"
    ];
    
    CT_init(960,540,ResList,CT_main,CT_loop,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0);
}

function CT_main()
{
//------------------------------------------------------------------------
// 窗口 语言选择
//------------------------------------------------------------------------
    win_language = new CTwindow();
    win_language.width = 400;
    win_language.height = 200;
    win_language.x = 280;
    win_language.y = 170;
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// 按钮 语言选择 - 中文
//------------------------------------------------------------------------
    but_ch = new CTbutton();
    but_ch.width = 400;
    but_ch.height = 90;
    but_ch.x = 0;
    but_ch.y = 0;
    but_ch.text = "中文";
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// 按钮 语言选择 - English
//------------------------------------------------------------------------
    but_en = new CTbutton();
    but_en.width = 400;
    but_en.height = 90;
    but_en.x = 0;
    but_en.y = 110;
    but_en.text = "English";
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// 窗口 提示
//------------------------------------------------------------------------
    win_hint = new CTwindow();
    win_hint.layer = 5;
    win_hint.width = 400;
    win_hint.height = 40;
    win_hint.x = 558;
    win_hint.y = 2;
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// 文本框 提示
//------------------------------------------------------------------------
    box_hint = new CTtextbox();
    box_hint.x = 10;
    box_hint.y = 6;
    box_hint.readonly = 1;
    box_hint.width = 380;
    box_hint.color_text = "#0000ff";
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// spr_player
//------------------------------------------------------------------------
    spr_player = new CTsprite();
    spr_player.image = res("res/img/img_player.png");
    spr_player.subnum = 12;
    spr_player.layer = 2;
    spr_player.main = function() //sprite主函数
    {
        spritenum_set(0,0); //移动状态
        spritenum_set(1,1); //方向
        spritenum_set(2,-1); //下一个位置x
        spritenum_set(3,-1); //下一个位置y
        spritenum_set(4,0); //子图像索引
        spritenum_set(5,0); //动画状态
        spritenum_set(6,res("res/audio/shoot.mp3")); //音效索引
        player_index = sprite_index(); //spr索引
        timer_set("player_ani",0.05); //动画定时器
    };
    spr_player.loop = function() //sprite循环函数
    {
        if(keyboard_press(key_up)) //如果按了up键
        {
            if(spritenum(0) === 0) //如果spr不在移动
            {
                spritenum_set(1,1); //方向 上
                spritenum_set(0,1); //spr移动
                var next_y = sprite_y() - 30; //计算下一个位置y
                spritenum_set(3,next_y); //下一个位置y
                spritenum_set(5,1); //动画状态
                sprite_set_subimg(0); //spr子图像设置为0
                timer_run("player_ani"); //运行动画定时器
            }
        }
        if(keyboard_press(key_down)) //如果按了down键
        {
            if(spritenum(0) === 0) //如果spr不在移动
            {
                spritenum_set(1,2); //方向 下
                spritenum_set(0,1); //spr移动
                var next_y = sprite_y() + 30; //计算下一个位置y
                spritenum_set(3,next_y); //下一个位置y
                spritenum_set(5,1); //动画状态
                sprite_set_subimg(3); //spr子图像设置为3
                timer_run("player_ani"); //运行动画定时器
            }
        }
        if(keyboard_press(key_left)) //如果按了left键
        {
            if(spritenum(0) === 0) //如果spr不在移动
            {
                spritenum_set(1,3); //方向 左
                spritenum_set(0,1); //spr移动
                var next_x = sprite_x() - 30; //计算下一个位置x
                spritenum_set(2,next_x); //下一个位置x
                spritenum_set(5,1); //动画状态
                sprite_set_subimg(6); //spr子图像设置为6
                timer_run("player_ani"); //运行动画定时器
            }
        }
        if(keyboard_press(key_right)) //如果按了right键
        {
            if(spritenum(0) === 0) //如果spr不在移动
            {
                spritenum_set(1,4); //方向 右
                spritenum_set(0,1); //spr移动
                var next_x = sprite_x() + 30; //计算下一个位置x
                spritenum_set(2,next_x); //下一个位置x
                spritenum_set(5,1); //动画状态
                sprite_set_subimg(9); //spr子图像设置为9
                timer_run("player_ani"); //运行动画定时器
            }
        }
        if(keyboard_up(key_up)) //如果松开up键
        {
            if(spritenum(1) === 1) //如果方向是上
            {
                spritenum_set(5,0); //停止spr动画
            }
        }
        if(keyboard_up(key_down)) //如果松开down键
        {
            if(spritenum(1) === 2) //如果方向是下
            {
                spritenum_set(5,0); //停止spr动画
            }
        }
        if(keyboard_up(key_left)) //如果松开left键
        {
            if(spritenum(1) === 3) //如果方向是左
            {
                spritenum_set(5,0); //停止spr动画
            }
        }
        if(keyboard_up(key_right)) //如果松开right键
        {
            if(spritenum(1) === 4) //如果方向是右
            {
                spritenum_set(5,0); //停止spr动画
            }
        }
        if(spritenum(0) === 1) //如果spr在移动
        {
            if(spritenum(1) === 1) //如果方向是上
            {
                if(sprite_y() > spritenum(3)) //如果spr位置y大于下一个位置y
                {
                    sprite_set_y(sprite_y()-5); //spr位置y -5
                }
                if(sprite_y() === spritenum(3)) //如果spr位置y等于下一个位置y
                {
                    spritenum_set(0,0); //spr停止移动
                    if(spritenum(5) === 0) //spr动画停止
                    {
                        timer_stop("player_ani"); //停止动画定时器
                        sprite_set_subimg(0); //spr子图像设置为0
                    }
                }
                if(timer_end("player_ani")) //如果动画定时器结束
                {
                    if(spritenum(4) >= 0 && spritenum(4) <= 2) //如果子图像索引 >=0 <=2
                    {
                        spritenum_set(4,spritenum(4)+1); //子图像索引 +1
                    }
                    if(spritenum(4) < 0 || spritenum(4) > 2) //如果子图像索引 <0 >2
                    {
                        spritenum_set(4,0); //子图像索引
                    }
                    sprite_set_subimg(spritenum(4)); //设置spr子图像
                    timer_run("player_ani"); //运行动画定时器
                }
            }
            if(spritenum(1) === 2) //如果方向是下
            {
                if(sprite_y() < spritenum(3)) //如果spr位置y小于下一个位置y
                {
                    sprite_set_y(sprite_y()+5); //spr位置y +5
                }
                if(sprite_y() === spritenum(3)) //如果spr位置y等于下一个位置y
                {
                    spritenum_set(0,0); //spr停止移动
                    if(spritenum(5) === 0) //spr动画停止
                    {
                        timer_stop("player_ani"); //停止动画定时器
                        sprite_set_subimg(3); //spr子图像设置为3
                    }
                }
                if(timer_end("player_ani")) //如果动画定时器结束
                {
                    if(spritenum(4) >= 3 && spritenum(4) <= 5) //如果子图像索引 >=3 <=5
                    {
                        spritenum_set(4,spritenum(4)+1); //子图像索引 +1
                    }
                    if(spritenum(4) < 3 || spritenum(4) > 5) //如果子图像索引 <3 >5
                    {
                        spritenum_set(4,3); //子图像索引
                    }
                    sprite_set_subimg(spritenum(4)); //设置spr子图像
                    timer_run("player_ani"); //运行动画定时器
                }
            }
            if(spritenum(1) === 3) //如果方向是左
            {
                if(sprite_x() > spritenum(2)) //如果spr位置x大于下一个位置x
                {
                    sprite_set_x(sprite_x()-5); //spr位置x -5
                }
                if(sprite_x() === spritenum(2)) //如果spr位置x等于下一个位置x
                {
                    spritenum_set(0,0); //spr停止移动
                    if(spritenum(5) === 0) //spr动画停止
                    {
                        timer_stop("player_ani"); //停止动画定时器
                        sprite_set_subimg(6); //spr子图像设置为6
                    }
                }
                if(timer_end("player_ani")) //如果动画定时器结束
                {
                    if(spritenum(4) >= 6 && spritenum(4) <= 8) //如果子图像索引 >=6 <=8
                    {
                        spritenum_set(4,spritenum(4)+1); //子图像索引 +1
                    }
                    if(spritenum(4) < 6 || spritenum(4) > 8) //如果子图像索引 <6 >8
                    {
                        spritenum_set(4,6); //子图像索引
                    }
                    sprite_set_subimg(spritenum(4)); //设置spr子图像
                    timer_run("player_ani"); //运行动画定时器
                }
            }
            if(spritenum(1) === 4) //如果方向是右
            {
                if(sprite_x() < spritenum(2)) //如果spr位置x小于下一个位置x
                {
                    sprite_set_x(sprite_x()+5); //spr位置x +5
                }
                if(sprite_x() === spritenum(2)) //如果spr位置x等于下一个位置x
                {
                    spritenum_set(0,0); //spr停止移动
                    if(spritenum(5) === 0) //spr动画停止
                    {
                        timer_stop("player_ani"); //停止动画定时器
                        sprite_set_subimg(9); //spr子图像设置为9
                    }
                }
                if(timer_end("player_ani")) //如果动画定时器结束
                {
                    if(spritenum(4) >= 9 && spritenum(4) <= 11) //如果子图像索引 >=9 <=11
                    {
                        spritenum_set(4,spritenum(4)+1); //子图像索引 +1
                    }
                    if(spritenum(4) < 9 || spritenum(4) > 11)
                    {
                        spritenum_set(4,9); //子图像索引
                    }
                    sprite_set_subimg(spritenum(4)); //设置spr子图像
                    timer_run("player_ani"); //运行动画定时器
                }
            }
        }
        if(keyboard_down(key_space)) //如果按下space键
        {
            if(spritenum(1) === 1) //如果方向是上
            {
                sprite_create(sprite_x()+10,sprite_y()-10,spr_ball); //创建ball
            }
            if(spritenum(1) === 2) //如果方向是下
            {
                sprite_create(sprite_x()+10,sprite_y()+60,spr_ball); //创建ball
            }
            if(spritenum(1) === 3) //如果方向是左
            {
                sprite_create(sprite_x()-10,sprite_y()+25,spr_ball); //创建ball
            }
            if(spritenum(1) === 4) //如果方向是右
            {
                sprite_create(sprite_x()+30,sprite_y()+25,spr_ball); //创建ball
            }
            audio_play(spritenum(6),0); //播放音效
        }
        if(sprite_collision(spr_wallup) || sprite_collision(spr_walldown) || sprite_collision(spr_wallleft) || sprite_collision(spr_wallright) || sprite_collision(spr_wall)) //如果碰撞墙壁
        {
            spritenum_set(0,0); //停止移动
        }
        view_set_x(sprite_x()-480); //设置视野x
        view_set_y(sprite_y()-270); //设置视野y
    };
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// SceneRunner
//------------------------------------------------------------------------
    SceneRunner = new CTsprite();
    SceneRunner.main = function() //sprite主函数
    {
        spritenum_set(0,0); //提示变量值
        CTwindow_create(win_hint); //创建
        CTui_create(win_hint,box_hint); //创建窗口 提示
        timer_set("hint",2); //设置提示定时器
        timer_run("hint"); //运行提示定时器
        touchkey_create(0,50,390,50,50,key_up); //创建up触摸键
        touchkey_image(0,res("res/img/touch_up.png")); //设置up触摸键的图像
        touchkey_create(1,50,490,50,50,key_down); //创建down触摸键
        touchkey_image(1,res("res/img/touch_down.png")); //设置down触摸键的图像
        touchkey_create(2,0,440,50,50,key_left); //创建left触摸键
        touchkey_image(2,res("res/img/touch_left.png")); //设置left触摸键的图像
        touchkey_create(3,100,440,50,50,key_right); //创建right触摸键
        touchkey_image(3,res("res/img/touch_right.png")); //设置right触摸键的图像
        touchkey_create(4,860,440,50,50,key_space); //创建space触摸键
        touchkey_image(4,res("res/img/touch_space.png")); //设置space触摸键的图像
    };
    SceneRunner.loop = function() //sprite循环函数
    {
        if(timer_end("hint")) //如果提示定时器结束
        {
            if(spritenum(0) === 0) //如果提示变量值是0
            {
                if(LANGUAGE === 1) //如果语言是中文
                {
                    textbox_set_string(box_hint,"提示：按<上 下 左 右>键移动。"); //设置提示框内容
                }
                if(LANGUAGE === 2) //如果语言是english
                {
                    textbox_set_string(box_hint,"HINT : Press <UP DOWN LEFT RIGHT> key to move."); //设置提示框内容
                }
                spritenum_set(0,1); //提示变量值1
                timer_run("hint"); //运行提示定时器
                return; //中断
            }
            if(spritenum(0) === 1) //如果提示变量值是1
            {
                if(LANGUAGE === 1) //如果语言是中文
                {
                    textbox_set_string(box_hint,"提示：按<空格>键发射球。"); //设置提示框内容
                }
                if(LANGUAGE === 2) //如果语言是english
                {
                    textbox_set_string(box_hint,"HINT : Press <SPACE> key to shoot ball."); //设置提示框内容
                }
                spritenum_set(0,0); //提示变量值0
                timer_run("hint"); //运行提示定时器
                return; //中断
    	    }
        }
    };
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// spr_ball
//------------------------------------------------------------------------
    spr_ball = new CTsprite();
    spr_ball.layer = 2;
    spr_ball.image = res("res/img/ball.png");
    spr_ball.main = function() //sprite主函数
    {
        var player_dir = ispritenum(player_index,1); //player方向
        spritenum_set(0,player_dir); //ball方向
    };
    spr_ball.loop = function() //sprite循环函数
    {
        if(spritenum(0) === 1) //如果ball方向是上
        {
            sprite_set_y(sprite_y()-10); //ball向上移动
        }
        if(spritenum(0) === 2) //如果ball方向是下
        {
            sprite_set_y(sprite_y()+10); //ball向下移动
        }
        if(spritenum(0) === 3) //如果ball方向是左
        {
            sprite_set_x(sprite_x()-10); //ball向左移动
        }
        if(spritenum(0) === 4) //如果ball方向是右
        {
            sprite_set_x(sprite_x()+10); //ball向右移动
        }
        if(spritenum(0) === 5) //如果ball方向是左下角
        {
            sprite_set_x(sprite_x()-10); //ball向左移动
            sprite_set_y(sprite_y()+10); //ball向右移动
        }
        if(spritenum(0) === 6) //如果ball方向是右下角
        {
            sprite_set_x(sprite_x()+10); //ball向右移动
            sprite_set_y(sprite_y()+10); //ball向下移动
        }
        if(spritenum(0) === 7) //如果ball方向是右上角
        {
            sprite_set_x(sprite_x()+10); //ball向右移动
            sprite_set_y(sprite_y()-10); //ball向上移动
        }
        if(spritenum(0) === 8) //如果ball方向是左上角
        {
            sprite_set_x(sprite_x()-10); //ball向左移动
            sprite_set_y(sprite_y()-10); //ball向上移动
        }
        if(sprite_collision(spr_wallup)) //如果碰撞spr_wallup
        {
            if(spritenum(0) === 1) //如果ball方向是上
            {
                spritenum_set(0,5); //ball方向改为左下角
                return; //中断
            }
            if(spritenum(0) === 7) //如果ball方向是右上角
            {
                spritenum_set(0,6); //ball方向改为右下角
                return; //中断
            }
            if(spritenum(0) === 8) //如果ball方向是左上角
            {
                spritenum_set(0,5); //ball方向改为左下角
                return; //中断
            }
        }
        if(sprite_collision(spr_walldown)) //如果碰撞spr_walldown
        {
            if(spritenum(0) === 2) //如果ball方向是下
            {
                spritenum_set(0,7); //ball方向改为右上角
                return; //中断
            }
            if(spritenum(0) === 6) //如果ball方向是右下角
            {
                spritenum_set(0,7); //ball方向改为右上角
                return; //中断
            }
            if(spritenum(0) === 5) //如果ball方向是左下角
            {
                spritenum_set(0,8); //ball方向改为左上角
                return; //中断
            }
        }
        if(sprite_collision(spr_wallleft)) //如果碰撞spr_wallleft
        {
            if(spritenum(0) === 3) //如果ball方向是左
            {
                spritenum_set(0,6); //ball方向改为右下角
                return; //中断
            }
            if(spritenum(0) === 5) //如果ball方向是左下角
            {
                spritenum_set(0,6); //ball方向改为右下角
                return; //中断
            }
            if(spritenum(0) === 8) //如果ball方向是左上角
            {
                spritenum_set(0,7); //ball方向改为右上角
                return; //中断
            }
        }
        if(sprite_collision(spr_wallright)) //如果碰撞spr_wallright
        {
            if(spritenum(0) === 4) //如果ball方向是右
            {
                spritenum_set(0,8); //ball方向改为左上角
                return; //中断
            }
            if(spritenum(0) === 6) //如果ball方向是右下角
            {
                spritenum_set(0,5); //ball方向改为左下角
                return; //中断
            }
            if(spritenum(0) === 7) //如果ball方向是右上角
            {
                spritenum_set(0,8); //ball方向改为左上角
                return; //中断
            }
        }
    };
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// spr_wallup
//------------------------------------------------------------------------
    spr_wallup = new CTsprite();
    spr_wallup.layer = 2;
    spr_wallup.image = res("res/img/wall.png");
    spr_wallup.collision_edge = 1;
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// spr_walldown
//------------------------------------------------------------------------
    spr_walldown = new CTsprite();
    spr_walldown.layer = 2;
    spr_walldown.image = res("res/img/wall.png");
    spr_walldown.collision_edge = 1;
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// spr_wallleft
//------------------------------------------------------------------------
    spr_wallleft = new CTsprite();
    spr_wallleft.layer = 2;
    spr_wallleft.image = res("res/img/wall.png");
    spr_wallleft.collision_edge = 1;
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// spr_wallright
//------------------------------------------------------------------------
    spr_wallright = new CTsprite();
    spr_wallright.layer = 2;
    spr_wallright.image = res("res/img/wall.png");
    spr_wallright.collision_edge = 1;
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// spr_wall
//------------------------------------------------------------------------
    spr_wall = new CTsprite();
    spr_wall.layer = 2;
    spr_wall.image = res("res/img/wall.png");
    spr_wall.collision_edge = 1;
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// scene 1
//------------------------------------------------------------------------
    scene1 = new CTscene();
    scene1.width = 1440;
    scene1.height = 810;
    scene1.tile_image = [res("res/img/tile1.png")];
    //瓦片地图 层0
    scene1.tile_map[0] = 
    [
     31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,
     41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,
     41,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4,43,
     41, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4,43,
     41, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4,43,
     41, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4,43,
     41, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,43,
     41, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,43,
     41, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,43,
     41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1,43,
     41, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,43,
     41, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,43,
     41, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,43,
     41, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,43,
     41, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,43,
     41, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,43,
     51,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,53
    ];
    //瓦片地图 层1
    scene1.tile_map[1] = 
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,37,38,38,38,38,38,39, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,47, 0, 0, 0, 0, 0,49, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,34,35,35,35,35,35,35,35,35,36, 0, 0, 0, 0, 0, 0, 0, 0,47, 0, 0, 0, 0, 0,49, 0,
      0, 0, 0, 0, 0,34,35,35,35,35,35,35,36, 0, 0, 0, 0, 0, 0, 0, 0, 0,44, 0, 0,25, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0,47, 0, 0, 0, 0, 0,49, 0,
      0, 0, 0, 0, 0,44, 0,15,15, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0,44, 0,15, 0, 0, 0,22, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0,47, 0, 0, 0, 0, 0,49, 0,
      0, 0, 0, 0, 0,44, 0,12, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0,44, 0, 0, 0,12, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0,47, 0, 0, 0, 0, 0,49, 0,
      0, 0, 0, 0, 0,44,22, 0, 0,12, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0,44, 0,22, 0, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0,57,58,58,58,58,58,59, 0,
      0, 0, 0, 0, 0,44, 0,15, 0,22, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0,44, 0, 0, 0, 0, 0,15,22, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,44, 0,22, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0,44, 0, 0, 0,22, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,44, 0, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0,44, 0, 0, 0, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,54,55,55,55,55,55,55,56, 0, 0, 0, 0, 0, 0, 0, 0, 0,54,55,55,55,55,55,55,55,55,56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,34,35,35,35,35,35,35,35,35,35,36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,44,25, 0, 0, 0, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,44, 0, 0, 0,22, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,44, 0, 0,15, 0, 0, 0,12, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,35,35,35,35,35,35,35,36, 0, 0, 0, 0, 0, 0, 0,44, 0, 0, 0, 0, 0,25, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0,44, 0, 0, 0, 0, 0,22, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,15, 0,22, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0,44, 0, 0, 0, 0, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0,12, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0,54,55,55,55,55,55,55,55,55,55,56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0,25,25, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,22, 0, 0,15,22, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    //sprite地图
    scene1.sprite_map = function()
    {
        m(0,0,SceneRunner);
        m(690,420,spr_player);
        m(0,30,spr_wallup);
        m(30,30,spr_wallup);
        m(60,30,spr_wallup);
        m(90,30,spr_wallup);
        m(120,30,spr_wallup);
        m(150,30,spr_wallup);
        m(180,30,spr_wallup);
        m(210,30,spr_wallup);
        m(240,30,spr_wallup);
        m(270,30,spr_wallup);
        m(300,30,spr_wallup);
        m(330,30,spr_wallup);
        m(360,30,spr_wallup);
        m(390,30,spr_wallup);
        m(420,30,spr_wallup);
        m(450,30,spr_wallup);
        m(480,30,spr_wallup);
        m(510,30,spr_wallup);
        m(540,30,spr_wallup);
        m(570,30,spr_wallup);
        m(600,30,spr_wallup);
        m(630,30,spr_wallup);
        m(660,30,spr_wallup);
        m(690,30,spr_wallup);
        m(720,30,spr_wallup);
        m(750,30,spr_wallup);
        m(780,30,spr_wallup);
        m(810,30,spr_wallup);
        m(840,30,spr_wallup);
        m(870,30,spr_wallup);
        m(900,30,spr_wallup);
        m(930,30,spr_wallup);
        m(960,30,spr_wallup);
        m(990,30,spr_wallup);
        m(1020,30,spr_wallup);
        m(1050,30,spr_wallup);
        m(1080,30,spr_wallup);
        m(1110,30,spr_wallup);
        m(1140,30,spr_wallup);
        m(1170,30,spr_wallup);
        m(1200,30,spr_wallup);
        m(1230,30,spr_wallup);
        m(1260,30,spr_wallup);
        m(1290,30,spr_wallup);
        m(1320,30,spr_wallup);
        m(1350,30,spr_wallup);
        m(1380,30,spr_wallup);
        m(1410,30,spr_wallup);
        m(0,780,spr_walldown);
        m(30,780,spr_walldown);
        m(60,780,spr_walldown);
        m(90,780,spr_walldown);
        m(120,780,spr_walldown);
        m(150,780,spr_walldown);
        m(180,780,spr_walldown);
        m(210,780,spr_walldown);
        m(240,780,spr_walldown);
        m(270,780,spr_walldown);
        m(300,780,spr_walldown);
        m(330,780,spr_walldown);
        m(360,780,spr_walldown);
        m(390,780,spr_walldown);
        m(420,780,spr_walldown);
        m(450,780,spr_walldown);
        m(480,780,spr_walldown);
        m(510,780,spr_walldown);
        m(540,780,spr_walldown);
        m(570,780,spr_walldown);
        m(600,780,spr_walldown);
        m(630,780,spr_walldown);
        m(660,780,spr_walldown);
        m(690,780,spr_walldown);
        m(720,780,spr_walldown);
        m(750,780,spr_walldown);
        m(780,780,spr_walldown);
        m(810,780,spr_walldown);
        m(840,780,spr_walldown);
        m(870,780,spr_walldown);
        m(900,780,spr_walldown);
        m(930,780,spr_walldown);
        m(960,780,spr_walldown);
        m(990,780,spr_walldown);
        m(1020,780,spr_walldown);
        m(1050,780,spr_walldown);
        m(1080,780,spr_walldown);
        m(1110,780,spr_walldown);
        m(1140,780,spr_walldown);
        m(1170,780,spr_walldown);
        m(1200,780,spr_walldown);
        m(1230,780,spr_walldown);
        m(1260,780,spr_walldown);
        m(1290,780,spr_walldown);
        m(1320,780,spr_walldown);
        m(1350,780,spr_walldown);
        m(1380,780,spr_walldown);
        m(1410,780,spr_walldown);
        m(0,30,spr_wallleft);
        m(0,60,spr_wallleft);
        m(0,90,spr_wallleft);
        m(0,120,spr_wallleft);
        m(0,150,spr_wallleft);
        m(0,180,spr_wallleft);
        m(0,210,spr_wallleft);
        m(0,240,spr_wallleft);
        m(0,270,spr_wallleft);
        m(0,300,spr_wallleft);
        m(0,330,spr_wallleft);
        m(0,360,spr_wallleft);
        m(0,390,spr_wallleft);
        m(0,420,spr_wallleft);
        m(0,450,spr_wallleft);
        m(0,480,spr_wallleft);
        m(0,510,spr_wallleft);
        m(0,540,spr_wallleft);
        m(0,570,spr_wallleft);
        m(0,600,spr_wallleft);
        m(0,630,spr_wallleft);
        m(0,660,spr_wallleft);
        m(0,690,spr_wallleft);
        m(0,720,spr_wallleft);
        m(0,750,spr_wallleft);
        m(0,780,spr_wallleft);
        m(1410,30,spr_wallright);
        m(1410,60,spr_wallright);
        m(1410,90,spr_wallright);
        m(1410,120,spr_wallright);
        m(1410,150,spr_wallright);
        m(1410,180,spr_wallright);
        m(1410,210,spr_wallright);
        m(1410,240,spr_wallright);
        m(1410,270,spr_wallright);
        m(1410,300,spr_wallright);
        m(1410,330,spr_wallright);
        m(1410,360,spr_wallright);
        m(1410,390,spr_wallright);
        m(1410,420,spr_wallright);
        m(1410,450,spr_wallright);
        m(1410,480,spr_wallright);
        m(1410,510,spr_wallright);
        m(1410,540,spr_wallright);
        m(1410,570,spr_wallright);
        m(1410,600,spr_wallright);
        m(1410,630,spr_wallright);
        m(1410,660,spr_wallright);
        m(1410,690,spr_wallright);
        m(1410,720,spr_wallright);
        m(1410,750,spr_wallright);
        m(1410,780,spr_wallright);
        m(1200,90,spr_wall);
        m(1200,120,spr_wall);
        m(1200,150,spr_wall);
        m(1200,180,spr_wall);
        m(1200,210,spr_wall);
        m(1200,240,spr_wall);
        m(1200,270,spr_wall);
        m(1230,270,spr_wall);
        m(1260,270,spr_wall);
        m(1290,270,spr_wall);
        m(1320,270,spr_wall);
        m(1350,270,spr_wall);
        m(1380,270,spr_wall);
    };
//------------------------------------------------------------------------
    CTwindow_create(win_language); //创建语言选择窗口
    CTui_create(win_language,but_ch); //创建语言选择按钮 - 中文
    CTui_create(win_language,but_en); //创建语言选择按钮 - english
}

function CT_loop()
{
    if(LANGUAGE === 0) //如果没有选择语言
    {
        if(button_click(but_ch)) //如果点击选择中文按钮
        {
            LANGUAGE = 1; //语言设置为中文
            scene_enter(scene1); //进入场景1
        }
        if(button_click(but_en)) //如果点击选择english按钮
        {
            LANGUAGE = 2; //语言设置为english
            scene_enter(scene1); //进入场景1
        }
    }
}