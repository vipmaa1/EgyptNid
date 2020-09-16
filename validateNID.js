function validateNID(e) {

        function o(e) {

            var o = new Date,

                s = new Date(e),

                r = o.getFullYear() - s.getFullYear(),

                g = o.getMonth() - s.getMonth();

            return (0 > g || 0 === g && o.getDate() < s.getDate()) && r-- ,

                r

        }



        if (result.reset(), "undefined" == typeof e || !e || null == e)

            return result.status = false, result.message = "هذا الحقل مطلوب", result;



        if (e = e.trim(), 14 != e.length)

            return result.status = false, result.message = "الرقم القومى غير صحيح، برجاء إدخال 14 رقم", result;

        var s = e.substring(0, 1),

            r = e.substring(1, 3),

            g = e.substring(3, 5),

            t = e.substring(5, 7);

        if (2 == parseInt(s))

            r = "19" + r;

        else {

            if (3 != parseInt(s))

                return result.status = false, result.message = "الرقم القومى غير صحيح", result;

            r = "20" + r

        }

        var v = null;

        switch (parseInt(g)) {

            case 1:

                v = "January";

                break;

            case 2:

                v = "February";

                break;

            case 3:

                v = "March";

                break;

            case 4:

                v = "April";

                break;

            case 5:

                v = "May";

                break;

            case 6:

                v = "June";

                break;

            case 7:

                v = "July";

                break;

            case 8:

                v = "August";

                break;

            case 9:

                v = "September";

                break;

            case 10:

                v = "October";

                break;

            case 11:

                v = "November ";

                break;

            case 12:

                v = "December"

        }

        var _ = Date.parse(r + "-" + g + "-" + t);

        if (isNaN(_))

            return result.status = false, result.message = "الرقم القومى غير صحيح", result;

        switch (result.birthday = r + "-" + g + "-" + t, result.age = o(result.birthday), e.substring(7, 9)) {

            case "01":

                result.gov_info.gov_code = "01",

                    result.gov_info.gov_id = "1",

                    result.gov_info.gov_name = "القاهرة";

                break;

            case "02":

                result.gov_info.gov_code = "02",

                    result.gov_info.gov_id = "2",

                    result.gov_info.gov_name = "الأسكندرية";

                break;

            case "03":

                result.gov_info.gov_code = "03",

                    result.gov_info.gov_id = "3",

                    result.gov_info.gov_name = "بورسعيد";

                break;

            case "04":

                result.gov_info.gov_code = "04",

                    result.gov_info.gov_id = "4",

                    result.gov_info.gov_name = "السويس";

                break;

            case "06":

                result.gov_info.gov_code = "06",

                    result.gov_info.gov_id = "6",

                    result.gov_info.gov_name = "سته اكتوبر";

                break;

            case "11":

                result.gov_info.gov_code = "11",

                    result.gov_info.gov_id = "11",

                    result.gov_info.gov_name = "دمياط";

                break;

            case "12":

                result.gov_info.gov_code = "12",

                    result.gov_info.gov_id = "12",

                    result.gov_info.gov_name = "الدقهلية";

                break;

            case "13":

                result.gov_info.gov_code = "13",

                    result.gov_info.gov_id = "13",

                    result.gov_info.gov_name = "الشرقية";

                break;

            case "14":

                result.gov_info.gov_code = "14",

                    result.gov_info.gov_id = "14",

                    result.gov_info.gov_name = "القليوبيه";

                break;

            case "15":

                result.gov_info.gov_code = "15",

                    result.gov_info.gov_id = "15",

                    result.gov_info.gov_name = "كفر الشيخ";

                break;

            case "16":

                result.gov_info.gov_code = "16",

                    result.gov_info.gov_id = "16",

                    result.gov_info.gov_name = "الغربية";

                break;

            case "17":

                result.gov_info.gov_code = "17",

                    result.gov_info.gov_id = "17",

                    result.gov_info.gov_name = "المنوفية";

                break;

            case "18":

                result.gov_info.gov_code = "18",

                    result.gov_info.gov_id = "18",

                    result.gov_info.gov_name = "البحيرة";

                break;

            case "19":

                result.gov_info.gov_code = "19",

                    result.gov_info.gov_id = "19",

                    result.gov_info.gov_name = "الاسماعيلية";

                break;

            case "21":

                result.gov_info.gov_code = "21",

                    result.gov_info.gov_id = "21",

                    result.gov_info.gov_name = "الجيزة";

                break;

            case "22":

                result.gov_info.gov_code = "22",

                    result.gov_info.gov_id = "22",

                    result.gov_info.gov_name = "بنى سويـف";

                break;

            case "23":

                result.gov_info.gov_code = "23",

                    result.gov_info.gov_id = "23",

                    result.gov_info.gov_name = "الفيوم";

                break;

            case "24":

                result.gov_info.gov_code = "24",

                    result.gov_info.gov_id = "24",

                    result.gov_info.gov_name = "المنيا";

                break;

            case "25":

                result.gov_info.gov_code = "25",

                    result.gov_info.gov_id = "25",

                    result.gov_info.gov_name = "اسيوط";

                break;

            case "26":

                result.gov_info.gov_code = "26",

                    result.gov_info.gov_id = "26",

                    result.gov_info.gov_name = "سوهاج";

                break;

            case "27":

                result.gov_info.gov_code = "27",

                    result.gov_info.gov_id = "27",

                    result.gov_info.gov_name = "قنا";

                break;

            case "28":

                result.gov_info.gov_code = "28",

                    result.gov_info.gov_id = "28",

                    result.gov_info.gov_name = "أسوان";

                break;

            case "29":

                result.gov_info.gov_code = "29",

                    result.gov_info.gov_id = "29",

                    result.gov_info.gov_name = "الاقصر";

                break;

            case "31":

                result.gov_info.gov_code = "31",

                    result.gov_info.gov_id = "31",

                    result.gov_info.gov_name = "البحر الاحمر";

                break;

            case "32":

                result.gov_info.gov_code = "32",

                    result.gov_info.gov_id = "32",

                    result.gov_info.gov_name = "الوادى الجديد";

                break;

            case "33":

                result.gov_info.gov_code = "33",

                    result.gov_info.gov_id = "33",

                    result.gov_info.gov_name = "مطروح";

                break;

            case "34":

                result.gov_info.gov_code = "34",

                    result.gov_info.gov_id = "34",

                    result.gov_info.gov_name = "شمال سيناء";

                break;

            case "35":

                result.gov_info.gov_code = "35",

                    result.gov_info.gov_id = "35",

                    result.gov_info.gov_name = "جنوب سيناء";

                break;

            case "88":

                result.gov_info.gov_code = "88",

                    result.gov_info.gov_id = "88",

                    result.gov_info.gov_name = "المركز الرئيسي للذين تم قيدهم خارج البلاد";

                break;

            default:

                return result.status = false,

                    result.message = "الرقم القومى غير صحيح",

                    result

        }

        result.gender = parseInt(e.substring(12, 13)) % 2 ? 1 : 2;

        for (var a = e.substring(13, 14), n = e.substring(0, 13), i = 0, u = n.length - 1, l = 2; u >= 0;)

            8 == l && (l = 2), i += l * parseInt(n.substring(u, u + 1)), u -= 1, l += 1;

        var f = 11 - (i - 11 * parseInt(i / 11));

        return f > 9 && (f -= 10),

            parseInt(a) == f ? (result.status = true, result.message = "", result) : (result.status = false, result.message = "خطأ في الرقم القومي", result)
    }
