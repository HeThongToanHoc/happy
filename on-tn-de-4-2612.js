// DỮ LIỆU ĐỀ 4 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-4-2612_p1'] = [
    {
        q: "Cho cấp số nhân $\\left(u_n\\right)$ với $u_1=3$ và công bội $q=-2$. Giá trị của $u_4$ bằng",
        options: [
            "$12$",
            "$24$",
            "$-24$",
            "$-12$"
        ],
        answer: 2,
        explanation: "$u_4=u_1\\cdot q^3=3\\cdot (-2)^3=3 \\cdot (-8) = -24$."
    },
    {
        q: "Tập nghiệm $S$ của bất phương trình $\\left(\\dfrac{1}{3}\\right)^{x^2 - 4x} \\ge 27$ chứa bao nhiêu số nguyên?",
        options: [
            "$3$",
            "$1$",
            "$2$",
            "Vô số"
        ],
        answer: 0,
        explanation: "Ta có $\\left(\\dfrac{1}{3}\\right)^{x^2 - 4x} \\ge 27 \\Leftrightarrow 3^{-(x^2-4x)} \\ge 3^3 \\Leftrightarrow -x^2 + 4x \\ge 3 \\Leftrightarrow x^2 - 4x + 3 \\le 0 \\Leftrightarrow 1 \\le x \\le 3$.\\nVì $x \\in \\mathbb{Z}$ nên $x \\in \\{1; 2; 3\\}$. Vậy tập nghiệm chứa ba số nguyên."
    },
    {
        q: "Gọi $D$ là hình phẳng giới hạn bởi các đường $y = \\mathrm{e}^{2x}$, $y = 0$, $x = 0$ và $x=1$. Thể tích khối tròn xoay tạo thành khi quay $D$ quanh $Ox$ bằng",
        options: [
            "$\\pi \\int \\limits_0^1 \\mathrm{e}^{4x} \\mathrm{\\,d}x$",
            "$\\int \\limits_0^1 \\mathrm{e}^{2x} \\mathrm{\\,d}x$",
            "$\\pi \\int \\limits_0^1 \\mathrm{e}^{2x} \\mathrm{\\,d}x$",
            "$\\int \\limits_0^1 \\mathrm{e}^{4x} \\mathrm{\\,d}x$"
        ],
        answer: 0,
        explanation: "Thể tích khối tròn xoay tạo thành khi quay hình phẳng $D$ quanh trục $Ox$ được tính theo công thức: $V = \\pi \\int \\limits_{0}^{1} [f(x)]^2 \\mathrm{\\,d}x = \\pi \\int \\limits_{0}^{1} \\left(\\mathrm{e}^{2x}\\right)^2 \\mathrm{\\,d}x = \\pi \\int \\limits_{0}^{1} \\mathrm{e}^{4x} \\mathrm{\\,d}x$."
    },
    {
        q: "Cho hàm số $y=f(x)$ có bảng xét dấu đạo hàm. Mệnh đề nào sau đây đúng?",
        image: "images/2612OnTNDe4/2612OnTNDe4TN4.png",
        options: [
            "$\\max\\limits_{[-1;1]}f(x)=f(0)$",
            "$\\max\\limits_{(-\infty;-1)}f(x)=f(-1)$",
            "$\\max\\limits_{(0;+\\infty)}f(x)=f(1)$",
            "$\\min\\limits_{(0;1)}f(x)=f(0)$"
        ],
        answer: 2,
        explanation: "Dựa vào bảng xét dấu đạo hàm, hàm số đồng biến trên $(0;1)$ và nghịch biến trên $(1;+\\infty)$. Do đó, trên khoảng $(0;+\\infty)$, hàm số đạt cực đại và cũng là giá trị lớn nhất tại $x=1$. Suy ra $\\max\\limits_{(0;+\\infty)}f(x)=f(1)$."
    },
    {
        q: "Trong không gian $Oxyz$, đường thẳng đi qua hai điểm $\\mathrm{P}(1;-1;2)$ và $Q(2;0;1)$ có phương trình tham số là",
        options: [
            "$\\left\\{ \\begin{array}{l} x=2+t \\\\ y=t \\\\ z=1-t \\end{array} \\right.$",
            "$\\left\\{ \\begin{array}{l} x=1+t \\\\ y=-1+t \\\\ z=2+t \\end{array} \\right.$",
            "$\\left\\{ \\begin{array}{l} x=2-t \\\\ y=t \\\\ z=1+t \\end{array} \\right.$",
            "$\\left\\{ \\begin{array}{l} x=1+t \\\\ y=-1-t \\\\ z=2+t \\end{array} \\right.$"
        ],
        answer: 0,
        explanation: "Đường thẳng đi qua hai điểm $P$ và $Q$ nhận vectơ $\\vec{PQ}=(1;1;-1)$ làm vectơ chỉ phương. Kết hợp với việc đi qua điểm $Q(2;0;1)$, ta được phương trình tham số: $\\left\\{ \\begin{array}{l} x=2+t \\\\ y=t \\\\ z=1-t \\end{array} \\right.$."
    },
    {
        q: "Cho hàm số $f(x)=1-\\dfrac{1}{\\cos^2x}$. Khẳng định nào sau đây đúng?",
        options: [
            "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=x+\\tan x+C$",
            "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=x-\\tan x+C$",
            "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=x+\\cot x+C$",
            "$\\displaystyle\\int f(x)\\mathrm{\\,d}x=x-\\cot x+C$"
        ],
        answer: 1,
        explanation: "Áp dụng các công thức nguyên hàm cơ bản, ta có: $\\displaystyle\\int f(x)\\mathrm{\\,d}x=\\displaystyle\\int\\left(1-\\dfrac{1}{\\cos^2 x}\\right)\\mathrm{\\,d}x=x-\\tan x+C$."
    },
    {
        q: "Tập nghiệm của bất phương trình $\\log_{\\tfrac{1}{2}} (x+2)<\\log_{\\tfrac{1}{2}} (2x-3)$ là",
        options: [
            "$(5;+\\infty)$",
            "$\\left(\\dfrac{3}{2};5\\right)$",
            "$(-2;5)$",
            "$(-\\infty;5)$"
        ],
        answer: 1,
        explanation: "Do cơ số $a = \\dfrac{1}{2} < 1$ nên bất phương trình đảo chiều: $\\log_{\\tfrac{1}{2}} (x+2)<\\log_{\\tfrac{1}{2}} (2x-3) \\Leftrightarrow \\left\\{ \\begin{array}{l} x+2>2x-3 \\\\ 2x-3>0 \\end{array} \\right. \\Leftrightarrow \\left\\{ \\begin{array}{l} x<5 \\\\ x>\\dfrac{3}{2} \\end{array} \\right. \\Leftrightarrow \\dfrac{3}{2} < x < 5$."
    },
    {
        q: "Cho $\\mathrm{P}(A)=\\dfrac{2}{7}$, $\\mathrm{P}(B\\mid A)=\\dfrac{1}{4}$, $\\mathrm{P}(B\\mid \\overline{A}) = \\dfrac{1}{5}$. Giá trị $\\mathrm{P}(B \\cap \\overline{A})$ là",
        options: [
            "$\\dfrac{4}{5}$",
            "$\\dfrac{2}{35}$",
            "$\\dfrac{1}{14}$",
            "$\\dfrac{1}{7}$"
        ],
        answer: 3,
        explanation: "Ta có biến cố đối của $A$ là $\\overline{A}$ với $P(\\overline{A}) = 1 - P(A) = 1 - \\dfrac{2}{7} = \\dfrac{5}{7}$.\\nTheo công thức nhân xác suất: $P(B \\cap \\overline{A}) = P(\\overline{A}) \\cdot P(B \\mid \\overline{A}) = \\dfrac{5}{7} \\cdot \\dfrac{1}{5} = \\dfrac{1}{7}$."
    },
    {
        q: "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, cạnh $SA$ vuông góc với mặt phẳng đáy. Đường thẳng nào sau đây vuông góc với $AC$?",
        options: [
            "$SA$",
            "$AB$",
            "$BC$",
            "$SC$"
        ],
        answer: 0,
        explanation: "Vì cạnh bên $SA$ vuông góc với toàn bộ mặt phẳng đáy $(ABC)$ nên nó sẽ vuông góc với mọi đường thẳng nằm trong đáy, bao gồm cả đường thẳng $AC$. Do đó $SA \\perp AC$."
    },
    {
        q: "Một siêu thị thống kê số tiền (chục nghìn đồng) mà 44 khách hàng mua hàng ở siêu thị đó trong một ngày. Số liệu được ghi lại trong bảng sau: <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Doanh thu (chục nghìn đồng)</td><td>$[40;45)$</td><td>$[45;50)$</td><td>$[50;55)$</td><td>$[55;60)$</td><td>$[60;65)$</td><td>$[65;70)$</td></tr><tr><td>Số khách hàng</td><td>4</td><td>14</td><td>8</td><td>10</td><td>6</td><td>2</td></tr></table> Mốt của mẫu số liệu ghép nhóm trên bằng bao nhiêu?",
        options: [
            "$\\dfrac{375}{8}$",
            "$\\dfrac{385}{8}$",
            "$47{,}5$",
            "$70$"
        ],
        answer: 1,
        explanation: "Nhóm chứa mốt có tần số lớn nhất là $[45;50)$ (tần số $14$).\\nÁp dụng công thức tính mốt: $M_0 = 45 + \\dfrac{14-4}{(14-4)+(14-8)} \\cdot (50-45) = 45 + \\dfrac{10}{16} \\cdot 5 = 45 + \\dfrac{25}{8} = \\dfrac{385}{8}$."
    },
    {
        q: "Cho hàm số $y = f(x)$ có bảng biến thiên. Tổng số tiệm cận ngang và tiệm cận đứng của đồ thị hàm số đã cho là",
        image: "images/2612OnTNDe4/2612OnTNDe4TN11.png",
        options: [
            "$4$",
            "$3$",
            "$1$",
            "$2$"
        ],
        answer: 1,
        explanation: "- Vì $\\lim_{x \\to -\\infty} f(x) = 2$ nên đường thẳng $y=2$ là tiệm cận ngang.\\n- Vì $\\lim_{x \\to +\\infty} f(x) = 6$ nên đường thẳng $y=6$ là tiệm cận ngang.\\n- Vì $\\lim_{x \\to 1^+} f(x) = +\\infty$ nên đường thẳng $x=1$ là tiệm cận đứng.\\nTổng số đường tiệm cận đứng và tiệm cận ngang là 3."
    },
    {
        q: "Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh bằng 2. Gọi $M$ là trung điểm $SD$. Giá trị của $\\vec{CM}\\cdot\\vec{BA}$ bằng",
        image: "images/2612OnTNDe4/2612OnTNDe4TN12.png",
        options: [
            "$-\\sqrt{3}$",
            "$-3$",
            "$3$",
            "$\\sqrt{3}$"
        ],
        answer: 2,
        explanation: "Vì $ABCD$ là hình vuông nên $\\vec{BA} = \\vec{CD}$. Khi đó: $\\vec{CM}\\cdot\\vec{BA} = \\vec{CM}\\cdot\\vec{CD} = CM \\cdot CD \\cdot \\cos\\widehat{MCD}$.\\nTam giác $SCD$ đều vì tất cả các cạnh bằng 2, trung tuyến $CM = \\dfrac{2\\sqrt{3}}{2} = \\sqrt{3}$. Trong tam giác $SCD$, trung tuyến cũng là phân giác nên $\\widehat{MCD} = 30^\\circ$.\\nDo đó: $\\vec{CM}\\cdot\\vec{BA} = \\sqrt{3} \\cdot 2 \\cdot \\cos 30^\\circ = \\sqrt{3} \\cdot 2 \\cdot \\dfrac{\\sqrt{3}}{2} = 3$."
    }
];

