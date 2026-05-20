// DỮ LIỆU ĐỀ 12 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-12-2612_p1'] = [
    {
        q: "Cho hàm số $f(x)$ xác định trên $\\mathbb{R}$ thỏa mãn đồng thời hai điều kiện $f(x)$ là hàm số lẻ và $f(x)=x^2$ với mọi $x \\leq 0$. Giá trị của $f(2)$ bằng",
        options: [
            "$-4$",
            "$-2$",
            "$0$",
            "$4$"
        ],
        answer: 0,
        explanation: "Do $f(x)$ là hàm số lẻ nên $f(2) = -f(-2)$.\\nMặt khác, với $x \\le 0$ ta có $f(x)=x^2 \\Rightarrow f(-2) = (-2)^2 = 4$.\\nSuy ra: $f(2) = -4$."
    },
    {
        q: "Tập nghiệm của phương trình $\\cot x=-1$ là",
        options: [
            "$S=\\left\\{\\dfrac{\\pi}{4}+k 2 \\pi, k \\in \\mathbb{Z}\\right\\}$",
            "$S=\\left\\{\\dfrac{\\pi}{4}+k \\pi, k \\in \\mathbb{Z}\\right\\}$",
            "$S=\\left\\{\\dfrac{3 \\pi}{4}+k 2 \\pi, k \\in \\mathbb{Z}\\right\\}$",
            "$S=\\left\\{\\dfrac{3 \\pi}{4}+k \\pi, k \\in \\mathbb{Z}\\right\\}$"
        ],
        answer: 3,
        explanation: "Ta có: $\\cot x=-1 \\Leftrightarrow \\cot x=\\cot \\dfrac{3 \\pi}{4} \\Leftrightarrow x=\\dfrac{3 \\pi}{4}+k \\pi, k \\in \\mathbb{Z}$."
    },
    {
        q: "Giá trị cực tiểu của hàm số $y=4x^3-6x^2+11$ bằng",
        options: [
            "$0$",
            "$1$",
            "$9$",
            "$11$"
        ],
        answer: 2,
        explanation: "Ta có $y'=12x^2-12x=0 \\Leftrightarrow \\left[ \\begin{array}{l} x=0 \\\\ x=1 \\end{array} \\right.$.\\nQua $x=1$, $y'$ đổi dấu từ âm sang dương nên hàm số đạt cực tiểu tại $x=1$. Giá trị cực tiểu tương ứng là $y(1) = 4(1)^3-6(1)^2+11 = 9$."
    },
    {
        q: "Hàm số $y=-2x^3+9x^2+24x-114$ đồng biến trên khoảng nào dưới đây?",
        options: [
            "$(-1; 4)$",
            "$(-4; -1)$",
            "$(-\\infty;-1)$",
            "$(4; +\\infty)$"
        ],
        answer: 0,
        explanation: "Ta có $y'=-6x^2+18x+24$. Giải phương trình đạo hàm: $y'=0 \\Leftrightarrow \\left[ \\begin{array}{l} x=-1 \\\\ x=4 \\end{array} \\right$.\\nTrong khoảng $(-1; 4)$, đạo hàm $y' > 0$ (hệ số $a=-6<0$ nên trong khoảng hai nghiệm mang dấu dương). Vậy hàm số đồng biến trên khoảng $(-1; 4)$."
    },
    {
        q: "Cho hàm số $f(x)$ liên tục trên $[-1; 5]$ and có đồ thị như hình vẽ. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và nhỏ nhất của hàm số trên $[-1 ; 5]$. Giá trị của $M-m$ bằng",
        image: "images/2612OnTNDe12/2612OnTNDe12TN5.png",
        options: [
            "$1$",
            "$4$",
            "$5$",
            "$6$"
        ],
        answer: 2,
        explanation: "Dựa vào đồ thị hàm số trên đoạn $[-1; 5]$, ta xác định điểm cao nhất và điểm thấp nhất: Giá trị lớn nhất $M=3$ (tại $x \\approx 4,31$) và giá trị nhỏ nhất $m=-2$ (tại $x=2$).\\nHiệu số: $M-m = 3 - (-2) = 5$."
    },
    {
        q: "Tiệm cận ngang của đồ thị hàm số $y=\\dfrac{2x-4}{x+2}$ là đường thẳng có phương trình",
        options: [
            "$y=2$",
            "$y=-2$",
            "$x=2$",
            "$x=-2$"
        ],
        answer: 0,
        explanation: "Ta lấy giới hạn vô cực: $\\lim\\limits_{x\\to+\\infty}\\dfrac{2x-4}{x+2}=2$. Do đó đường thẳng $y=2$ là đường tiệm cận ngang của đồ thị hàm số."
    },
    {
        q: "Hướng tới kỳ thi tốt nghiệp THPT, học sinh hai lớp chất lượng cao 12A và 12B tham gia một kỳ thi thử môn Toán. Kết quả theo các khoảng điểm được ghi nhận ở bảng sau: <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Điểm</td><td>$[5; 6)$</td><td>$[6; 7)$</td><td>$[7; 8)$</td><td>$[8; 9)$</td><td>$[9; 10]$</td></tr><tr><td>Lớp 12A</td><td>5</td><td>11</td><td>13</td><td>8</td><td>3</td></tr><tr><td>Lớp 12B</td><td>3</td><td>5</td><td>22</td><td>2</td><td>8</td></tr></table> Nhận định nào sau đây đúng khi ước lượng theo công thức mẫu số liệu ghép nhóm?",
        options: [
            "Lớp 12B có điểm trung bình cao hơn và độ phân tán điểm cao hơn lớp 12A",
            "Lớp 12B có điểm trung bình cao hơn và độ phân tán điểm thấp hơn lớp 12A",
            "Lớp 12B có điểm trung bình cao hơn lớp 12A, và độ phân tán điểm của hai lớp bằng nhau",
            "Lớp 12A có điểm trung bình cao hơn lớp 12B, và độ phân tán điểm của hai lớp bằng nhau"
        ],
        answer: 2,
        explanation: "Tính toán theo các giá trị đại diện (5,5; 6,5; 7,5; 8,5; 9,5):\\n- Lớp 12A: $\\overline{x}_A = 7,325$; phương sai $s_A^2 = 1,244375$.\\n- Lớp 12B: $\\overline{x}_B = 7,675$; phương sai $s_B^2 = 1,244375$.\\nVì $\\overline{x}_A < \\overline{x}_B$ và $s_A^2 = s_B^2$ (độ lệch chuẩn bằng nhau), nên lớp 12B có điểm trung bình cao hơn lớp 12A và độ phân tán điểm của hai lớp là bằng nhau."
    },
    {
        q: "Cho hình chóp $S.ABCD$ có đáy là hình thang $AD\\parallel BC$, $AD>BC$. Gọi $I$ là giao điểm của $AB$ và $CD$, $O$ là giao điểm $AC$ và $BD$. Giao tuyến của hai mặt phẳng $(SAD)$ và $(SBC)$ là đường thẳng",
        options: [
            "$SI$",
            "$SO$",
            "$IO$",
            "đi qua $S$ và song song với $AD$"
        ],
        answer: 3,
        explanation: "Xét hai mặt phẳng $(SAD)$ và $(SBC)$, ta có điểm chung đầu tiên là $S$.\\nMặt khác, hai mặt phẳng chứa hai đường thẳng song song với nhau là $AD \\parallel BC$.\\nTheo tính chất giao tuyến song song, giao tuyến của chúng phải là đường thẳng đi qua điểm chung $S$ và song song với cả $AD$ và $BC$."
    },
    {
        q: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật và $SA \\perp AD$. Khi đó",
        options: [
            "$(SAC) \\perp(SAB)$",
            "$(SCD) \\perp(SAB)$",
            "$(SBD) \\perp(SAB)$",
            "$(SBC) \\perp(SAB)$"
        ],
        answer: 3,
        explanation: "Ta có $AD \\parallel BC$ (do đáy là hình chữ nhật). Mà $AD \\perp SA \\Rightarrow BC \\perp SA$.\\nLại có $BC \\perp AB$ (tính chất hình chữ nhật). Do đó $BC \\perp (SAB)$.\\nVì đường thẳng $BC \\perp (SAB)$ và $BC \\subset (SBC)$ nên theo tiêu chuẩn vuông góc giữa hai mặt phẳng, ta có $(SBC) \\perp (SAB)$."
    },
    {
        q: "Hàm số nào dưới đây có đồ thị như đường cong trong hình bên?",
        image: "images/2612OnTNDe12/2612OnTNDe12TN10.png",
        options: [
            "$y=\\dfrac{x^2-2x+3}{x-1}$",
            "$y=\\dfrac{x+1}{x-1}$",
            "$y=x^3-3x-1$",
            "$y=x^2+x-1$"
        ],
        answer: 2,
        explanation: "Đường cong đồ thị không có đường tiệm cận đứng hay ngang, đồng thời có hình dáng nét uốn lượn đặc trưng của hàm bậc ba hệ số $a>0$. Do đó chỉ có phương án $y=x^3-3x-1$ là phù hợp."
    },
    {
        q: "Cho $A$, $B$ là hai biến cố xung khắc. Biết $\\mathrm{P}(A)=\\dfrac{1}{3}$, $\\mathrm{P}(B)=\\dfrac{1}{4}$. Tính $\\mathrm{P}(A \\cup B)$",
        options: [
            "$\\dfrac{7}{12}$",
            "$\\dfrac{1}{12}$",
            "$\\dfrac{1}{7}$",
            "$\\dfrac{1}{2}$"
        ],
        answer: 0,
        explanation: "Vì hai biến cố $A$ và $B$ là hai biến cố xung khắc nên áp dụng công thức cộng xác suất hệ quả: $\\mathrm{P}(A \\cup B) = \\mathrm{P}(A) + \\mathrm{P}(B) = \\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{7}{12}$."
    },
    {
        q: "Cho hình lập phương $ABCD.A'B'C'D'$ có độ dài mỗi cạnh bằng $1$. Tính độ dài của $\\left|\\overrightarrow{AB}+\\overrightarrow{CC'}\\right|$.",
        image: "images/2612OnTNDe12/2612OnTNDe12TN12.png",
        options: [
            "$\\sqrt{3}$",
            "$\\sqrt{2}$",
            "$1$",
            "$2$"
        ],
        answer: 1,
        explanation: "Trong hình lập phương, ta có vectơ bằng nhau: $\\overrightarrow{CC'} = \\overrightarrow{AA'}$.\\nThay vào biểu thức: $\\left|\\overrightarrow{AB}+\\overrightarrow{CC'}\\right| = \\left|\\overrightarrow{AB}+\overrightarrow{AA'}\\right| = \\left|\\overrightarrow{AB'}\\right| = AB'$.\\nXét tam giác vuông $ABB'$ tại $B$, ta tính độ dài đường chéo mặt bên: $AB' = \\sqrt{AB^2+BB'^2} = \\sqrt{1^2+1^2} = \\sqrt{2}$."
    }
];

