import type { CSpellUserSettings } from '../client';
import { ConfigFields as CSpellConfigFields } from '@cspell/cspell-types';

export type ConfigKeys = Exclude<keyof CSpellUserSettings, '$schema' | 'version' | 'id' | 'experimental.enableRegexpView'>;

type CSpellUserSettingsFields = {
    [key in ConfigKeys]: key;
};

export const ConfigFields: CSpellUserSettingsFields = {
    ...CSpellConfigFields,
    'advanced.feature.useReferenceProviderRemove': 'advanced.feature.useReferenceProviderRemove',
    'advanced.feature.useReferenceProviderWithRename': 'advanced.feature.useReferenceProviderWithRename',
    allowedSchemas: 'allowedSchemas',
    blockCheckingWhenAverageChunkSizeGreaterThan: 'blockCheckingWhenAverageChunkSizeGreaterThan',
    blockCheckingWhenLineLengthGreaterThan: 'blockCheckingWhenLineLengthGreaterThan',
    blockCheckingWhenTextChunkSizeGreaterThan: 'blockCheckingWhenTextChunkSizeGreaterThan',
    checkLimit: 'checkLimit',
    checkOnlyEnabledFileTypes: 'checkOnlyEnabledFileTypes',
    customDictionaries: 'customDictionaries',
    customFolderDictionaries: 'customFolderDictionaries',
    customUserDictionaries: 'customUserDictionaries',
    customWorkspaceDictionaries: 'customWorkspaceDictionaries',
    diagnosticLevel: 'diagnosticLevel',
    fixSpellingWithRenameProvider: 'fixSpellingWithRenameProvider',
    logLevel: 'logLevel',
    logFile: 'logFile',
    mapOfEnabledFileTypes: 'mapOfEnabledFileTypes',
    maxDuplicateProblems: 'maxDuplicateProblems',
    maxNumberOfProblems: 'maxNumberOfProblems',
    noSuggestDictionaries: 'noSuggestDictionaries',
    showAutocompleteSuggestions: 'showAutocompleteSuggestions',
    showCommandsInEditorContextMenu: 'showCommandsInEditorContextMenu',
    showStatus: 'showStatus',
    showStatusAlignment: 'showStatusAlignment',
    spellCheckDelayMs: 'spellCheckDelayMs',
    spellCheckOnlyWorkspaceFiles: 'spellCheckOnlyWorkspaceFiles',
    suggestionMenuType: 'suggestionMenuType',
    suggestionNumChanges: 'suggestionNumChanges',
    suggestionsTimeout: 'suggestionsTimeout',
    workspaceRootPath: 'workspaceRootPath',
};

// export const ConfigKeysNames = Object.values(ConfigKeysByField);
