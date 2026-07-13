int x=7, y=4, z;
z = y%3<3 ? 2 : 1; // true 2
z = z & z >> 1; // 2 & 1 = 0
z = x>5&&z<=3 ? z*x : z/x; // z*x = 0*7 = 0

printf("%d", z); // 정답: 0