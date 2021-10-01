#pragma once
#include "include/wrapper/cef_message_router.h"
#include "include/cef_browser.h"
class DialogCallback : public CefRunFileDialogCallback
{
public:
	DialogCallback() = default;
	void OnFileDialogDismissed(int selected_accept_filter, const std::vector<CefString>& file_paths) OVERRIDE
	{

	}
private:
	IMPLEMENT_REFCOUNTING(DialogCallback);
	DISALLOW_COPY_AND_ASSIGN(DialogCallback);
};