window.quizData['on-tn-de-4-2612_p2'] = [
    {
        q: "Cho hàm số $f(x)=\\dfrac{-x^2+2x-4}{x-2}$. Xét tính đúng sai của các mệnh đề sau:",
        sub_questions: [
            { text: "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x=2$", correct: true },
            { text: "Phương trình $f'(x)=0$ có hai nghiệm phân biệt là 0 và 3", image: "images/2612OnTNDe4/2612OnTNDe4DS1c.png",correct: false },
            { text: "Hàm số đồng biến trên các khoảng $(0;2)$ và $(2;4)$", correct: true },
            { text: "Đồ thị hàm số nhận giao điểm $I(2;-2)$ của hai đường tiệm cận làm tâm đối xứng", image: "images/2612OnTNDe4/2612OnTNDe4DS1d.png",correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì $\\lim_{x \\to 2^+} f(x) = -\\infty$.\\n- Mệnh đề 2 SAI vì tính đạo hàm $f'(x) = \\dfrac{-x^2+4x}{(x-2)^2}=0 \\Leftrightarrow x=0$ hoặc $x=4$.\\n- Mệnh đề 3 ĐÚNG vì trên $(0;2)$ và $(2;4)$ ta có $f'(x) > 0$.\\n- Mệnh đề 4 ĐÚNG vì đồ thị hàm phân thức bậc hai trên bậc nhất luôn nhận giao điểm của tiệm cận đứng $x=2$ và tiệm cận xiên $y=-x$ làm tâm đối xứng, giao điểm này là $I(2;-2)$."
    },
    {
        q: "Một công ty khảo sát nhu cầu của 256 nhân viên mới tuyển dụng về việc quyết định chọn ở lại làm việc sau một năm hay rời đi, dựa trên việc có được tham gia đào tạo chuyên môn thường xuyên hay không. Kết quả thu được tóm tắt trong bảng. Gọi $A$ là biến cố 'Nhân viên được đào tạo chuyên môn thường xuyên' và $B$ là biến cố 'Nhân viên chọn ở lại làm việc'. Xét tính đúng sai:",
        sub_questions: [
            { text: "Xác suất một nhân viên được chọn ngẫu nhiên đã tham gia đào tạo chuyên môn thường xuyên là $\\mathrm{P}(A)=\\dfrac{152}{256}$", correct: true },
            { text: "Xác suất một nhân viên được chọn ngẫu nhiên đã chọn ở lại làm việc tại công ty sau một năm làm việc là $\\mathrm{P}(B)=\\dfrac{169}{256}$", correct: true },
            { text: "Xác suất một nhân viên được chọn ngẫu nhiên đã tham gia đào tạo chuyên môn thường xuyên và không rời công ty sau một năm làm việc là $\\mathrm{P}(A \\cap B)=\\dfrac{109}{256}$", correct: true },
            { text: "Xác suất một nhân viên được chọn ngẫu nhiên chọn ở lại làm việc tại công ty sau một năm làm việc mà người đó chưa được tham gia đào tạo chuyên môn thường xuyên là $\\mathrm{P}(B \\mid \\overline{A})=\\dfrac{60}{256}$", correct: false }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì số nhân viên được tham gia đào tạo là $109 + 43 = 152$.\\n- Mệnh đề 2 ĐÚNG vì tổng số nhân viên ở lại là $109 + 60 = 169$.\\n- Mệnh đề 3 ĐÚNG vì số nhân viên thỏa mãn cả hai điều kiện là $109$.\\n- Mệnh đề 4 SAI vì đây là xác suất có điều kiện: $\\mathrm{P}(B \\mid \\overline{A}) = \\dfrac{n(B \\cap \\overline{A})}{n(\\overline{A})} = \\dfrac{60}{60+44} = \\dfrac{60}{104}$."
    },
    {
        q: "Một lon sữa cho trẻ em được lấy ra khỏi tủ lạnh để rã đông. Nhiệt độ ban đầu của lon sữa là $-4^\\circ\\mathrm{C}$, và sau $t$ giờ, tốc độ tăng nhiệt độ của nó được cho bởi công thức $T'(t) = 7 \\cdot e^{-0{,}35 t}$ ($^\\circ\\mathrm{C}/$giờ) cho đến khi đạt nhiệt độ môi trường là $10^\\circ\\mathrm{C}$. Khi đạt $10^\\circ\\mathrm{C}$, sữa được đưa vào máy hâm với tốc độ tăng nhiệt độ $L'(t) = k \\cdot e^{-0{,}22 t}$ và được xem là đạt chuẩn ở $70^\\circ\\mathrm{C}$. Xét tính đúng sai:",
        sub_questions: [
            { text: "Sau 2 giờ, tốc độ thay đổi nhiệt độ của lon sữa bằng $3{,}48^\\circ\\mathrm{C}/$giờ (làm tròn đến hai chữ số thập phân)", correct: true },
            { text: "Nhiệt độ của lon sữa tính từ thời điểm lấy ra khỏi tủ lạnh cho đến khi đạt nhiệt độ môi trường được tính bởi công thức $T(t) = -20 \\cdot e^{-0{,}35 t}$", correct: false },
            { text: "Thời gian để lon sữa đạt nhiệt độ môi trường là 3,44 giờ (làm tròn đến hai chữ số thập phân)", correct: true },
            { text: "Nếu thời gian cần thiết để hâm nóng lon sữa đạt chuẩn là 5 phút thì hằng số $k \\in (720; 730)$", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì $T'(2) = 7 \\cdot e^{-0,35 \\cdot 2} \\approx 3,48 \, ^\\circ\\mathrm{C}/\\text{giờ}$.\\n- Mệnh đề 2 SAI vì tích phân nguyên hàm kết hợp điều kiện biên $T(0)=-4$ cho ra công thức đúng phải là $T(t) = 16 - 20 \\cdot e^{-0,35 t}$.\\n- Mệnh đề 3 ĐÚNG vì giải phương trình $16 - 20 \\cdot e^{-0,35 t} = 10 \\Rightarrow t \\approx 3,44$ giờ.\\n- Mệnh đề 4 ĐÚNG vì đổi 5 phút = $1/12$ giờ. Hàm nhiệt độ hâm nóng là $L(t) = 10 + \\dfrac{k}{0,22}(1 - e^{-0,22 t})$. Giải phương trình $L(1/12) = 70 \\Rightarrow k \\approx 726,62$ (thuộc khoảng $(720;730)$)."
    },
    {
        q: "Tháp giải nhiệt tại một nhà máy nhiệt điện có mặt cắt thẳng đứng qua trục là một hình hypebol $(H)$. Tháp cao 120 m, bán kính đáy dưới bằng 40 m. Hệ trục tọa độ $Oxy$ được thiết lập sao tháp nhận $Ox, Oy$ làm trục đối xứng, đoạn giao của tháp trên trục thực $Ox$ bằng 30 m và gốc $O$ nằm ở độ cao 80 m so với mặt đất. Xét tính đúng sai:",
        image: "images/2612OnTNDe4/2612OnTNDe4DS4.png",
        sub_questions: [
            { text: "Diện tích đáy dưới của tháp bằng $5027\\text{ m}^2$ (làm tròn đến hàng đơn vị)", correct: true },
            { text: "Các điểm $(-20; 0), (20; 0)$ thuộc hypebol $(H)$", correct: false },
            { text: "Phương trình $(H)$ là $\\dfrac{x^2}{15^2} - \\dfrac{y^2}{11520} = 1$", correct: false },
            { text: "Thể tích của tháp giải nhiệt này bằng $214414\\text{ m}^2$ (làm tròn đến hàng đơn vị)", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì đáy dưới là hình tròn bán kính $R=40$ m $\\Rightarrow S = \\pi \\cdot 40^2 \\approx 5027 \\text{ m}^2$.\\n- Mệnh đề 2 SAI vì khoảng cách giữa hai đỉnh tháp trên trục hoành bằng 30 m $\\Rightarrow 2a = 30 \\Rightarrow a=15$, đồ thị cắt $Ox$ tại $(\pm 15; 0)$.\\n- Mệnh đề 3 SAI vì tháp cao 120 m và gốc $O$ cách đáy dưới 80 m, suy ra cao độ đáy dưới là $y=-80$, đỉnh trên là $y=40$. Điểm đáy dưới thuộc đồ thị là $(40;-80)$, thế vào phương trình tìm được $b^2 = \\dfrac{11520}{11}$.\\n- Mệnh đề 4 ĐÚNG vì thể tích vật thể tròn xoay quanh trục tung được tính bằng công thức: $V = \\pi \\int_{-80}^{40} x^2 \\text{d}y = \\pi \\int_{-80}^{40} 225\\left(1 + \\dfrac{11y^2}{11520}\\right) \\text{d}y = 68250\\pi \\approx 214414 \\text{ m}^3$."
    }
];

window.quizData['on-tn-de-4-2612_p3'] = [
    {
        q: "Cho lăng trụ tam giác đều $A B C \\cdot A_{1} B_{1} C_{1}$ có cạnh $A B = 6$. Gọi $M$ là trung điểm cạnh $A A_{1}$. Biết góc giữa hai đường thẳng $C M$ và $A_{1} B$ là $45^{\\circ}$. Tính khoảng cách giữa hai đường thẳng $C M$ và $A_{1} B$. (Kết quả làm tròn đến hàng phần trăm).",
        answer: "2.45",
        explanation: "Gọi $N$ là trung điểm $AB$, ta có $MN \\parallel A_1B$. Khi đó góc giữa $CM$ và $A_1B$ chính là góc giữa $CM$ và $MN$, do đó $\\widehat{NMC} = 45^\\circ$. Do $CN \\perp (AA_1B_1B) \\Rightarrow CN \\perp MN$, dẫn đến tam giác $MNC$ vuông cân tại $N \\Rightarrow MN = CN = 6\\cdot\\dfrac{\\sqrt{3}}{2} = 3\\sqrt{3}$. Khoảng cách cần tính bằng khoảng cách từ đường thẳng $A_1B$ song song đến mặt phẳng $(CMN)$, tức là bằng khoảng cách từ điểm $A$ đến mặt phẳng $(CMN)$. Hạ $AH \\perp MN$ tại $H$, vì $CN \\perp AH$ nên $AH \\perp (CMN) \\Rightarrow d = AH$. Tính toán trong tam giác vuông $AMN$ với $AN=3, AM=3\\sqrt{2}$ ta được $\\dfrac{1}{AH^2} = \\dfrac{1}{AM^2} + \\dfrac{1}{AN^2} = \\dfrac{1}{18} + \\dfrac{1}{9} = \\dfrac{1}{6} \\Rightarrow AH = \\sqrt{6} \\approx 2,45$."
    },
    {
        q: "Bạn Xuân Anh có một tờ giấy cứng hình chữ nhật $ABCD$ với $AB = 4\\text{ dm}$, $AD = 2\\text{ dm}$. Bạn chọn điểm $M$ thuộc cạnh $BC$ rồi dùng thước kẻ vạch và cắt tờ giấy theo đường $AM$, chia tờ giấy thành hai phần. Phần chứa cạnh $CD$ cắt một hình vuông có đỉnh $D$, hai cạnh thuộc $DA, DC$, đỉnh còn lại thuộc đường cắt $AM$. Phần chứa cạnh $AB$ cắt một hình tròn nội tiếp tam giác $ABM$. Gọi $S$ là tổng diện tích của hình vuông và hình tròn cắt được. Hỏi khi $M$ di động trên $BC$, giá trị nhỏ nhất của $S$ bằng bao nhiêu $\\text{dm}^2$ (làm tròn đến hàng phần trăm)?",
        image: "images/2612OnTNDe4/2612OnTNDe4TLN2.png",
        answer: "3.16",
        explanation: "Đặt $BM = x$ ($0 \\le x \\le 2$). Gắn hệ trục tọa độ với $A(0;0), B(4;0), D(0;2) \\Rightarrow M(4;x)$, phương trình đường thẳng $AM: y = \\dfrac{x}{4}X$.\\n- Với hình vuông cạnh $a$, đỉnh thuộc $AM$ là $N(a; 2-a) \\Rightarrow 2-a = \\dfrac{x}{4}a \\Rightarrow a = \\dfrac{8}{x+4} \\Rightarrow S_1 = \\dfrac{64}{(x+4)^2}$.\\n- Với tam giác vuông $ABM$ vuông tại $B$ có hai cạnh góc vuông bằng 4 và $x$, bán kính đường tròn nội tiếp là $r = \\dfrac{4+x-\\sqrt{16+x^2}}{2} \\Rightarrow S_2 = \\pi r^2$.\\nKhảo sát hàm tổng diện tích $S(x) = S_1 + S_2$ trên đoạn $[0;2]$, ta tìm được giá trị nhỏ nhất tại $x \\approx 0,985$ với tổng diện tích tối thiểu tương ứng đạt $S_{\\min} \\approx 3,16 \\text{ dm}^2$."
    },
    {
        q: "Một chiếc khay đựng đầy nước có dạng hình hộp chữ nhật với kích thước: chiều dài 20 cm, chiều rộng 10 cm, chiều cao 8 cm (hình a). Để san bớt nước cho đỡ đầy, người ta đổ nước từ chiếc khay thứ nhất đó sang chiếc khay thứ hai có dạng hình chóp cụt tứ giác đều với đáy khay là hình vuông nhỏ có đường chéo dài $n\\text{ (cm)}$, miệng khay là hình vuông lớn có đường chéo dài $2n\\text{ (cm)}$ (hình b). Sau khi đổ, mực nước ở khay thứ hai cao bằng $\\dfrac{2}{5}$ chiều cao của khay đó và lượng nước trong khay thứ nhất giảm đi $\\dfrac{1}{4}$ so với ban đầu. Thể tích của chiếc khay thứ hai theo đơn vị centimet khối có kết quả chính xác đến hàng đơn vị là $a \\text{ (cm}^3\\text{)}$. Tính tổng các chữ số của số $a$.",
        image: "images/2612OnTNDe4/2612OnTNDe4TLN3.png",
        answer: "13",
        explanation: "Thể tích nước đổ sang khay hai là $V_n = \\dfrac{1}{4} \\cdot (20 \\cdot 10 \\cdot 8) = 400 \\text{ cm}^3$. Khay hai có diện tích đáy nhỏ $S_1 = \\dfrac{1}{2}n^2$, diện tích đáy lớn $S_2 = 2n^2$. Gọi $h$ là chiều cao khay, thể tích khay hai là $V_2 = \\dfrac{7}{6}hn^2$. Khối nước trong khay hai là chóp cụt có chiều cao $h_n = \\dfrac{2}{5}h$, đường chéo mặt nước tỉ lệ tuyến tính $d_n = n + \\dfrac{2}{5}(2n-n) = \\dfrac{7}{5}n \\Rightarrow S_n = \\dfrac{49}{50}n^2$. Thế vào công thức thể tích khối nước: $400 = \\dfrac{1}{3} \\cdot \\dfrac{2}{5}h \\cdot \\left(S_1 + S_n + \\sqrt{S_1S_n}\\right) = \\dfrac{109}{375}hn^2 \\Rightarrow hn^2 = \\dfrac{150000}{109}$. Thay vào công thức thể tích tổng thể khay hai: $V_2 = \\dfrac{7}{6} \\cdot \\dfrac{150000}{109} = \\dfrac{175000}{109} \\approx 1605,5 \\Rightarrow a = 1606$. Tổng các chữ số bằng $1+6+0+6 = 13$."
    },
    {
        q: "Người ta dự định trồng hoa để trang trí vào phần tô đậm trong hình vẽ dưới đây. Biết rằng phần tô đậm là diện tích hình phẳng giới hạn bởi đồ thị hai hàm số $y = f(x) = ax^3 + bx^2 + cx + 6$ và $y = g(x) = -bx^2 + mx + n$ trong đó $a, b, c, m, n \\in \\mathbb{R}$. Biết đồ thị hai hàm số đã cho cắt nhau tại các điểm có hoành độ lần lượt bằng $-2; 1; 3$. Chi phí trồng hoa là 150.000 đồng/$1\\text{ m}^2$ và đơn vị trên mỗi trục tọa độ là mét. Tổng chi phí để trồng hoa theo dự định là bao nhiêu nghìn đồng (làm tròn kết quả đến hàng đơn vị)?",
        image: "images/2612OnTNDe4/2612OnTNDe4TLN4.png",
        answer: "3163",
        explanation: "Xét hàm số hiệu khoảng cách $h(x) = f(x) - g(x) = ax^3 + 2bx^2 + (c-m)x + 6-n$. Do cắt nhau tại ba giao điểm nên viết dưới dạng nhân tử: $h(x) = a(x+2)(x-1)(x-3) = a(x^3 - 2x^2 - 5x + 6)$. Đồng nhất hệ số tự do ta được $6a = 6-n$. Vì đồ thị parabol $g(x)$ đi qua gốc tọa độ nên $g(0) = n = 0 \\Rightarrow 6a = 6 \\Rightarrow a = 1$. Khi đó hàm hiệu hoàn chỉnh là $h(x) = x^3 - 2x^2 - 5x + 6$. Diện tích phần hình phẳng tô đậm bằng tích phân trị tuyệt đối từ -2 đến 3: $S = \\int_{-2}^1 h(x)\\text{d}x - \\int_1^3 h(x)\\text{d}x = \\dfrac{253}{12} \\text{ m}^2$. Tổng chi phí trồng hoa tương ứng là $T = \\dfrac{253}{12} \\cdot 150.000 = 3.162.500$ đồng $= 3162,5$ nghìn đồng, làm tròn đến hàng đơn vị là 3163."
    },
    {
        q: "Trong một cuộc thi pha chế, mỗi đội chơi được sử dụng tối đa 15 gam hương liệu hòa tan, 10 lít nước và 450 gam đường để pha chế hai loại nước $A$ và $B$. Để pha chế 1 lít nước loại $A$ cần 50 gam đường, 1 lít nước và 0,6 gam hương liệu. Để pha chế 1 lít nước loại $B$ cần 20 gam đường, 1 lít nước và 1,5 gam hương liệu. Mỗi lít nước loại $A$ nhận được 70 điểm thưởng, mỗi lít nước loại $B$ nhận được 90 điểm thưởng. Để đội chơi được số điểm thưởng là lớn nhất thì cần pha chế $a$ lít nước loại $A$ và $b$ lít nước loại $B$. Tính tổng $a + b$.",
        answer: "10",
        explanation: "Gọi số lít nước loại $A, B$ lần lượt là $x, y \\ge 0$. Ta lập hệ bất phương trình ràng buộc tài nguyên quy hoạch tuyến tính: $\\{ x+y \\le 10; 2x+5y \\le 50; 5x+2y \\le 45 \\}$. Hàm mục tiêu điểm thưởng thu được là $F(x,y) = 70x + 90y$. Xác định miền nghiệm đa giác tạo bởi các đỉnh $O(0;0), M(9;0), N(25/3; 5/3), P(0;10)$. Kiểm tra giá trị hàm điểm thưởng tại bốn góc phần tư này ta thấy giá trị cực đại đạt được tại đỉnh $P(0;10)$ với số điểm bằng 900. Khi đó đội cần pha chế $a=0$ và $b=10$, tổng cần tìm là $a+b=10$."
    },
    {
        q: "Vương đưa ra cho con trai của anh ấy một câu đố như sau: trong một ma trận $3 \\times 3$, điền 9 số tự nhiên từ 1 đến 9 thỏa mãn hai điều kiện: Tổng của mỗi hàng, mỗi cột và tổng của 3 ô trên hai đường chéo là bằng nhau; Các số điền vào là các số đôi một khác nhau. Số cách mà con trai anh Vương điền vào ma trận bằng bao nhiêu?",
        image: "images/2612OnTNDe4/2612OnTNDe4TLN6.png",
        answer: "8",
        explanation: "Bài toán yêu cầu thiết lập số lượng cấu trúc ma phương cấp 3. Tổng các số từ 1 đến 9 bằng 45, do có 3 hàng nên tổng mỗi hàng/cột/chéo phải bằng $45/3 = 15$. Ô chính giữa tâm ma trận là giao của 4 đường thẳng dóng nên giá trị bắt buộc cố định bằng $15/3 = 5$. Các cặp số đối xứng qua tâm có tổng bằng 10 gồm (1,9), (2,8), (3,7), (4,6). Ô ở 4 góc là giao của 3 đường nên bắt buộc phải điền các số chẵn {2, 4, 6, 8}. Chọn góc cho số 8 có 4 cách, góc đối diện qua tâm cố định là số 2 (1 cách), hai ô góc còn lại xếp cặp (4,6) có $2! = 2$ cách, các ô biên còn lại tự động xác định duy nhất. Số cách điền thỏa mãn là $4 \\cdot 1 \\cdot 2 \\cdot 1 = 8$ cách."
    }
];