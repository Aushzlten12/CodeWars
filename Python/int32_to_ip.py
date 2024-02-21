def int32_to_ip(int32):
    string_data_binary = format(int32, "b")
    if len(string_data_binary) == 0:
        return "0.0.0.0"
    convert_to_32 = "0" * (32 - len(string_data_binary)) + string_data_binary
    ip = []
    octet = ""
    for i in convert_to_32:
        octet += i
        if len(octet) == 8:
            decimal_octet = int(octet, 2)
            ip.append(str(decimal_octet))
            octet = ""
            continue
    return ".".join(ip)


int32_to_ip(2149583361)
