// DỮ LIỆU ĐỀ 2 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-2-2612_p1'] = [
    {
        q: "Tập nghiệm $S$ của bất phương trình $\\log _{\\frac{1}{5}}(x+1)<\\log _{\\frac{1}{5}}(2 x-1)$ là",
        options: [
            "$S=(2 ;+\\infty)$",
            "$S=(-\\infty ; 2)$",
            "$S=(-1 ; 2)$",
            "$S=\\left(\\dfrac{1}{2} ; 2\\right)$"
        ],
        answer: 3,
        explanation: "Điều kiện xác định: $\\left\\{ \\begin{array}{l} x+1 > 0 \\\\ 2x-1 > 0 \\end{array} \\right. \\Leftrightarrow x > \\dfrac{1}{2}$.\\nVì cơ số $a = \\dfrac{1}{5} < 1$ nên bất phương trình tương đương với: $x+1 > 2x-1 \\Leftrightarrow x < 2$.\\nKết hợp với điều kiện, ta được tập nghiệm $S = \\left(\\dfrac{1}{2} ; 2\\right)$."
    },
    {
        q: "Trong mặt phẳng tọa độ $(Oxy)$, cho elip $(E)$ có phương trình $\\dfrac{x^2}{36}+\\dfrac{y^2}{16}=1$. Tiêu cự của elip $(E)$ bằng",
        options: [
            "$F_1 F_2=12$",
            "$F_1 F_2=8$",
            "$F_1 F_2=2 \\sqrt{5}$",
            "$F_1 F_2=4 \\sqrt{5}$"
        ],
        answer: 3,
        explanation: "Từ phương trình $(E): \\dfrac{x^2}{36}+\\dfrac{y^2}{16}=1$, ta có $a^2=36$ và $b^2=16$.\\nÁp dụng công thức liên hệ $c^2 = a^2 - b^2$, ta có: $c^2 = 36 - 16 = 20 \\Rightarrow c = \\sqrt{20} = 2\\sqrt{5}$.\\nTiêu cự của elip là độ dài đoạn thẳng $F_1 F_2 = 2c = 2 \\cdot 2\\sqrt{5} = 4\\sqrt{5}$."
    },
    {
        q: "Cho $\\cos x = \\dfrac{1}{3}$. Tính giá trị của biểu thức $\\cos 2x$.",
        options: [
            "$-\\dfrac{8}{9}$",
            "$-\\dfrac{1}{9}$",
            "$\\dfrac{8}{9}$",
            "$-\\dfrac{7}{9}$"
        ],
        answer: 3,
        explanation: "Sử dụng công thức nhân đôi của hàm số cosin: $\\cos 2x = 2\\cos^2 x - 1$.\\nThay $\\cos x = \\dfrac{1}{3}$ vào công thức, ta được: $\\cos 2x = 2 \\cdot \\left(\\dfrac{1}{3}\\right)^2 - 1 = 2 \\cdot \\dfrac{1}{9} - 1 = \\dfrac{2}{9} - \\dfrac{9}{9} = -\\dfrac{7}{9}$."
    },
    {
        q: "Cho hình phẳng $(H)$ giới hạn bởi đồ thị $(P)\\colon y=2x-x^2$ và trục $Ox$. Tính thể tích của khối tròn xoay tạo thành khi cho $(H)$ quay quanh trục $Ox$.",
        options: [
            "$V=\\dfrac{19\\pi}{15}$",
            "$V=\\dfrac{13\\pi}{15}$",
            "$V=\\dfrac{17\\pi}{15}$",
            "$V=\\dfrac{16\\pi}{15}$"
        ],
        answer: 3,
        explanation: "Phương trình hoành độ giao điểm của đồ thị $(P)$ và trục $Ox$ là $2x-x^2=0\\Leftrightarrow \\left[ \\begin{array}{l} x=0 \\\\ x=2 \\end{array} \\right.$.\\nThể tích khối tròn xoay cần tìm là $V=\\pi \\int \\limits _0^2 \\left(2x-x^2\\right)^2\\mathrm{\\,d}x=\\dfrac{16\\pi}{15}$."
    },
    {
        q: "Cho bảng số liệu ghép nhóm về chiều cao đo được của $30$ học sinh nam lớp $12$A$2$ đầu năm học $2024-2025$ của trường THPT như sau <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Chiều cao (cm)</td><td>$[150;155)$</td><td>$[155;160)$</td><td>$[160;165)$</td><td>$[165;170)$</td><td>$[170;175)$</td></tr><tr><td>Số học sinh</td><td>3</td><td>7</td><td>10</td><td>9</td><td>3</td></tr></table> Mốt ($M_0$) của mẫu số liệu ghép nhóm là chiều cao mà nhiều bạn có được nhất. $M_0$ bằng bao nhiêu cm?",
        options: [
            "$161{,}25$",
            "$162{,}5$",
            "$163{,}75$",
            "$175$"
        ],
        answer: 2,
        explanation: "Nhóm chứa mốt là nhóm $[160;165)$ vì có tần số lớn nhất ($10$). Áp dụng công thức tính mốt nhóm: $M_0 = 160 + \\dfrac{10-7}{(10-7)+(10-9)} \\cdot (165-160) = 163,75$ cm."
    },
    {
        q: "Số đường tiệm cận của đồ thị hàm số $y=\\dfrac{2x^2-3x-2}{x^2-4}$ là",
        options: [
            "$0$",
            "$2$",
            "$1$",
            "$3$"
        ],
        answer: 1,
        explanation: "Ta có $y=\\dfrac{2x^2-3x-2}{x^2-4}=\\dfrac{(2x+1)(x-2)}{(x-2)(x+2)}=\\dfrac{2x+1}{x+2}$.\\nDo $\\lim \\limits_{x\\to \\pm \\infty} y = 2$ nên tiệm cận ngang là $y=2$.\\nDo $\\lim \\limits_{x\\to -2^-} y = -\\infty$ nên tiệm cận đứng là $x=-2$.\\nVậy đồ thị hàm số có hai đường tiệm cận."
    },
    {
        q: "Nghiệm của phương trình $\\log _3(x+1)=2$ là",
        options: [
            "$2$",
            "$8$",
            "$7$",
            "$5$"
        ],
        answer: 1,
        explanation: "Ta có $\\log _3(x+1)=2\\Leftrightarrow x+1=3^2\\Leftrightarrow x=8$."
    },
    {
        q: "Trong không gian với hệ trục toạ độ $Oxyz$, mặt phẳng $(P)\\colon \\dfrac{x}{2}+\dfrac{y}{3}+\dfrac{z}{-2}=1$ có một véc-tơ pháp tuyến là",
        options: [
            "$\\overrightarrow{n}=(2;3;2)$",
            "$\\overrightarrow{n}=(3;2;3)$",
            "$\\overrightarrow{n}=(2;3;-2)$",
            "$\\overrightarrow{n}=(3;2;-3)$"
        ],
        answer: 3,
        explanation: "Ta có $(P)\\colon \\dfrac{x}{2}+\dfrac{y}{3}+\dfrac{z}{-2}=1\\Leftrightarrow 3x+2y-3z-6=0$.\\nDo đó một véc-tơ pháp tuyến của mặt phẳng $(P)$ là $\\overrightarrow{n}=(3;2;-3)$."
    },
    {
        q: "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $\\sqrt{3}a$, $SA$ vuông góc với mặt phẳng đáy và $SA=\\sqrt{2}a$. Góc giữa $SC$ và mặt phẳng $(ABCD)$ bằng",
        image: "images/2612OnTNDe2/2612OnTNDe2TN9.png",
        options: [
            "$60^{\\circ}$",
            "$30^{\\circ}$",
            "$45^{\\circ}$",
            "$90^{\\circ}$"
        ],
        answer: 1,
        explanation: "Đường thẳng $SA\\perp (ABCD)$ suy ra hình chiếu của $SC$ lên mặt phẳng $(ABCD)$ là $AC$.\\nDo đó $\\left(SC,(ABCD)\\right)=(SC,AC)=\\widehat{SCA}$.\\nXét tam giác đáy vuông cân tại $B$: $AC = \\sqrt{AB^2+BC^2} = \\sqrt{3a^2+3a^2} = a\\sqrt{6}$.\\nXét tam giác vuông $SAC$ có $\\tan \\widehat{SCA}=\\dfrac{SA}{AC}=\\dfrac{a\\sqrt{2}}{a\\sqrt{6}}=\\dfrac{1}{\\sqrt{3}}\\Rightarrow \\widehat{SCA}=30^{\\circ}$."
    },
    {
        q: "Cho dãy số $\\left(u_n\\right)$ thoả mãn $u_1=2$, $u_{n+1}=3u_n$, $\\forall n\\in \\mathbb{N}^*$. Giá trị của $u_3$ bằng",
        options: [
            "$6$",
            "$\\dfrac{3}{2}$",
            "$18$",
            "$12$"
        ],
        answer: 2,
        explanation: "Ta có $\\left(u_n\\right)$ là cấp số nhân có số hạng đầu $u_1=2$, công bội $q=3$.\\nVậy $u_3=u_1\\cdot q^2=2\\cdot 3^2=18$."
    },
    {
        q: "Cho hình hộp $ABCD.A'B'C'D'$. Véc-tơ $\\overrightarrow{u}=\\overrightarrow{BB'}+\\overrightarrow{BA}+\\overrightarrow{BC}$ bằng véc-tơ nào dưới đây?",
        options: [
            "$\\overrightarrow{BD}$",
            "$\\overrightarrow{BD'}$",
            "$\\overrightarrow{BC}$",
            "$\\overrightarrow{BA'}$"
        ],
        answer: 1,
        explanation: "Theo quy tắc hình bình hành áp dụng cho hình phẳng đáy, ta có $\\overrightarrow{BA}+\\overrightarrow{BC}=\\overrightarrow{BD}$.\\nSuy ra $\\overrightarrow{u}=\\overrightarrow{BB'}+\\overrightarrow{BD}$. Tiếp tục áp dụng quy tắc hình bình hành cho mặt chéo, ta được $\\overrightarrow{u}=\\overrightarrow{BD'}$."
    },
    {
        q: "Hàm số $y=\\sqrt{-x^2+2x}$ đồng biến trên khoảng nào?",
        options: [
            "$(0;1)$",
            "$(1;2)$",
            "$(-\\infty;0)$",
            "$(2;+\\infty)$"
        ],
        answer: 0,
        explanation: "Tập xác định $\\mathscr{D}=[0;2]$ và có đạo hàm $y'=\\dfrac{-x+1}{\\sqrt{-x^2+2x}}$.\\nKhi đó $y'\\geq 0\\Leftrightarrow \\left\\{ \\begin{array}{l} -x+1\\geq 0 \\\\ -x^2+2x>0 \\end{array} \\right. \\Leftrightarrow \\left\\{ \\begin{array}{l} x\\leq 1 \\\\ 0<x<2 \\end{array} \\right. \\Leftrightarrow 0<x\\leq 1$.\\nSuy ra hàm số đồng biến trên khoảng $(0;1)$."
    }
];

