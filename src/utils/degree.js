// 角度からラジアンを求める関数
export function degree_to_rad(degree){
    return degree * Math.PI / 180;
}

// ラジアンから角度を求める関数
function rad_to_degree(rad){
    return rad / Math.PI * 180;
}

// 2点の x, y 座標から角度を算出する関数(単位は 度)
export function get_degree(x1, y1, x2, y2){
    let rad = Math.atan2(y2 - y1, x2 - x1);
    return rad_to_degree(rad);
}