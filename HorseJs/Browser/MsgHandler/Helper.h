#pragma once
#include <codecvt> // codecvt_utf8
#include <locale>  // wstring_convert
#include "include/views/cef_browser_view.h"
#include "include/views/cef_window.h"
#include "../../Common/json.hpp"
using nlohmann::json;
namespace {
    std::wstring_convert<std::codecvt_utf8<wchar_t>> utf8Conv;
    class Helper
    {
    public:
        Helper() = delete;
        static void SendMsg(const CefRefPtr<CefFrame> frame, const CefString& msgName, const json& data) {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(msgName);
            CefRefPtr<CefListValue> msgArgs = msg->GetArgumentList();
            std::string dataStr = data.dump();
            msgArgs->SetString(0, dataStr);
            frame->SendProcessMessage(PID_RENDERER, msg);
        }
        static void SendMsg(const CefRefPtr<CefFrame> frame, const CefString& msgName, const CefRefPtr<CefBinaryValue> data) {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(msgName);
            CefRefPtr<CefListValue> msgArgs = msg->GetArgumentList();
            msgArgs->SetBinary(0, data);
            frame->SendProcessMessage(PID_RENDERER, msg);
        }
        static json getConfig(CefRefPtr<CefProcessMessage> message) {
            CefRefPtr<CefListValue> args = message->GetArgumentList();
            std::string configStr = args->GetString(0).ToString();
            json config = json::parse(configStr);
            return config;
        }
        static std::string getFilter(CefRefPtr<CefProcessMessage> message) {
            std::string filterName = message->GetName();
            filterName.erase(0, filterName.find_first_of('_') + 1);
            filterName = filterName.substr(0, filterName.find_first_of('_'));
            return filterName;
        }
        static std::wstring convertString(const std::string& target) {
            return utf8Conv.from_bytes(target);
        }
        static std::string convertString(const std::wstring& target) {
            return utf8Conv.to_bytes(target);
        }
    };
}