window.quizData['on-tn-de-2-2612_p2'] = [
    {
        q: "Một chất điểm chuyển động trong 3 giây với vận tốc được mô tả bởi hàm số $v(t)=m\\cos (\\pi t)+n$ (đơn vị m/s), trong đó $t$ là biến thời gian ($0 \\le t \\le 3$) và $m, n$ là các hằng số. Đồ thị vận tốc của chất điểm được cho như hình vẽ bên dưới. Xét tính đúng sai của các khẳng định sau:",
        image: "images/2612OnTNDe2/2612OnTNDe2DS1.png",
        sub_questions: [
            { text: "Tại thời điểm $t=2$ giây, chất điểm đang đạt vận tốc cực đại", correct: true },
            { text: "Gia tốc của chất điểm tại thời điểm $t=0{,}5$ giây bằng $-5\\pi$ (m/s$^2$)", correct: true },
            { text: "Hàm số vận tốc của chất điểm là $v(t) = 10\\cos(\\pi t) + 5$", correct: false },
            { text: "Quãng đường chất điểm đi được từ thời điểm $t=1$ đến $t=2$ giây là 5 m", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì dựa vào đồ thị, tại $t=2$, hàm số đạt đỉnh cao nhất có giá trị $v(2) = 10$ m/s.\\n- Mệnh đề 2 ĐÚNG vì từ đồ thị ta lập hệ: $\\left\\{ \\begin{array}{l} v(0)=10 \\\\ v(1)=0 \\end{array} \\right. \\Leftrightarrow \\left\\{ \\begin{array}{l} m+n=10 \\\\ -m+n=0 \\end{array} \\right. \\Leftrightarrow m=n=5 \\Rightarrow v(t) = 5\\cos(\\pi t) + 5$. Gia tốc $a(t) = v'(t) = -5\\pi \\sin(\\pi t) \\Rightarrow a(0,5) = -5\\pi \\sin(0,5\\pi) = -5\\pi$ m/s$^2$.\\n- Mệnh đề 3 SAI vì hàm vận tốc đúng là $v(t) = 5\\cos(\\pi t) + 5$.\\n- Mệnh đề 4 ĐÚNG vì quãng đường tính bằng tích phân: $S = \\int_{1}^{2} (5\\cos(\\pi t) + 5) \\text{d}t = \\left[ \\dfrac{5}{\\pi}\\sin(\\pi t) + 5t \\right]_{1}^{2} = 5$ m."
    },
    {
        q: "Cho hàm số $y=x^2-2x$ có đồ thị $(C)$. Kí hiệu $A$ là hình phẳng giới hạn bởi $(C)$, trục hoành và hai đường thẳng $x=0$, $x=2$; $B$ là hình phẳng giới hạn bởi $(C)$, trục hoành và hai đường thẳng $x=2$, $x=a\\,(a>2)$. Gọi $S_{A}$, $S_{B}$ lần lượt là diện tích của hình phẳng $A$, $B$. Xét tính đúng sai của các khẳng định sau:",
        image: "images/2612OnTNDe2/2612OnTNDe2DS2.png",
        sub_questions: [
            { text: "$S_{A}=\\int\\limits_0^2\\left(x^2-2x\\right) \\mathrm{\\,d}x$", correct: false },
            { text: "$S_{B}=\\int\\limits_2^a\\left(x^2-2x\\right) \\mathrm{\\,d}x$", correct: true },
            { text: "Với $a=3$ thì $S(A)=S(B)$", correct: true },
            { text: "$\\int\\limits_0^a\\left(2x-x^2\\right) \\mathrm{\\,d}x=S(A)+S(B)$", correct: false }
        ],
        explanation: "- Mệnh đề 1 SAI vì trên đoạn $[0;2]$, đồ thị $(C)$ nằm phía dưới trục hoành nên diện tích đúng phải là $S_A = \\int_0^2 (2x-x^2) \\text{d}x$.\\n- Mệnh đề 2 ĐÚNG vì trên $[2;a]$ đồ thị nằm phía trên trục hoành.\\n- Mệnh đề 3 ĐÚNG vì tính được $S_A = \\dfrac{4}{3}$, $S_B = \\dfrac{a^3}{3}-a^2+\\dfrac{4}{3}$. Khi $a=3 \\Rightarrow S_B = \\dfrac{4}{3} = S_A$.\\n- Mệnh đề 4 SAI vì tích phân đi từ 0 đến $a$ sẽ bằng $-S_A + S_B$ do dấu của hàm số trên từng miền."
    },
    {
        q: "Trong cảnh dựng phim có một ngôi nhà, mái nhà là hình chóp tứ giác đều $S.ABCD$ có chiều cao 2 mét. Trong hệ trục tọa độ $Oxyz$ (đơn vị mét) có các đỉnh đáy là $A(6;4;2)$, $B(6;6;2)$, $C(4;6;2)$ và $D(4;4;2)$, trong đó $S$ là đỉnh của mái nhà. Xét tính đúng sai của các khẳng định sau:",
        image: "images/2612OnTNDe2/2612OnTNDe2DS3.png",
        sub_questions: [
            { text: "Mặt nghiêng của mái nhà $(SBC)$ tạo với mặt phẳng $(ABCD)$ góc $\\alpha$ thì $\\tan \\alpha = 2$", correct: true },
            { text: "Tọa độ đỉnh của mái nhà là $S(5;4;5)$", correct: false },
            { text: "Một đèn chiếu sáng được đặt tại vị trí $L(5;10;2)$ để chiếu sáng mái nhà từ bên phải. Một màn chắn trùng với mặt phẳng $Oxz$, trên đó xuất hiện bóng của mái nhà có diện tích bằng 10 m$^2$", correct: true },
            { text: "Đáy của mái nhà nằm trên mặt phẳng $z-2=0$", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì gọi $M(5;6;2)$ là trung điểm $BC$, tâm đáy $H(5;5;2)$, góc nhị diện là $\\widehat{SMH}=\\alpha \\Rightarrow \\tan \\alpha = \\dfrac{SH}{HM} = \\dfrac{2}{1} = 2$.\\n- Mệnh đề 2 SAI vì đỉnh hình chóp đều có cấu trúc tọa độ thẳng đứng từ tâm đáy: $S = (x_H; y_H; z_H + h) = (5; 5; 2+2) = (5;5;4)$.\\n- Mệnh đề 3 ĐÚNG vì bóng thu được trên mặt phẳng $y=0$ ($Oxz$) là tam giác $S'B'C'$ có đỉnh chiếu thành $S'(5;0;6)$ và hai điểm đáy chiếu thành $B'(7,5;0;2)$, $C'(2,5;0;2)$. Diện tích tam giác bóng là $\\dfrac{1}{2} \\cdot |7,5-2,5| \\cdot (6-2) = 10$ m$^2$.\\n- Mệnh đề 4 ĐÚNG vì cao độ bốn điểm đáy đều có chung thông số $z=2$ nên mặt phẳng đáy là $z-2=0$."
    },
    {
        q: "Kết quả bài thi cuối kỳ môn Toán của Bình phụ thuộc vào mức độ chuyên cần. Nếu Bình chăm chỉ làm bài tập về nhà, xác suất đạt điểm Giỏi là 0,9. Nếu không chăm chỉ, xác suất này chỉ còn 0,15. Biết rằng xác suất để Bình chăm chỉ làm bài tập là 0,75. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Nếu Bình chăm chỉ làm bài tập, xác suất Bình không đạt điểm Giỏi là 10%", correct: true },
            { text: "Xác suất Bình không chăm chỉ làm bài tập và đạt điểm Giỏi là 0,25", correct: false },
            { text: "Xác suất để Bình đạt điểm Giỏi trong kỳ thi này là 0,7125", correct: true },
            { text: "Biết rằng Bình đã đạt điểm Giỏi, xác suất Bình đã thực sự chăm chỉ làm bài tập là khoảng 94,74%", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì $P(\\overline{B}|A) = 1 - P(B|A) = 1 - 0,9 = 0,1 = 10\%$.\\n- Mệnh đề 2 SAI vì xác suất đồng thời: $P(\\overline{A} \\cap B) = P(\\overline{A}) \\cdot P(B|\\overline{A}) = 0,25 \\cdot 0,15 = 0,0375$.\\n- Mệnh đề 3 ĐÚNG vì áp dụng công thức xác suất toàn phần: $P(B) = 0,75 \\cdot 0,9 + 0,25 \\cdot 0,15 = 0,7125$.\\n- Mệnh đề 4 ĐÚNG vì theo định lý Bayes: $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0,75 \\cdot 0,9}{0,7125} \\approx 94,74\\%$."
    }
];

window.quizData['on-tn-de-2-2612_p3'] = [
    {
        q: "Cho hình chóp $S.ABCD$ có thể tích bằng $3a^3$ và mặt đáy $ABCD$ là hình bình hành. Biết diện tích tam giác $SAB$ bằng $\\dfrac{a^2\\sqrt{3}}{4}$, khoảng cách giữa $SB$ và $CD$ bằng $m \\times a$ với $m \\in \\mathbb{R}$. Tính giá trị $m$ (làm tròn kết quả đến hàng phần mười).",
        answer: "10.4",
        explanation: "Vì $CD \\parallel AB$ nên $CD \\parallel (SAB)$, suy ra $d(CD, SB) = d(CD, (SAB)) = d(D, (SAB))$.\\nThể tích khối chóp tứ giác là $V_{S.ABCD} = 3a^3$, phân tách khối chóp làm hai phần bằng nhau dựa vào mặt phẳng chéo tam giác, ta có thể tích khối chóp tam giác: $V_{D.SAB} = \\dfrac{1}{2}V_{S.ABCD} = \\dfrac{3a^3}{2}$.\\nMặt khác, công thức tính diện tích đáy chóp tam giác: $V_{D.SAB} = \\dfrac{1}{3} \\cdot d(D, (SAB)) \\cdot S_{SAB} \\Leftrightarrow \\dfrac{3a^3}{2} = \\dfrac{1}{3} \\cdot (m \\cdot a) \\cdot \\dfrac{a^2\\sqrt{3}}{4} \\Leftrightarrow m = 6\\sqrt{3} \\approx 10,4$."
    },
    {
        q: "Bạn Cường thực hiện thiết kế một logo hình con mắt cho một phòng khám nhãn khoa. Logo là một hình phẳng giới hạn bởi hai parabol $y=f(x)$ và $y=g(x)$ có các kích thước như hình vẽ dưới đây (phần được tô màu đen) và một hình tròn có bán kính bằng 0,5 dm ở giữa là phần con ngươi (phần được tô màu xanh), đơn vị trên mỗi trục tọa độ là đề-xi-mét. Biết rằng chi phí để sơn phần con ngươi hình tròn màu xanh là 25.000 đồng/dm$^2$ và chi phí để sơn phần còn lại màu đen là 20.000 đồng/dm$^2$. Chi phí để sơn logo trên là bao nhiêu nghìn đồng? (Kết quả làm tròn đến hàng đơn vị).",
        image: "images/2612OnTNDe2/2612OnTNDe2TLN2.png",
        answer: "200",
        explanation: "Xác định parabol phía trên đi qua $(-2;1), (0;2), (2;1) \\Rightarrow f(x) = -\\dfrac{1}{4}x^2+2$. Parabol phía dưới đi qua $(-2;0), (0;-1), (2;0) \\Rightarrow g(x) = \\dfrac{1}{4}x^2-1$.\\nGiao điểm của hai đường cong: $f(x)=g(x) \\Leftrightarrow x = \\pm \\sqrt{6}$.\\nDiện tích hình mắt tổng thể: $S_2 = \\int_{-\\sqrt{6}}^{\\sqrt{6}} (f(x)-g(x)) \\text{d}x$. Diện tích con ngươi hình tròn: $S_1 = \\pi \\cdot 0,5^2 = 0,25\\pi$.\\nTổng chi phí tính toán: $T = S_1 \\cdot 25 + (S_2 - S_1) \\cdot 20 \\approx 200$ nghìn đồng."
    },
    {
        q: "Bạn An có 9 viên bi được đánh số từ 1 đến 9, bạn Bình có 8 viên bi được đánh số từ 1 đến 8. Hai bạn cùng chơi một trò chơi bằng cách mỗi bạn bốc ngẫu nhiên ra 4 viên bi và ghép lại theo thứ tự giảm dần để được số tự nhiên có 4 chữ số. Người thắng cuộc là người có số lớn hơn. Tính xác suất để bạn An không bốc được viên bi số 9, biết rằng bạn An thắng bạn Bình. (Kết quả làm tròn đến hàng phần trăm).",
        answer: "0.38",
        explanation: "Gọi $A$ là biến cố 'An thắng Bình', $B$ là biến cố 'An không chọn được số 9'. Số cách bốc của An là $C_9^4=126$, của Bình là $C_8^4=70$.\\n- TH1: An chọn được số 9 ($56$ cách), chắc chắn An thắng Bình vì số của An luôn khởi đầu bằng 9, số Bình tối đa bắt đầu bằng 8 $\\Rightarrow 56 \\cdot 70 = 3920$ kết quả thắng.\\n- TH2: An không chọn được số 9 ($70$ cách), hai bạn bốc ngẫu nhiên từ tập giống nhau gồm 8 số. Tổng số kết quả là $70 \\cdot 70 = 4900$. Số trường hợp hòa là 70. Do đối xứng, số trường hợp An thắng bằng Bình thắng: $\\dfrac{4900-70}{2} = 2415$.\\nTổng số trường hợp An thắng: $n(A) = 3920 + 2415 = 6335$. Số trường hợp An thắng mà không có số 9 là $n(A \\cap B) = 2415$.\\nXác suất có điều kiện: $P(B|A) = \\dfrac{2415}{6335} = \\dfrac{69}{181} \\approx 0,38$."
    },
    {
        q: "Người ta cần cắt một tấm tôn có hình dạng là một elip với độ dài trục lớn bằng 12, độ dài trục bé bằng 6 để được một tấm tôn có dạng hình chữ nhật nội tiếp elip. Sau đó gò tấm tôn hình chữ nhật đó thu được một hình trụ không có đáy như hình vẽ dưới đây. Diện tích xung quanh của khối trụ thu được đạt giá trị lớn nhất khi chiều cao $h$ của hình trụ bằng bao nhiêu? (Làm tròn kết quả đến hàng phần mười).",
        image: "images/2612OnTNDe2/2612OnTNDe2TLN4.png",
        answer: "4.2",
        explanation: "Phương trình trục elip gắn hệ tọa độ: $\\dfrac{x^2}{36} + \\dfrac{y^2}{9} = 1$. Gọi kích thước hình chữ nhật nội tiếp elip là $2x$ và $2y$ với chiều cao tấm tôn tương ứng trụ đứng là $h=2y$.\\nDiện tích xung quanh hình trụ bằng diện tích hình chữ nhật tấm tôn: $S = 2x \\cdot 2y = 4xy$.\\nÁp dụng bất đẳng thức Cauchy: $1 = \\dfrac{x^2}{36} + \\dfrac{y^2}{9} \\ge 2\\sqrt{\\dfrac{x^2y^2}{324}} = \\dfrac{xy}{9} \\Rightarrow xy \\le 9 \\Rightarrow S \\le 36$.\\nDấu bằng diện tích tối đa xảy ra khi $\\dfrac{x^2}{36} = \\dfrac{y^2}{9} = \\dfrac{1}{2} \\Rightarrow y^2 = 4,5 \\Rightarrow y = \\sqrt{4,5}$.\\nChiều cao hình trụ tối ưu: $h = 2y = 2\\sqrt{4,5} = \\sqrt{18} \\approx 4,2$."
    },
    {
        q: "Trong hệ trục tọa độ $Oxyz$, cho ba điểm $A(5;-2;0)$, $B(4;5;-2)$ và $C(0;3;2)$. Điểm $M$ di chuyển trên trục $Ox$. Đặt $Q = 2\\left|\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC}\\right| + 3\\left|\\overrightarrow{MB} + \\overrightarrow{MC}\\right|$. Biết giá trị nhỏ nhất của $Q$ có dạng $a\\sqrt{b}$ trong đó $a, b \\in \\mathbb{N}$ và $b$ là số nguyên tố. Tính $a+b$.",
        answer: "43",
        explanation: "Gọi trọng tâm tam giác $ABC$ là $G(3;2;0)$, trung điểm $BC$ là $K(2;4;0)$.\\nThu gọn biểu thức bằng các điểm cố định: $Q = 2|3\\overrightarrow{MG}| + 3|2\\overrightarrow{MK}| = 6(MG + MK)$.\\nĐiểm $M(x;0;0) \\in Ox \\Rightarrow MG = \\sqrt{(x-3)^2+4}$, $MK = \\sqrt{(x-2)^2+16}$.\\nMô hình hóa hình học trong mặt phẳng tọa độ phẳng với biến $x$: tìm giá trị nhỏ nhất của tổng khoảng cách từ $M(x;0)$ tới $E(3;2)$ và $F(2;-4)$. Vì hai điểm nằm về hai phía so với trục hoành nên giá trị nhỏ nhất của $ME+MF$ là đoạn thẳng nối liền $EF = \\sqrt{(2-3)^2+(-4-2)^2} = \\sqrt{37}$.\\nDo đó $Q_{\\min} = 6\\sqrt{37} \\Rightarrow a=6, b=37$. Vậy $a+b = 6+37=43$."
    },
    {
        q: "Kết quả $(b ; c)$ của việc gieo một con súc sắc cân đối và đồng chất hai lần (trong đó $b$ là số chấm xuất hiện trong lần gieo đầu, $c$ là số chấm xuất hiện ở lần gieo thứ hai) được thay vào phương trình $\\dfrac{x^2+b x+c}{x+1}=0 \\quad (*)$. Xác suất để phương trình $(*)$ vô nghiệm là bao nhiêu? (Kết quả làm tròn đến hàng phần mười).",
        answer: "0.5",
        explanation: "Không gian mẫu $n(\\Omega) = 6 \\cdot 6 = 36$. Điều kiện phương trình xác định: $x \\neq -1$.\\nPhương trình vô nghiệm khi tử số $x^2+bx+c=0\\ (1)$ vô nghiệm hoặc có nghiệm duy nhất bị loại bằng $-1$.\\n- TH1: $(1)$ vô nghiệm $\\Leftrightarrow \\Delta = b^2 - 4c < 0 \\Leftrightarrow b^2 < 4c$. Đếm các cặp nghiệm $(b,c)$ thỏa mãn điều kiện mặt súc sắc gồm: $b=1$ ($6$ cặp), $b=2$ ($5$ cặp), $b=3$ ($4$ cặp), $b=4$ ($2$ cặp) $\\Rightarrow 17$ trường hợp.\\n- TH2: $(1)$ có nghiệm duy nhất kép $x=-1 \\Leftrightarrow (x+1)^2 = x^2+2x+1=0 \\Rightarrow b=2, c=1$ (Thỏa mãn $1$ cặp).\\nTổng số kết quả thuận lợi: $n(A) = 17 + 1 = 18$. Xác suất thu được: $P(A) = \\dfrac{18}{36} = 0,5$."
    }
];