window.quizData['on-tn-de-12-2612_p2'] = [
    {
        q: "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có bảng biến thiên. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Đồ thị hàm số đã cho có hai đường tiệm cận ngang", correct: true },
            { text: "Giá trị nhỏ nhất của hàm số trên $(-\\infty ;+\\infty)$ bằng 8", correct: true },
            { text: "Hàm số đồng biến trên khoảng $(8 ; 38)$", correct: false },
            { text: "Giá trị lớn nhất của hàm số trên $\\mathbb{R}$ bằng 142", correct: false }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì có giới hạn cực biên: $\\lim\\limits_{x \\to-\\infty} f(x)=142 \\Rightarrow y=142$ là một tiệm cận ngang, và $\\lim\\limits_{x \\to+\\infty} f(x)=14 \\Rightarrow y=14$ là tiệm cận ngang thứ hai.\\n- Mệnh đề 2 ĐÚNG vì dựa vào bảng biến thiên, điểm cực tiểu $f(-1)=8$ cũng chính là giá trị thấp nhất của hàm số trên $\\mathbb{R}$.\\n- Mệnh đề 3 SAI vì hàm số chỉ đồng biến trên miền tạo bởi khoảng nghiệm đạo hàm dương là $(-1; 1)$. Khoảng dữ liệu $(8;38)$ không nằm trong miền này.\\n- Mệnh đề 4 SAI vì $\\lim\\limits_{x \\to-\\infty} f(x)=142$ nhưng đồ thị chỉ tiến sát đến chứ không chạm vào, đồng thời giá trị hàm số luôn nhỏ hơn 142 nên hàm số không tồn tại GTLN trên $\\mathbb{R}$."
    },
    {
        q: "Trong một thử nghiệm ô tô xuất phát từ trạng thái nghỉ. Người lái điều khiển xe đạt vận tốc cực đại tại $t = 18$ giây, rồi giảm tốc và dừng hẳn. Toàn bộ quá trình kéo dài 50 giây. Đồ thị vận tốc $v(t)$ (m/s) theo thời gian $t$ (s) như hình vẽ. Giai đoạn 1 là $[0;24]$ có đồ thị parabol đỉnh $I(18;27)$ qua $O$; giai đoạn 2 là $(24;50]$ có đồ thị là đoạn thẳng $AB$ với $A(24;24)$ và $B(50;0)$. Xét tính đúng sai:",
        image: "images/2612OnTNDe12/2612OnTNDe12DS2.png",
        sub_questions: [
            { text: "Trong 24 giây đầu tiên, vận tốc của ô tô luôn tăng", correct: false },
            { text: "Trong 24 giây đầu tiên, có một thời điểm mà gia tốc của ô tô bằng $2 \\, \\text{m/s}^2$", correct: true },
            { text: "Độ lớn gia tốc của ô tô ngay trước thời điểm kết thúc giai đoạn 1 ($t = 24$ giây) lớn hơn độ lớn gia tốc của ô tô trong suốt giai đoạn 2", correct: true },
            { text: "Quãng đường xe đi được trong 26 giây cuối lớn hơn 70% quãng đường xe chạy trong 24 giây đầu tiên", correct: false }
        ],
        explanation: "- Mệnh đề 1 SAI vì từ giây thứ 18 đến giây thứ 24, vận tốc xe đồ thị đi xuống, tức là vận tốc giảm dần.\\n- Mệnh đề 2 ĐÚNG vì thiết lập parabol dạng đỉnh qua $O$: $v(t) = -\\dfrac{1}{12}t^2+3t \\Rightarrow$ gia tốc $a(t) = v'(t) = -\\dfrac{1}{6}t+3$. Giải hệ $a(t) = 2 \\Leftrightarrow t = 6$ giây (thỏa mãn thuộc khoảng $[0;24]$).\\n- Mệnh đề 3 ĐÚNG vì độ lớn gia tốc cuối giai đoạn 1 là $|a(24)| = |-\\dfrac{24}{6}+3| = 1\\text{ m/s}^2$. Phương trình đường thẳng giai đoạn 2 có hệ số góc cố định $\\Rightarrow$ gia tốc không đổi là $|a_2| = \\dfrac{24-0}{50-24} = \\dfrac{12}{13}\\text{ m/s}^2$. Do $1 > \\dfrac{12}{13}$ nên khẳng định đúng.\\n- Mệnh đề 4 SAI vì quãng đường giai đoạn đầu tính bằng tích phân $s_1 = \\int_{0}^{24} v(t)\\text{d}t = 480$ m $\\Rightarrow 70\\% s_1 = 336$ m. Quãng đường trong 26 giây cuối chính là diện tích tam giác vuông giai đoạn 2 từ 24 đến 50: $s_2 = \\dfrac{1}{2} \\cdot (50-24) \\cdot 24 = 312$ m. Do $312 < 336$ nên khẳng định sai."
    },
    {
        q: "Một phòng trưng bày nghệ thuật dạng hình hộp chữ nhật $ABCD.A'B'C'D'$ với kích thước: dài $AD = 8$ mét, rộng $AB = 6$ mét, cao $AA'= 4$ mét. Hệ trục tọa độ $Oxyz$ đặt gốc tại $A(0;0;0)$, các trục $Ox, Oy, Oz$ trùng với các cạnh $AD, AB, AA'$. Hệ thống gồm một camera gắn tại tâm $S$ của trần $A'B'C'D'$, một cảm biến tại $C$ sàn đáy, và camera đang hướng về tâm bức tranh $P$ đặt tại chính giữa bức tường $CDD'C'$. Xét tính đúng sai:",
        sub_questions: [
            { text: "Tọa độ vị trí lắp đặt camera là $S(4;3;4)$", correct: true },
            { text: "Khoảng cách từ camera đến tâm bức tranh P là 5 mét", correct: false },
            { text: "Có yêu cầu góc tạo bởi trục thẳng đứng của giá treo camera (phương song song $Oz$, hướng xuống) và tia nhìn từ camera đến tâm bức tranh ($SP$) phải nhỏ hơn $60^\\circ$. Thiết kế hiện tại thỏa mãn yêu cầu này", correct: false },
            { text: "Để tránh chói, kỹ sư nắp thêm một trục đỡ đèn chiếu sáng nghệ thuật vuông góc với mặt phẳng $(SPC)$. Chọn một vectơ pháp tuyến $\\overrightarrow{u}$ có giá song song trục đèn, ta có thể chọn $\\overrightarrow{u}(3;4;6)$", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì tâm trần $S$ là trung điểm của đường chéo $A'C'$ với $A'(0;0;4)$ và $C'(8;6;4) \\Rightarrow S(4;3;4)$.\\n- Mệnh đề 2 SAI vì tâm tranh $P$ thuộc mặt phẳng $x=8$, tọa độ tâm hình chữ nhật là $P(8;3;2) \\Rightarrow SP = \\sqrt{(8-4)^2+(3-3)^2+(2-4)^2} = \\sqrt{20} = 2\\sqrt{5}$ m.\\n- Mệnh đề 3 SAI vì vectơ hướng thẳng đứng đi xuống là $\\overrightarrow{n} = (0;0;-1)$. Có $\\overrightarrow{SP} = (4;0;-2)$. Góc phẳng giữa chúng: $\\cos\\varphi = \\dfrac{|-2 \\cdot (-1)|}{\\sqrt{16+4}\\sqrt{1}} = \\dfrac{2}{\\sqrt{20}} = \\dfrac{1}{\\sqrt{5}} \\Rightarrow \\varphi \\approx 63,43^\\circ > 60^\\circ$ nên thiết kế không thỏa mãn.\\n- Mệnh đề 4 ĐÚNG vì tính tích có hướng làm vectơ pháp tuyến mặt phẳng: $\\overrightarrow{SP} = (4;0;-2)$ và $\\overrightarrow{SC} = (4;3;-4)$ (với $C(8;6;0)$) $\\Rightarrow [\\overrightarrow{SP}, \\overrightarrow{SC}] = (6;8;12)$. Rút gọn tỷ lệ chia đôi ta được vectơ chỉ phương trục đèn là $\\overrightarrow{u} = (3;4;6)$."
    },
    {
        q: "Cho hình chóp $S.ABC$ có mặt bên $(SAB)$ vuông góc với mặt đáy và tam giác $SAB$ đều cạnh $2a$. Lấy $H$ là trung điểm của $AB$. Biết tam giác $ABC$ vuông tại $C$ và cạnh $AC=a\\sqrt{3}$. Xét tính đúng sai:",
        sub_questions: [
            { text: "$SH \\perp (ABC)$", correct: true },
            { text: "$(SHC) \\perp (SAC)$", correct: false },
            { text: "$\\mathrm{d}\\left(C, (SAB)\\right) = \\dfrac{a\\sqrt{3}}{3}$", correct: false },
            { text: "Thể tích của khối chóp $S.ABC$ bằng $\\dfrac{a^3}{6}$", correct: false }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì tam giác $SAB$ đều có trung tuyến $SH$ đồng thời là đường cao $\\Rightarrow SH \\perp AB$. Do mặt bên vuông góc đáy nên đường thẳng vuông góc giao tuyến này sẽ vuông góc mặt đáy $(ABC)$.\\n- Mệnh đề 2 SAI vì tính toán hình học phẳng, tam giác đáy không thỏa mãn tính chất góc để hai mặt bên vuông góc nhau.\\n- Mệnh đề 3 SAI vì do $(SAB) \\perp (ABC)$ theo giao tuyến $AB$ nên khoảng cách từ $C$ đến mặt bên bằng đường cao hạ từ $C$ của đáy tam giác vuông $ABC$. Có $AB=2a, AC=a\\sqrt{3} \\Rightarrow BC = a$. Chiều cao đáy $CH = \\dfrac{AC \\cdot BC}{AB} = \\dfrac{a\\sqrt{3}}{2}$.\\n- Mệnh đề 4 SAI vì diện tích đáy $S_{ABC} = \\dfrac{1}{2}a^2\\sqrt{3}$, chiều cao chóp $SH = a\\sqrt{3} \\Rightarrow V = \\dfrac{1}{3} \\cdot \\dfrac{a^2\\sqrt{3}}{2} \\cdot a\\sqrt{3} = \\dfrac{a^3}{2}$."
    }
];

window.quizData['on-tn-de-12-2612_p3'] = [
    {
        q: "Hàm số $y=-11x^4+4x^2+82$ đạt cực tiểu tại điểm $x$ bằng bao nhiêu?",
        answer: "0",
        explanation: "Ta xét đạo hàm trùng phương: $y' = -44x^3+8x = -4x(11x^2-2) = 0 \\Leftrightarrow x=0$ hoặc $x=\\pm\\sqrt{\\dfrac{2}{11}}$.\\nXét dấu đạo hàm hoặc lập bảng biến thiên, tại điểm $x=0$ đạo hàm đổi dấu từ âm (-) sang dương (+). Do đó hàm số đạt cực tiểu tại điểm $x=0$."
    },
    {
        q: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Gọi $I$ là tâm của mặt bên $ADD'A'$ và $K$ là trung điểm của cạnh $CC'$. Cho biết tích vô hướng $\\overrightarrow{IB} \\cdot \\overrightarrow{AK}=na^2$ với $n$ là một số thập phân. Giá trị của $n$ bằng bao nhiêu?",
        answer: "0.25",
        explanation: "Thiết lập hệ trục tọa độ đặt gốc tại $A(0;0;0)$. Trục $Ox$ dọc $AB$, trục $Oy$ dọc $AD$, trục $Oz$ dọc $AA'$. Quy ước cạnh bằng $a=1$, tọa độ các điểm tương ứng là: $B(1;0;0)$, $D(0;1;0)$, $A'(0;0;1)$, $C(1;1;0)$, $C'(1;1;1)$.\\n- Tâm mặt bên $I$ là trung điểm $A'D \\Rightarrow I\\left(0; \\dfrac{1}{2}; \\dfrac{1}{2}\\right) \\Rightarrow \\overrightarrow{IB} = \\left(1; -\\dfrac{1}{2}; -\\dfrac{1}{2}\\right)$.\\n- Điểm $K$ là trung điểm $CC' \\Rightarrow K\\left(1; 1; \\dfrac{1}{2}\\right) \\Rightarrow \\overrightarrow{AK} = \\left(1; 1; \\dfrac{1}{2}\\right)$.\\nTích vô hướng: $\\overrightarrow{IB} \\cdot \\overrightarrow{AK} = 1 \\cdot 1 + \\left(-\\dfrac{1}{2}\\right) \\cdot 1 + \\left(-\\dfrac{1}{2}\\right) \\cdot \\dfrac{1}{2} = 1 - \\dfrac{1}{2} - \\dfrac{1}{4} = 0,25 \\Rightarrow n=0,25$."
    },
    {
        q: "Bạn đang đứng điều khiển Flycam từ sân thượng một quán cà phê ở vị trí $A(10; 20; 50)$ (độ cao 50 mét so với mặt đất), đơn vị đo là mét trong hệ trục tọa độ $Oxyz$. Mục tiêu là bay thẳng đến quay cận cảnh màn trình diễn đèn LED tại thân toà tháp đối diện ở tọa độ $C(130; 180; 260)$. Do ban quản lý thiết lập vùng cấm bay xung quanh thiết bị đèn LED tâm $C$ với bán kính an toàn là 40 mét, Flycam phải dừng lại ngay khi chạm mép vùng này. Hỏi quãng đường Flycam bay được từ quán cà phê đến điểm dừng là bao nhiêu mét?",
        image: "images/2612OnTNDe12/2612OnTNDe12TLN3.png",
        answer: "250",
        explanation: "Khoảng cách thẳng tuyệt đối giữa hai điểm từ quán cà phê đến tâm tháp đèn LED là: $AC = \\sqrt{(130-10)^2+(180-20)^2+(260-50)^2} = \\sqrt{120^2+160^2+210^2} = \\sqrt{84100} = 290$ m.\\nVì Flycam phải dừng lại ngay khi chạm mép vùng cấm bay hình cầu bán kính 40m quanh tâm $C$, nên quãng đường thực tế bay được bằng hiệu khoảng cách trừ bán kính: $s = 290 - 40 = 250$ m."
    },
    {
        q: "Trong một góc nhà xưởng, nền và hai vách tường vuông góc đôi một; đỉnh cọc tiếp địa là điểm $A$ có khoảng cách vuông góc đến nền, vách 1, vách 2 lần lượt là 45 cm, 75 cm, 75 cm. Người thợ lắp một tấm ván khuôn đi qua $A$, các mép ván áp sát bịt kín vách nền tạo một khối bê tông tứ diện chóp cụt góc nhà. Tính thể tích khối bê tông nhỏ nhất thu được theo đơn vị mét khối (m$^3$, làm tròn kết quả đến hàng phần chục).",
        image: "images/2612OnTNDe12/2612OnTNDe12TLN4.png",
        answer: "1.14",
        explanation: "Gắn hệ trục tọa độ đặt gốc tại góc vách tường nền $O(0;0;0)$, ba trục trùng các đường giao tuyến. Tọa độ đỉnh cọc tiếp địa là $A(75; 75; 45)$ tính theo đơn vị centimét. Mặt phẳng ván khuôn cắt ba trục tại các điểm có độ dài $m, n, p > 0$, phương trình đoạn chắn dạng: $\\dfrac{x}{m} + \\dfrac{y}{n} + \\dfrac{z}{p} = 1$.\\nDo mặt phẳng đi qua $A$ nên ta có phương trình ràng buộc: $\\dfrac{75}{m} + \\dfrac{75}{n} + \\dfrac{45}{p} = 1$.\\nThể tích khối tứ diện bê tông: $V = \\dfrac{1}{6}mnp$. Áp dụng bất đẳng thức Cauchy (AM-GM) cho ba số dương: $1 = \\dfrac{75}{m} + \\dfrac{75}{n} + \\dfrac{45}{p} \\ge 3\\sqrt[3]{\\dfrac{75 \\cdot 75 \\cdot 45}{mnp}} \\Rightarrow 1 \\ge 27 \\cdot \\dfrac{253125}{mnp} \\Rightarrow mnp \\ge 6834375$.\\nThể tích khối bê tông nhỏ nhất bằng: $V_{\\min} = \\dfrac{1}{6} \\cdot 6834375 = 1139062,5 \\text{ cm}^3 = 1,1390625 \\text{ m}^3 \\approx 1,14 \\text{ m}^3$."
    },
    {
        q: "Một nhà máy sản xuất drone phun thuốc tự động có công suất tối đa 350 chiếc/quý. Doanh nghiệp cần xác định số lượng $x$ chiếc drone sản xuất trong quý ($x \\in \\mathbb{N}^*$) dựa theo các thông số: Giá bán mỗi chiếc tuân theo hàm cầu $P(x)=120-0{,}2x$ (triệu đồng); Chi phí vận hành cố định là 1.000 triệu đồng; Chi phí linh kiện gốc là 50 triệu đồng/chiếc, nhưng nếu quy mô lô hàng vượt trên 100 chiếc thì được giảm giá gốc linh kiện toàn bộ xuống còn 40 triệu đồng/chiếc. Hãy tính lợi nhuận thu được sau thuế lớn nhất của nhà máy là bao nhiêu triệu đồng? (Biết mức thuế suất là 10% tính trên lợi nhuận dương thu được).",
        image: "images/2612OnTNDe12/2612OnTNDe12TLN5.png",
        answer: "6300",
        explanation: "Hàm tính toán tổng doanh thu của nhà máy: $R(x) = x \\cdot P(x) = 120x - 0,2x^2$.\\n- TH1: Quy mô nhỏ $0 < x \\le 100$. Chi phí $C_1(x) = 1000 + 50x \\Rightarrow$ lợi nhuận trước thuế $T_1(x) = -0,2x^2+70x-1000$. Hàm số bậc hai đồng biến trên nửa khoảng này nên đạt cực đại tại biên $x=100 \\Rightarrow T_{1\\max} = 4000$ triệu đồng.\\n- TH2: Quy mô lớn $100 < x \\le 350$. Chi phí ưu đãi $C_2(x) = 1000 + 40x \\Rightarrow$ lợi nhuận trước thuế $T_2(x) = -0,2x^2+80x-1000$. Hàm đạt cực đại tại đỉnh parabol $x = 200$ (thỏa mãn) $\\Rightarrow T_{2\\max} = -0,2(200^2)+80(200)-1000 = 7000$ triệu đồng.\\nSo sánh thấy lợi nhuận lớn nhất trước thuế đạt 7000 triệu đồng. Sau khi khấu trừ 10% tiền thuế, lợi nhuận ròng sau thuế lớn nhất thu được thực tế là: $7000 \\cdot (1 - 0,1) = 6300$ triệu đồng."
    },
    {
        q: "Một nghệ nhân có 9 chiếc đèn lồng với độ dài dây treo (cm) lần lượt là 10, 20, 30, ..., 90. Khung treo đèn dạng tam giác đều $ABC$; gọi $M, N, P$ lần lượt là trung điểm của $AB, BC, CA$. Nghệ nhân chọn ngẫu nhiên 6 chiếc đèn và gán vào 6 vị trí trên khung. Để đạt độ cân đối hoàn hảo, yêu cầu trên mỗi cạnh, chiều dài dây treo đèn ở giữa phải bằng trung bình cộng chiều dài dây treo của hai đèn ở đầu mút cạnh. Gọi xác suất thỏa mãn là $\\mathrm{p}$. Giá trị của biểu thức $\\dfrac{6}{\\mathrm{p}}$ bằng bao nhiêu?",
        answer: "7560",
        explanation: "Số cách chọn và xếp thứ tự 6 chiếc đèn từ 9 chiếc vào 6 vị trí (không gian mẫu) là: $n(\\Omega) = A_9^6 = 60480$. Quy ước độ dài theo đơn vị chục cm là tập các số từ 1 đến 9.\\nHệ thức ràng buộc trung điểm: $2\\ell_M = \\ell_A+\\ell_B$; $2\\ell_N = \\ell_B+\\ell_C$; $2\\ell_P = \\ell_C+\\ell_A$. Cộng hệ thức cho thấy ba số ở đỉnh $\\ell_A, \\ell_B, \\ell_C$ bắt buộc phải cùng tính chẵn hoặc lẻ. Ngoài ra, ba số này không được phép lập thành cấp số cộng để tránh giá trị trung điểm bị trùng lặp với đỉnh.\\n- Chọn 3 số lẻ từ tập $\\{1,3,5,7,9\\}$ loại đi 4 bộ số tạo cấp số cộng $\\Rightarrow C_5^3 - 4 = 6$ cách chọn.\\n- Chọn 3 số chẵn từ tập $\\{2,4,6,8\\}$ loại đi 2 bộ số tạo cấp số cộng $\\Rightarrow C_4^3 - 2 = 2$ cách chọn.\\nTổng số cách chọn ra bộ 3 số ở đỉnh thỏa mãn là $6+2=8$ bộ số. Với mỗi bộ số ở đỉnh, có $3! = 6$ cách hoán vị chỗ ngồi vào ba đỉnh $A, B, C$, khi đó ba vị trí trung điểm tự động cố định giá trị duy nhất.\\nSố trường hợp thuận lợi: $n(A) = 8 \\cdot 6 = 48$. Xác suất thu được: $\\mathrm{p} = \\dfrac{48}{60480} = \\dfrac{1}{1260} \\Rightarrow \\dfrac{6}{\\mathrm{p}} = 6 \\cdot 1260 = 7560$."
    }
];